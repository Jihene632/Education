import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatiereServiceService } from 'src/app/services/matiere-service.service';
import { Matiere} from 'src/app/models/Matiere';

@Component({
  selector: 'app-edit-matiere',
  templateUrl: './edit-matiere.component.html',
  styleUrls: ['./edit-matiere.component.css']
})
export class EditMatiereComponent implements OnInit {

 
  editE:FormGroup;
  mat:Matiere=new Matiere();
  
 
 
  constructor(private service:MatiereServiceService,private router:Router,private form:FormBuilder) {
    
    this.editE=this.form.group({
      nomMatiere: ["", [Validators.required]],
      coefficient: ['', [Validators.required]],
      
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
      
     this.mat=data
  
      
      
      

    
    })

  }
  ModifPerso(){
  
  
    this.service.Edit(this.mat,this.mat.id)
    .subscribe(data=>{
      this.mat=data
    
      this.router.navigate(["/listeMatieres"]);
    })
     
  }

}
