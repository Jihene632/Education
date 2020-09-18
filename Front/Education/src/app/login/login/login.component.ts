import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
import { Responses } from 'src/app/models/Responses';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 loginForm:FormGroup;
errorMessage="";
response:Responses;
  constructor(private formBuilder:FormBuilder,private userService:UserServiceService,private router:Router) { 
this.loginForm=formBuilder.group({
  email: ['',Validators.required],
  password : ['',Validators.required]



});

  }

loginUser(){
  const email=this.loginForm.get('email').value;
  const password=this.loginForm.get('password').value;
this.errorMessage='';
if (this.loginForm.invalid) {
  this.errorMessage = "Champs obligatoires";
  return;

}
this.userService.signin({email,password})
.pipe ()
.subscribe(data=>{
  console.log(data)
  localStorage.setItem('currentUser',JSON.stringify(data.username));
  let x=JSON.parse(localStorage.getItem('currentUser'))
  console.log(x)
 this.response=data
 if(this.response.authorities[0].authority=="ROLE_Etudiant"){
  this.router.navigate(['/homeEtudiant']);}
  else {
  this.router.navigate(['/listeEtudiants']);}
},error=>
{
  if(error.status === 404) {
    this.errorMessage = "No user was found with the following Email/Password";
  }


});}

  

  ngOnInit() {
  }

}


