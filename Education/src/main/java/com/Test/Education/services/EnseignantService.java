package com.Test.Education.services;

import com.Test.Education.models.Enseignant;
import com.Test.Education.models.User;

import java.util.List;

public interface EnseignantService {
    Enseignant save(Enseignant e);
    void deleteEnseignant(Long id );
    List<Enseignant> findAll();
    Enseignant findById(Long id);
    Enseignant updateEnseignant (Enseignant e, Long id);
    Enseignant findByUser(User user);
}
