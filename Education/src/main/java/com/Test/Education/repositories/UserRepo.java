package com.Test.Education.repositories;

import com.Test.Education.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User,Long> {
    User findByEmailAndPassword (String email,String password);
    Optional<User> findByEmail(String email);
    Boolean existsByEmail(String email);
}
