import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/models/Etudiant';
@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {
  errorMessage:string;
  constructor(private EtudiantService:EtudiantService,private router:Router) { }
  etudiants:Etudiant[];
  ngOnInit(): void {
    this.findAllEtudiants();
  }
  findAllEtudiants(){
    this.EtudiantService.findAll()
    .subscribe(data=>{
      this.etudiants=data;
      
    })
  }

  removeE(id:number) {
    if(id === undefined) {
      this.errorMessage="An error occured while removing the student";
      return;
    }
    if (confirm("Do you really want to delete this student")) {
      this.EtudiantService.deleteE(id)
       
        .subscribe(data => {
          this.findAllEtudiants();
         
      
      },error=>
      {
        if(error.status === 404) {
          this.errorMessage = "An error occured while removing this personnel";
        }
        
        if(error.status === 200) {
          confirm("personnel successfully removed");
          this.findAllEtudiants();
          
        }
        });
    }
   
  }
  edit(id:number):void {
    if(id === undefined) {
     this.errorMessage="An error occured while updatinng the personnel";
    return;
    }
    
  localStorage.setItem("id",id.toString());
  
  this.router.navigate(["/EditEtudiants"]);
  
  }
  
  filter(keyWord: string) {
    if (keyWord === undefined || keyWord.length === 0) {
      this.findAllEtudiants();
      return;
    }
    this.etudiants = this.etudiants.filter(etud=> 
     etud.nom .toLowerCase().includes(keyWord) || etud.prenom.toLowerCase().includes(keyWord)
    );
  }
  ListNotes(id:number):void{
    localStorage.setItem("IDEtud",JSON.stringify(id));
    this.router.navigate(["/listeNotes"]);
  }

    logout(){
    localStorage.clear();
  }

}
