package com.Test.Education.controllers;
import com.Test.Education.models.Etudiant;
import com.Test.Education.models.Matiere;
import com.Test.Education.models.Note;
import com.Test.Education.services.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/note")
public class NoteController {
    @Autowired
    private NoteService noteService;
    @PostMapping("/create")
    public ResponseEntity<Note> create(@RequestBody Note note) {

        Note note1=noteService.save(note);

        return ResponseEntity.status(HttpStatus.CREATED).body(note1);
    }
    
    @PostMapping("/all")
    public ResponseEntity<List<Note>> findAll(@RequestBody Etudiant e )
    {
        return ResponseEntity.ok(noteService.findByEtud(e));
    }
    @DeleteMapping("/delete/{id}")
    public void deleteNote(@PathVariable(name = "id") Long id)

    {
        noteService.deleteNote(id);

    }
    @GetMapping("/find/{id}")
    public ResponseEntity <Note> findById(@PathVariable(name = "id") Long id) {
        return ResponseEntity.ok(noteService.findById(id));
    }
    @PutMapping("update/{id}")
    public  ResponseEntity <Note> update(@RequestBody Note n ,@PathVariable (name="id")Long id){
        return  ResponseEntity.ok(noteService.updateNote(n,id));
    }
}
