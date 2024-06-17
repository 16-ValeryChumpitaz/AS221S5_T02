import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import Swal from 'sweetalert2';
import { StudyProgramme } from '../interfaces/study-programme';
import { StudyProgrammeService } from '../services/study-programme.service';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


@Component({
  selector: 'app-study-programme',
  templateUrl: './study-programme.component.html',
  styleUrls: ['./study-programme.component.css']
})
export class StudyProgrammeComponent {

  filteredStudyProgramme: any;
  deleteStudyProgramme(arg0: any) {
    throw new Error('Method not implemented.');
  }
  updateStudyProgramme(arg0: any) {
    throw new Error('Method not implemented.');
  }
  programmes: StudyProgramme[] = [];
  filteredProgrammes: StudyProgramme[] = [];
  filtro: string = '';
  searchModule: string = '';
  searchStatus: string = '';
  statusFilter: any;
  StudyProgramme: any;
  filteredUsers: StudyProgramme[] = [];
  StudyProgrammes: StudyProgramme[] = [];

  constructor(
    private StudyProgrammeService: StudyProgrammeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerStudyProgramme();
  }

  obtenerStudyProgramme() {
    this.StudyProgrammeService.getActiveStudyProgramme().pipe(
      catchError(error => {
        console.error('Error al obtener datos:', error);
        Swal.fire('Error', 'No se pudieron obtener los datos de los usuarios', 'error');
        return of([]);
      })
    ).subscribe((data: StudyProgramme[]) => {
      this.StudyProgrammes = data;
      this.filteredUsers = data; // Inicializa filteredUsers con todos los datos
      this.filterResults(); // Filtra inicialmente los resultados
    });
  }


  

  filterResults() {
    this.filteredStudyProgramme = this.StudyProgrammes.filter((StudyProgramme)=> {
      const matchesName = StudyProgramme.name.toLowerCase().includes(this.filtro.toLowerCase());
      const matchesDocument = StudyProgramme.module.toLowerCase().includes(this.filtro.toLowerCase());
        
      return matchesName && matchesDocument;
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
    const tableData = this.filteredProgrammes.map((StudyProgramme) => [
      StudyProgramme.name,
      StudyProgramme.module,
      StudyProgramme.trainingLevel,
      StudyProgramme.studyPlanType,
      StudyProgramme.credits,
      StudyProgramme.hours,
      StudyProgramme.status,
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

  updateProgramme(StudyProgramme: StudyProgramme): void {
    this.router.navigate(['/programme-study/actualizar', StudyProgramme.id]);
  }

  deleteProgramme(StudyProgramme: StudyProgramme): void {
    Swal.fire({
      title: 'Confirmar eliminación',
      text: `¿Estás seguro de que deseas eliminar el programa de estudio ${StudyProgramme.name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.StudyProgrammeService.deleteStudyProgramme(
          StudyProgramme.id
        ).subscribe(() => {
          this.obtenerStudyProgramme(); // Refresca la lista de programas de estudio
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