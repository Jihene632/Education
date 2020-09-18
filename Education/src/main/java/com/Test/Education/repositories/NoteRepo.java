package com.Test.Education.repositories;

import com.Test.Education.models.Etudiant;
import com.Test.Education.models.Matiere;
import com.Test.Education.models.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoteRepo extends JpaRepository<Note,Long> {
    List<Note> findByEtudiant(Etudiant etud);
    
}
