import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User} from 'src/app/models/User';
import { Responses} from 'src/app/models/Responses';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  constructor(private http:HttpClient) { }
  signin(user:User){
    
      return this.http.post<Responses>("http://localhost:8080/auth/signin",user);
    
  }
findByEmail(email:string){
  return this.http.get<User>("http://localhost:8080/auth/find?email="+email);
  

}
}
