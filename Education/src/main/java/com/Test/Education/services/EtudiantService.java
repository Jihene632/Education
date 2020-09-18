package com.Test.Education.services;

import com.Test.Education.dto.MoyDto;
import com.Test.Education.models.Enseignant;
import com.Test.Education.models.Etudiant;
import com.Test.Education.models.User;

import java.util.List;

public interface EtudiantService {
    Etudiant save(Etudiant e);
    void deleteEtudiant(Long id );
    List<Etudiant> findAll();
    Etudiant findById(Long id);
    Etudiant updateEtudiant (Etudiant e, Long id);
   Etudiant findByUser (User user);
   MoyDto calculMoy (Etudiant e );
    
    
}
