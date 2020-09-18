import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../models/Etudiant';
import { Note } from '../models/Note';
import { User } from '../models/User';
import { EtudiantService } from '../services/etudiant.service';
import { NoteService } from '../services/note.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-home-etudiant',
  templateUrl: './home-etudiant.component.html',
  styleUrls: ['./home-etudiant.component.css']
})
export class HomeEtudiantComponent implements OnInit {

  constructor(private userService:UserServiceService,private noteService:NoteService,private etudService:EtudiantService) { }
user:User=new User()
etud:Etudiant=new Etudiant()
notes:Note[]
notificationNumber:number;
  ngOnInit(): void {
    this.findNotes()
    this.noteService.findAllNotif(JSON.parse(localStorage.getItem('currentUser'))).subscribe(res=>{
      this.notificationNumber=res.length
      console.log(res);
    })
  
    
  }

  
  logout(){
    localStorage.clear();
  }

findNotes(){
  let email=JSON.parse(localStorage.getItem("currentUser"))
  this.userService.findByEmail(email)
    .subscribe(data=>{
      this.user=data;
      console.log(this.user)
  this.etudService.finfByUser(this.user)
      .subscribe(data=>{
        this.etud=data;
  this.noteService.findAll(this.etud)
    .subscribe(data=>{
      this.notes=data;
      
    })})})

}


}
