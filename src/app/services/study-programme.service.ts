import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StudyProgramme } from '../interfaces/study-programme.model';

@Injectable({
  providedIn: 'root'
})
export class StudyProgrammeService {
  private apiUrl = 'https://8080-vallegrande-vgmsprogram-oxhuj3flvek.ws-us114.gitpod.io/study-programme/list';

  constructor(private http: HttpClient) { }

  getProgrammes(): Observable<StudyProgramme[]> {
    return this.http.get<StudyProgramme[]>(this.apiUrl);
  }

  getActiveProgrammes(): Observable<StudyProgramme[]> {
    const url = `${this.apiUrl}/list/active`;
    return this.http.get<StudyProgramme[]>(url);
  }

  getInactiveProgrammes(): Observable<StudyProgramme[]> {
    const url = `${this.apiUrl}/list/inactive`;
    return this.http.get<StudyProgramme[]>(url);
  }

  createProgramme(studyProgramme: StudyProgramme): Observable<StudyProgramme> {
    const url = `${this.apiUrl}/create`;
    return this.http.post<StudyProgramme>(url, studyProgramme);
  }

  updateProgramme(id: string, studyProgramme: StudyProgramme): Observable<StudyProgramme> {
    const url = `${this.apiUrl}/update/${id}`;
    return this.http.put<StudyProgramme>(url, studyProgramme);
  }

  activateProgramme(id: string): Observable<StudyProgramme> {
    const url = `${this.apiUrl}/activate/${id}`;
    return this.http.put<StudyProgramme>(url, {});
  }

  deactivateProgramme(id: string): Observable<StudyProgramme> {
    const url = `${this.apiUrl}/deactivate/${id}`;
    return this.http.put<StudyProgramme>(url, {});
  }

  deleteProgramme(id: string): Observable<any> {
    const url = `${this.apiUrl}/deactivate/${id}`; // Asumiendo que la URL correcta para eliminar es /deactivate/id
    return this.http.delete(url);
  }

  getProgrammeById(id: string): Observable<StudyProgramme> {
    const url = `${this.apiUrl}/get/${id}`;
    return this.http.get<StudyProgramme>(url);
  }
}
