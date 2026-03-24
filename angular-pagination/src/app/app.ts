import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']   // ✅ ADD THIS
})
export class App {
  users: any[] = [];
  page: number = 1;
  perPage: number = 5;
  totalPages: number = 1;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    const allUsers = [
      { first_name: 'George', email: 'george@reqres.in', avatar: 'https://i.pravatar.cc/150?img=1' },
      { first_name: 'Janet', email: 'janet@reqres.in', avatar: 'https://i.pravatar.cc/150?img=2' },
      { first_name: 'Emma', email: 'emma@reqres.in', avatar: 'https://i.pravatar.cc/150?img=3' },
      { first_name: 'Eve', email: 'eve@reqres.in', avatar: 'https://i.pravatar.cc/150?img=4' },
      { first_name: 'Charles', email: 'charles@reqres.in', avatar: 'https://i.pravatar.cc/150?img=5' },
      { first_name: 'Tracey', email: 'tracey@reqres.in', avatar: 'https://i.pravatar.cc/150?img=6' },
      { first_name: 'Michael', email: 'michael@reqres.in', avatar: 'https://i.pravatar.cc/150?img=7' },
      { first_name: 'Lindsay', email: 'lindsay@reqres.in', avatar: 'https://i.pravatar.cc/150?img=8' },
      { first_name: 'Tobias', email: 'tobias@reqres.in', avatar: 'https://i.pravatar.cc/150?img=9' },
      { first_name: 'Byron', email: 'byron@reqres.in', avatar: 'https://i.pravatar.cc/150?img=10' },
      { first_name: 'Lara', email: 'Lara@reqres.in', avatar: 'https://i.pravatar.cc/150?img=11' },
      { first_name: 'John', email: 'john@reqres.in', avatar: 'https://i.pravatar.cc/150?img=12' },
      { first_name: 'Byron', email: 'byron@reqres.in', avatar: 'https://i.pravatar.cc/150?img=13' },
      { first_name: 'Byron', email: 'byron@reqres.in', avatar: 'https://i.pravatar.cc/150?img=14' }
    ];

    this.totalPages = Math.ceil(allUsers.length / this.perPage);

    const start = (this.page - 1) * this.perPage;
    const end = start + this.perPage;

    this.users = allUsers.slice(start, end);
  }

  changePage(p: number) {
    this.page = p;
    this.getUsers();
  }

  changePageSize(size: number) {
    this.perPage = Number(size);
    this.page = 1;
    this.getUsers();
  }
}
