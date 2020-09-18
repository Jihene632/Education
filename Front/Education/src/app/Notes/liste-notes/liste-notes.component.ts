import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/models/Etudiant';
import { MoyDto } from 'src/app/models/MoyDto';
import { Note } from 'src/app/models/Note';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-liste-notes',
  templateUrl: './liste-notes.component.html',
  styleUrls: ['./liste-notes.component.css']
})
export class ListeNotesComponent implements OnInit {

  constructor(private noteService:NoteService,private etudService:EtudiantService,private router:Router) { }
  etud:Etudiant=new Etudiant();
  notes:Note[]
  moy:MoyDto=new MoyDto()
  display:boolean
  ngOnInit(): void {
    this.getEtud()
  }

  logout(){
    localStorage.clear();
  }

  getEtud(){
    let idEtudiant=JSON.parse(localStorage.getItem("IDEtud"))
    this.etudService.findById(idEtudiant)
    .subscribe(data=>{
      this.etud=data;
      console.log(this.etud)
      this.noteService.findAll(this.etud)
      .subscribe(data=>{
        this.notes=data;
        console.log(this.notes)

      })

    })
  }
  edit(id:number):void {
  
    
  localStorage.setItem("idNote",id.toString());
  
  this.router.navigate(["/EditNote"]);
  
  }
  removeN(id:number){
    console.log(id)
    if (confirm("Do you really want to delete this mark")) {
      this.noteService.removeNote(id)
     
        .subscribe(data => {
          this.getEtud()
          this.router.navigate(["/listeNotes"]);
         
        });
      }
  }
   
calculerMoy(){
  let idEtudiant=JSON.parse(localStorage.getItem("IDEtud"))
    this.etudService.findById(idEtudiant)
    .subscribe(data=>{
      this.etud=data;
      this.etudService.CalculMoy(this.etud)
    .subscribe(data=>{
      this.moy=data;
      this.display=true
    
    })
    
    })
    

}



}
