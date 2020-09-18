import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatiereServiceService } from 'src/app/services/matiere-service.service';

@Component({
  selector: 'app-add-matiere',
  templateUrl: './add-matiere.component.html',
  styleUrls: ['./add-matiere.component.css']
})
export class AddMatiereComponent implements OnInit {
  addE:FormGroup
  constructor(private service:MatiereServiceService,private router:Router,private form:FormBuilder) { 
    this.addE=this.form.group({
  
      nom: ['', [Validators.required]],
      coefficient: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
  }

  ajoutMat(){
    
    const nomMatiere=this.addE.get('nom').value;
    const coefficient=this.addE.get('coefficient').value;

    
    
    const id=0
  

    
  this.service.addMatiere({id,nomMatiere,coefficient})
  .subscribe(data=>{
    this.router.navigate(["/listeMatieres"]);
  
  })
  }

}
