import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etudiant } from '../models/Etudiant';
import { User } from '../models/User';
import { MoyDto } from '../models/MoyDto';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http:HttpClient) { }

  addEtudiant(e:Etudiant){
    return this.http.post<Etudiant>("http://localhost:8080/auth/signupEtudiant",e);
  }
  findAll(){
    return this.http.get<Etudiant[]>("http://localhost:8080/etudiant/all");
  }
  deleteE(id:number){
    return this.http.delete<Etudiant>("http://localhost:8080/etudiant/delete/"+id);
  }
  findById(id:number){
    return this.http.get<Etudiant>("http://localhost:8080/etudiant/find/"+id);
  }
  Edit(etud:Etudiant,id:number){
    return this.http.put<Etudiant>("http://localhost:8080/etudiant/update/"+id,etud);
  }
  finfByUser(user:User){
    return this.http.post<Etudiant>("http://localhost:8080/etudiant/find/",user);
  }
  CalculMoy(etud:Etudiant){
    return this.http.post<MoyDto>("http://localhost:8080/etudiant/moyenne/",etud);
  }

}
