import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    if (this.isBrowser()) {
      const userId = localStorage.getItem('userId');
      if (userId) {
        this.apiService.getTasks(Number(userId)).subscribe(
          (data: any[]) => {
            this.tasks = data;
          },
          error => {
            console.error('Erro ao carregar tarefas:', error);
          }
        );
      } else {
        console.error('Usuário não encontrado no localStorage.');
      }
    } else {
      console.error('localStorage não está disponível.');
    }
  }
  
  isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
