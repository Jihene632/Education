import { Component, OnInit } from '@angular/core';
import { MatiereServiceService } from 'src/app/services/matiere-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { NoteService } from 'src/app/services/note.service';
import { Router } from '@angular/router';
import {Matiere} from 'src/app/models/Matiere';
import {Enseignantt} from 'src/app/models/Enseignantt';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/models/User';
import { Etudiant } from 'src/app/models/Etudiant';
import { Note } from 'src/app/models/Note';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
add:FormGroup
mat:Matiere=new Matiere()
emaiil:string
user:User=new User()
note:Note=new Note()
enseign:Enseignantt=new Enseignantt()
etudiant:Etudiant=new  Etudiant()
note1:Note=new Note()
  constructor(private MatiereService:MatiereServiceService,private userService:UserServiceService,private enseignantService:EnseignantService,private etudiantService:EtudiantService,private noteService:NoteService,private router:Router,private formbuilder:FormBuilder) { 
    this.add=this.formbuilder.group({
      matiere: ['', [Validators.required]],
      note: ['', [Validators.required]]
    })
  }
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
ajoutNote(){
  const mati=this.add.get('matiere').value;
  console.log(mati)
 this.MatiereService.findByNom(mati)
 .subscribe(data=>{
  this.mat=data;
  console.log(this.mat)
  const note=this.add.get('note').value;
  let email=JSON.parse(localStorage.getItem("currentUser"))
  
  console.log(email)
  this.userService.findByEmail(email)
  .subscribe(data=>{
    this.user=data;
    console.log(this.user)
    this.enseignantService.findByUser(this.user)
  .subscribe(data=>{
    this.enseign=data;
    console.log(this.enseign)
    let idEtud=JSON.parse(localStorage.getItem("IDEtud"))
    console.log(idEtud)
    this.etudiantService.findById(idEtud)
  .subscribe(data=>{
    this.etudiant=data;
    console.log(this.etudiant)
  
   const note2={id:0,enseignant:this.enseign,etudiant:this.etudiant,matiere:this.mat,note}
 console.log(note2)
    this.noteService.addNote(note2)
  .subscribe(data=>{
    this.note=data;
    console.log(this.note)
    this.router.navigate(["/listeNotes"]);
  })})})})
    })
  
  
}
logout(){
  localStorage.clear();
}

}