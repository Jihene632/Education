import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Matiere } from '../models/Matiere';


@Injectable({
  providedIn: 'root'
})
export class MatiereServiceService {

  constructor(private http:HttpClient) { }
  
  addMatiere(m:Matiere){
    return this.http.post<Matiere>("http://localhost:8080/matiere/create",m);
  }
  findAll(){
    return this.http.get<Matiere[]>("http://localhost:8080/matiere/all");
  }
  deleteE(id:number){
    return this.http.delete<Matiere>("http://localhost:8080/matiere/delete/"+id);
  }
  findById(id:number){
    return this.http.get<Matiere>("http://localhost:8080/matiere/find/"+id);
  }
  findByNom(nom:string){
    return this.http.get<Matiere>("http://localhost:8080/matiere/find?nom="+nom);
  }
  Edit(m:Matiere,id:number){
    return this.http.put<Matiere>("http://localhost:8080/matiere/update/"+id,m);
  }
}
