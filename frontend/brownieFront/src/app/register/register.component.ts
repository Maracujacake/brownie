import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common'; 
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule, 
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgIf 
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nome: string = '';
  senha: string = '';

  constructor(private apiService: ApiService, private router: Router) { }

  onSubmit() {
    this.apiService.register(this.nome, this.senha).subscribe(
      response => {
        console.log(response);
        alert('Usuário cadastrado com sucesso!');
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Erro ao cadastrar usuário:', error); // Adiciona log do erro
        alert('Erro ao cadastrar usuário');
      }
    );
  }
}
