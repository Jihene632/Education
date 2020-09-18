import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {

 notifications=[]
  constructor(private noteService :NoteService) { }

  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem('currentUser')));       
    this.noteService.findAllNotification(JSON.parse(localStorage.getItem('currentUser'))).subscribe(res=>{
      this.notifications =res
      res.forEach(notif=>{
       this.noteService.updateLuNotification(notif).subscribe(res=>{
         console.log(res);      
       })
      })
       console.log(res);
     })
    
  }

}
