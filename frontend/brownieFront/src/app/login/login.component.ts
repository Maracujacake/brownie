import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import  { Router } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule, 
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgIf,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  id: number | null = null;
  senha: string = '';

  constructor(private apiService: ApiService, private router: Router) { }

  onSubmit() {
    if (this.id !== null) {
      this.apiService.login(this.id, this.senha).subscribe(
        response => {
          localStorage.setItem('userId', this.id!.toString());
          this.router.navigate(['/tasks']);
        },
        error => {
          alert('Erro ao fazer login');
        }
      );
    }
  }
}
