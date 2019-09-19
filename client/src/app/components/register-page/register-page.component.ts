import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  form: FormGroup;
  message;
  messageClass;

  createForm(){
    this.form = this.formBuilder.group({
      email: '',
      username: '',
      password: '',
      re_password: ''
    })
  }

  onRegisterSubmit(){
    const user = {
      email: this.form.get('email').value,
      username: this.form.get('username').value,
      password: this.form.get('password').value
    }

    

    this.authService.registerUser(user).subscribe(data => {
      if(!data.success){
        this.messageClass="alert alert-danger";
        this.message = data.message;
      }else{
        this.messageClass="alert alert-success";
        this.message = data.message;
        setTimeout(()=>{
          this.router.navigate(['/login']);
        },2000)
      }
    });
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.createForm()
   }

  ngOnInit() {
  }

}
