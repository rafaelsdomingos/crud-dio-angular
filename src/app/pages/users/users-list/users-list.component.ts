import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: Array<User> = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  

  getUsers(): void{
    this.userService.getUsers().subscribe(response => {
      this.users = response;
    })
  }

  deleteUser(id: number): void{
    this.userService.deleteUser(id).subscribe({
      next: response => {
        console.log("Usuário Excluído");
      },
      error: err => {console.log('Error', err)},
      complete: () => {this.getUsers()}     
    })
  }
}
