import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import Swal from 'sweetalert2';

import { StudyProgramme } from '../interfaces/study-programme.model';
import { StudyProgrammeService } from '../services/study-programme.service';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-programme-study',
  templateUrl: './programme-study.component.html',
  styleUrls: ['./programme-study.component.css'],
})
export class ProgrammeStudyComponent implements OnInit {
  programmes: StudyProgramme[] = [];
  filteredProgrammes: StudyProgramme[] = [];
  filtro: string = '';
  searchModule: string = '';
  searchStatus: string = '';
  statusFilter: any;

  constructor(
    private studyProgrammeService: StudyProgrammeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerProgrammes();
  }

  obtenerProgrammes() {
    this.studyProgrammeService
      .getActiveProgrammes()
      .pipe(
        catchError((error) => {
          console.error('Error al obtener datos:', error);
          Swal.fire(
            'Error',
            'No se pudieron obtener los datos de los programas de estudio',
            'error'
          );
          return of([]);
        })
      )
      .subscribe((data: StudyProgramme[]) => {
        this.programmes = data;
        this.filteredProgrammes = data;
        this.filterResults();
      });
  }

  filterResults() {
    this.filteredProgrammes = this.programmes.filter((programme) => {
      const matchesName = programme.name
        .toLowerCase()
        .includes(this.filtro.toLowerCase());
      const matchesModule = programme.module
        .toLowerCase()
        .includes(this.searchModule.toLowerCase());
      const matchesStatus = programme.status.includes(this.searchStatus);
      return matchesName && matchesModule && matchesStatus;
    });
  }

  exportToCSV(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(
      this.filteredProgrammes
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Programmes');
    XLSX.writeFile(wb, 'Programmes.csv');
  }

  exportToExcel(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(
      this.filteredProgrammes
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Programmes');
    XLSX.writeFile(wb, 'Programmes.xlsx');
  }

  exportToPDF(): void {
    const doc = new jsPDF();
    const tableData = this.filteredProgrammes.map((programme) => [
      programme.name,
      programme.module,
      programme.trainingLevel,
      programme.studyPlanType,
      programme.credits,
      programme.hours,
      programme.status,
    ]);

    doc.autoTable({
      head: [
        [
          'Nombre',
          'Módulo',
          'Nivel de formación',
          'Plan de estudio',
          'Créditos',
          'Horas',
          'Estado',
        ],
      ],
      body: tableData,
    });

    doc.save('Programmes.pdf');
  }


  updateProgramme(programme: StudyProgramme): void {
    this.router.navigate(['/programme-study/actualizar', programme.id]);
  }

  deleteProgramme(programme: StudyProgramme): void {
    Swal.fire({
      title: 'Confirmar eliminación',
      text: `¿Estás seguro de que deseas eliminar el programa de estudio ${programme.name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.studyProgrammeService
          .deleteProgramme(programme.id)
          .subscribe(() => {
            this.obtenerProgrammes(); // Refresca la lista de programas de estudio
            Swal.fire(
              'Programa eliminado',
              'El programa de estudio ha sido eliminado con éxito',
              'success'
            );
          });
      }
    });
  }
}
