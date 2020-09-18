import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../models/Note';
import { Etudiant } from '../models/Etudiant';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpClient) { }
  addNote(n:Note){
    return this.http.post<Note>("http://localhost:8080/note/create",n);
  }
  findAll(e:Etudiant){
    return this.http.post<Note []>("http://localhost:8080/note/all",e);
  }

removeNote(id:number){
  return this.http.delete<Note>("http://localhost:8080/note/delete/"+id);
}
findById(id:number){
  return this.http.get<Note>("http://localhost:8080/note/find/"+id);
}
Edit(note:Note,id:number){
  return this.http.put<Note>("http://localhost:8080/note/update/"+id,note);
}

findAllNotif(email:string){
  return this.http.get<any>("http://localhost:8080/notification/findByLu/"+email);
}

findAllNotification(email:string){
  return this.http.get<any>("http://localhost:8080/notification/findAllByEmail/"+email);
}

updateLuNotification(notification:any){
  return this.http.post<any>("http://localhost:8080/notification/update/lu",notification);
}
}
