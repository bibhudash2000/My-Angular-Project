import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['username', 'email', 'firstName', 'lastName'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>;
  users:any = [];
  constructor(private userSerice: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userSerice.getUsers().subscribe((user) => {
      this.users = user;
      this.dataSource = new MatTableDataSource<any>(this.users);
    });
  }

}
