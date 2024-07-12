
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../env/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiUrl = environment.apiUrl;


  constructor(private http: HttpClient) { }

  getAllQuestions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/questions`);
  }

  addQuestion(question: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/questions`, question);
  }
}
