package com.Test.Education.services;

import com.Test.Education.models.Etudiant;
import com.Test.Education.models.Matiere;

import java.util.List;

public interface MatiereService {
    Matiere save(Matiere m);
    void deleteMatiere(Long id );
    List<Matiere> findAll();
    Matiere findById(Long id);
    Matiere findByNomMatiere(String nomMatiere);
    Matiere updateMatiere (Matiere m, Long id);

}
