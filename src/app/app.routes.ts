import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { AnswerquestionsComponent } from './components/answerquestions/answerquestions.component';
import { AdminComponent } from './components/admin/admin.component';
import { SubmittedComponent } from './components/submitted/submitted.component';
export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'answers', component: AnswerquestionsComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'submitted', component: SubmittedComponent },
    { path: '**', redirectTo: '/login' },

];

