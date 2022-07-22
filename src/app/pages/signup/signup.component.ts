import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    roles: [
      {
        id: 2
      }
    ]
  }
  constructor(private userSerice: UserService) { }

  ngOnInit(): void {
  }

  submitForm() {
    this.userSerice.addUser(this.user).subscribe(
      (data) => {
        alert("saved successfully");
      }, (error) => {
        alert("error:"+error.message);
      }
    )
  }

}
