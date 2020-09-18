import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Etudiant } from 'src/app/models/Etudiant';

@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.css']
})
export class EditEtudiantComponent implements OnInit {

  editE:FormGroup;
  etud:Etudiant=new Etudiant();
  
 
 
  constructor(private service:EtudiantService,private router:Router,private form:FormBuilder) {
    
    this.editE=this.form.group({
      nom: ["", [Validators.required]],
      prenom: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      email:['',Validators.required],
       password:['',Validators.required]
    })}
  ngOnInit(): void {
    this.Actualiser()
  }

  logout(){
    localStorage.clear();
  }

  Actualiser(){
    
    let Id=localStorage.getItem("id");
 
    this.service.findById(+Id)
    .subscribe(data=>{
      
     this.etud=data
  
      
      
      

    
    })

  }
  ModifPerso(){
  
  
    this.service.Edit(this.etud,this.etud.id)
    .subscribe(data=>{
      this.etud=data
    
      this.router.navigate(["/listeEtudiants"]);
    })
     
  }

}
