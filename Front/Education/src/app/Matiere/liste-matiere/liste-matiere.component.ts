import { Component, OnInit } from '@angular/core';
import { MatiereServiceService } from 'src/app/services/matiere-service.service';
import { Router } from '@angular/router';
import {Matiere} from 'src/app/models/Matiere'
@Component({
  selector: 'app-liste-matiere',
  templateUrl: './liste-matiere.component.html',
  styleUrls: ['./liste-matiere.component.css']
})
export class ListeMatiereComponent implements OnInit {
  errorMessage:string;
  constructor(private MatiereService:MatiereServiceService,private router:Router) { }
  matieres:Matiere[]
  ngOnInit(): void {
    this.findAllMatieres();
  }
  findAllMatieres(){
    this.MatiereService.findAll()
    .subscribe(data=>{
      this.matieres=data;
      console.log(this.matieres)
      
    })
  }
  logout(){
    localStorage.clear();
  }

  removeE(id:number) {
    if(id === undefined) {
      this.errorMessage="An error occured while removing the personnel";
      return;
    }
    if (confirm("Do you really want to delete this subject")) {
      this.MatiereService.deleteE(id)
       
        .subscribe(data => {
          this.findAllMatieres();
         
      
      },error=>
      {
        if(error.status === 404) {
          this.errorMessage = "An error occured while removing this Subject";
        }
        
        if(error.status === 200) {
          confirm("Subject successfully removed");
          this.findAllMatieres();
          
        }
        });
    }
   
  }
  edit(id:number):void {
    if(id === undefined) {
     this.errorMessage="An error occured while updatinng the Subject";
    return;
    }
    
  localStorage.setItem("id",id.toString());
  
  this.router.navigate(["/EditMatiere"]);
  
  }
  
  filter(keyWord: string) {
    if (keyWord === undefined || keyWord.length === 0) {
      this.findAllMatieres();
      return;
    }
    this.matieres = this.matieres.filter(mat=> 
     mat.nomMatiere .toLowerCase().includes(keyWord) 
    );
  }

}
