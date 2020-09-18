package com.Test.Education.services;

import com.Test.Education.models.Etudiant;
import com.Test.Education.models.Matiere;
import com.Test.Education.models.Note;

import java.util.List;

public interface NoteService {
    Note save(Note n);
    void deleteNote(Long id );
    List<Note> findAll();
    Note findById(Long id);
    Note updateNote (Note m, Long id);
    List <Note> findByEtud(Etudiant e);

}
