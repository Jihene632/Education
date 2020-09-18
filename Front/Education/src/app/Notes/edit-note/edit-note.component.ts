import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/models/Note';
import { NoteService } from 'src/app/services/note.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {
  note:Note=new Note()
  editE:FormGroup
  constructor(private noteService:NoteService,private router:Router,private form:FormBuilder) {
    this.editE=this.form.group({
      note: ["", [Validators.required]]
   })}

  ngOnInit(): void {
    this.Acualiser()
  }
Acualiser(){
  let Id=localStorage.getItem("idNote");
  console.log(Id)
 
  this.noteService.findById(+Id)
  .subscribe(data=>{
    
   this.note=data
   console.log(this.note)

    
    
    

  
  })

}


logout(){
  localStorage.clear();
}

  ModifNote(){
  
  
    this.noteService.Edit(this.note,this.note.id)
    .subscribe(data=>{
      this.note=data
    
      this.router.navigate(["/listeNotes"]);
    })
     
  }
}
