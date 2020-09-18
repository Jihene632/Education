import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Enseignantt } from '../models/Enseignantt';
@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  constructor(private http:HttpClient) { }
  findByUser(user:User){
    return this.http.post<Enseignantt>("http://localhost:8080/enseignant/find",user);

}
}