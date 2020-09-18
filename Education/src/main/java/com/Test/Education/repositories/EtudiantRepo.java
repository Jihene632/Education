package com.Test.Education.repositories;

import com.Test.Education.models.Enseignant;
import com.Test.Education.models.Etudiant;
import com.Test.Education.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EtudiantRepo extends JpaRepository<Etudiant,Long> {
    Optional<Etudiant> findByUser(User user);
}
