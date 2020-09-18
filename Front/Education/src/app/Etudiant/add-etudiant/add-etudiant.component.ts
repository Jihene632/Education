import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Etudiant } from 'src/app/models/Etudiant';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {
  addE:FormGroup
  constructor(private service:EtudiantService,private router:Router,private form:FormBuilder) { 
    this.addE=this.form.group({
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required,Validators.minLength(6)]],
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      tel: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
  }
  logout(){
    localStorage.clear();
  }

  ajoutEtud(){
    
    const nom=this.addE.get('nom').value;
    const prenom=this.addE.get('prenom').value;
    const tel=this.addE.get('tel').value;

    const email=this.addE.get('email').value;
    const password=this.addE.get('password').value;
    const user ={email,password}
    const id=0
    const moyenne=0
  

    
  this.service.addEtudiant({id,user,nom,prenom,moyenne,tel})
  .subscribe(data=>{
    this.router.navigate(["/listeEtudiants"]);
  
  })
  }
}
