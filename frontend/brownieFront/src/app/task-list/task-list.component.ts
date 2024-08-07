import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.apiService.getTasks(Number(userId)).subscribe(
        tasks => this.tasks = tasks,
        error => alert('Erro ao carregar tarefas')
      );
    } else {
      alert('Usuário não autenticado');
    }
  }
}
