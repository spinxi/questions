import { Component, OnInit } from '@angular/core';
import { environment } from '../../../env/environment';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-submitted',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './submitted.component.html',
  styleUrl: './submitted.component.css'
})
export class SubmittedComponent implements OnInit {
  users: any[] = [];
  selectedUserResponses: any[] = [];
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.http.get<any[]>(`${this.apiUrl}/api/users`).subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users: ', error);
      }
    );
  }

  getUserResponses(userId: number): void {
    this.http.get<any[]>(`${this.apiUrl}/api/responses/user/${userId}`).subscribe(
      (data) => {
        this.selectedUserResponses = data;
      },
      (error) => {
        console.error(`Error fetching responses for user ${userId}: `, error);
      }
    );
  }
}