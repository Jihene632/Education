package com.Test.Education.repositories;

import com.Test.Education.models.Matiere;
import com.Test.Education.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MatiereRepo extends JpaRepository<Matiere,Long> {
    Optional<Matiere> findByNomMatiere(String nomMatiere);
}
