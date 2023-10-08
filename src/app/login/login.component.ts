import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup , FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public loginForm!: FormGroup;

  constructor ( private formBuilder: FormBuilder, 
    private http: HttpClient,
    private router: Router){

  };
 

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    })
  }

 
  login(){
    this.http.get<any>("http://localhost:3000/signupUsers" )
    .subscribe(res => {
      const user = res.find((a:any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user) {
        alert("Login successfull");
        this.loginForm.reset();
        this.router.navigate(['home'])
      } else {
        alert("User not found");
      }

    }, err => {
      alert("Something went wrong")
    })

  }

// logInForm = this.FormBuilder.group({

//     userName: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]{3,}$/)])],
//     password: ['', Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z]{5,}$/)])],

// });





// save(event: Event) {
//     event.preventDefault();
//     if(this.logInForm.valid) {

//     } else {
//         // alert('you must fill the form')
//         this.logInForm.markAllAsTouched();
//     };


// }


get emailField( ){
  return this.loginForm.get('email')
}


get passwordField( ){
  return this.loginForm.get('password')
}

  
}
