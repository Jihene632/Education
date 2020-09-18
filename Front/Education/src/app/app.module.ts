import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEtudiantComponent } from './Etudiant/add-etudiant/add-etudiant.component';
import{HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http'
import {EtudiantService}from './services/etudiant.service'
import {RouterModule,Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { ListEtudiantComponent } from './Etudiant/list-etudiant/list-etudiant.component';
import { EditEtudiantComponent } from './Etudiant/edit-etudiant/edit-etudiant.component';
import { HomeEnseignantComponent } from './home-enseignant/home-enseignant.component';
import { AddMatiereComponent } from './Matiere/add-matiere/add-matiere.component';
import { ListeMatiereComponent } from './Matiere/liste-matiere/liste-matiere.component';
import {MatiereServiceService} from './services/matiere-service.service';
import { EditMatiereComponent } from './Matiere/edit-matiere/edit-matiere.component';
import { AddNoteComponent } from './Notes/add-note/add-note.component';
import { LoginComponent } from './login/login/login.component';
import { HomeEtudiantComponent } from './home-etudiant/home-etudiant.component';
import { ListeNotesComponent } from './Notes/liste-notes/liste-notes.component';
import { EditNoteComponent } from './Notes/edit-note/edit-note.component';
import { NotificationListComponent } from './notification/notification-list/notification-list.component'

const routes:Routes =[
  {path:"addEtudiant",component:AddEtudiantComponent},
  {path:"listeEtudiants",component:ListEtudiantComponent},
  {path:"EditEtudiants",component:EditEtudiantComponent},
  {path:"homeEnseignant",component:HomeEnseignantComponent},
  {path:"addMatiere",component:AddMatiereComponent},
  {path:"EditMatiere",component:EditMatiereComponent},
  {path:"listeMatieres",component:ListeMatiereComponent},
  {path:"addNote",component:AddNoteComponent},
  {path:"login",component:LoginComponent},
  {path:"homeEtudiant",component:HomeEtudiantComponent},
  {path:"listeNotes",component:ListeNotesComponent},
  {path:"EditNote",component:EditNoteComponent},
  {path:"notificationList",component:NotificationListComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AddEtudiantComponent,
    ListEtudiantComponent,
    EditEtudiantComponent,
    HomeEnseignantComponent,
    AddMatiereComponent,
    ListeMatiereComponent,
    EditMatiereComponent,
    AddNoteComponent,
    LoginComponent,
    HomeEtudiantComponent,
    ListeNotesComponent,
    EditNoteComponent,
    NotificationListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [EtudiantService,MatiereServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
