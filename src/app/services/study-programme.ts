import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudyProgramme } from '../interfaces/study-programme.model';

@Injectable({
  providedIn: 'root'
})
export class StudyProgrammeService {
  private apiUrl = 'https://8080-vallegrande-vgmsprogram-oxhuj3flvek.ws-us114.gitpod.io/study-programme/list'; // URL de la API

  constructor(private http: HttpClient) { }

  getActiveProgrammes(): Observable<StudyProgramme[]> {
    return this.http.get<StudyProgramme[]>(`${this.apiUrl}/list/active`);
  }

  getInactiveProgrammes(): Observable<StudyProgramme[]> {
    return this.http.get<StudyProgramme[]>(`${this.apiUrl}/list/inactive`);
  }

  createProgramme(studyProgramme: StudyProgramme): Observable<StudyProgramme> {
    return this.http.post<StudyProgramme>(`${this.apiUrl}/create`, studyProgramme);
  }

  updateProgramme(id: string, studyProgramme: StudyProgramme): Observable<StudyProgramme> {
    return this.http.put<StudyProgramme>(`${this.apiUrl}/update/${id}`, studyProgramme);
  }

  activateProgramme(id: string): Observable<StudyProgramme> {
    return this.http.put<StudyProgramme>(`${this.apiUrl}/activate/${id}`, {});
  }

  deactivateProgramme(id: string): Observable<StudyProgramme> {
    return this.http.put<StudyProgramme>(`${this.apiUrl}/deactivate/${id}`, {});
  }

  getProgrammeById(id: string): Observable<StudyProgramme> {
    return this.http.get<StudyProgramme>(`${this.apiUrl}/get/${id}`);
  }
}
