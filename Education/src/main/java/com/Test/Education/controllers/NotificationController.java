package com.Test.Education.controllers;

import com.Test.Education.models.Matiere;
import com.Test.Education.models.Note;
import com.Test.Education.models.Notification;
import com.Test.Education.models.User;
import com.Test.Education.services.*;
import org.aspectj.weaver.ast.Not;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/notification")
public class NotificationController {
    @Autowired
    private NotificationService notificationService;
    
    @Autowired
    private NoteService noteService;
    
    @Autowired
    private AuthService authService;
    
    @Autowired
    private EtudiantService etudiantService;

    @GetMapping("/all")
    public ResponseEntity<List<Notification>> findAll() {
        return ResponseEntity.ok(notificationService.findAll());
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEtudiant(@PathVariable(name = "id") Long id)

    {
        notificationService.deleteNotification(id);

    }
    @GetMapping("/find/{id}")
    public ResponseEntity <Notification> findById(@PathVariable(name = "id") Long id) {
        return ResponseEntity.ok(notificationService.findById(id));
    }

    @GetMapping("/findByLu/{email}")
    public ResponseEntity <List<Notification>> findById(@PathVariable String email) {
        User user = authService.findByEmail(email);
        List<Note> notes= noteService.findByEtud(etudiantService.findByUser(user));
        List<Notification> notifications = new ArrayList<Notification>();
        notes.forEach(note->{
            if (notificationService.findByLuAndNote(false, note)!=null)
                notifications.add(notificationService.findByLuAndNote(false, note));
        });
        return ResponseEntity.ok(notifications);
    }

    @GetMapping("/findAllByEmail/{email}")
    public ResponseEntity <List<Notification>> findAllByEmail(@PathVariable String email) {
        User user = authService.findByEmail(email);
        List<Note> notes= noteService.findByEtud(etudiantService.findByUser(user));
        List<Notification> notifications = new ArrayList<Notification>();
        notes.forEach(note->{
            notifications.add(notificationService.findByNote(note));
        });
        return ResponseEntity.ok(notifications);
    }

    @PostMapping("/update/lu")
    public ResponseEntity<Notification> updateLu(@RequestBody Notification notification) {
        notification.setLu(true);
        return ResponseEntity.status(HttpStatus.CREATED).body(notificationService.save(notification));
    }
    
    @PostMapping("/create")
    public ResponseEntity<Notification> create(@RequestBody Notification notification) {

        Notification notification1=notificationService.save(notification);

        return ResponseEntity.status(HttpStatus.CREATED).body(notification1);
    }

    @PutMapping("update/{id}")
    public  ResponseEntity <Notification> update(@RequestBody Notification notification,@PathVariable (name="id")Long id){
        return  ResponseEntity.ok(notificationService.updateNotification(notification,id));
    }
}
