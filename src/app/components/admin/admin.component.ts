import { Component, OnInit } from '@angular/core';
// import { QuestionService } from '../../services/question.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../env/environment';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule,CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  addQuestionForm: FormGroup;
  questions: any[] = [];
  private apiUrl = environment.apiUrl;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.addQuestionForm = this.fb.group({
      questionText: ['', Validators.required],
      questionAnswer: ['', Validators.required],
      isMandatory: [false]
    });
  }

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.http.get<any[]>(`${this.apiUrl}/api/questions`).subscribe(
      (data) => {
        this.questions = data;
      },
      (error) => {
        console.error('Error fetching questions: ', error);
      }
    );
  }

  onSubmit(): void {
    if (this.addQuestionForm.invalid) {
      console.error('Form is invalid.');
      return;
    }

    const questionData = this.addQuestionForm.value;

    this.http.post(`${this.apiUrl}/api/questions`, questionData).subscribe(
      () => {
        console.log('Question added successfully.');
        this.loadQuestions();
        this.addQuestionForm.reset();
      },
      (error) => {
        console.error('Error adding question: ', error);
      }
    );
  }
}