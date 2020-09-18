package com.Test.Education.controllers;

import com.Test.Education.models.*;
import com.Test.Education.services.AuthService;
import com.Test.Education.services.EnseignantService;
import com.Test.Education.services.EtudiantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private AuthService authService;
    @Autowired
    private EtudiantService etudiantService;
    @Autowired
    private EnseignantService enseignantService;
    @PostMapping("/signupEtudiant")
    public ResponseEntity registerEtudiant(@Valid @RequestBody Etudiant etudiant) {
        etudiant.getUser().setRole(RoleName.ROLE_Etudiant);
        User user = authService.registerUser(etudiant.getUser());
        if (user == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        } else {
            etudiant.setUser(user);
            Etudiant etudiant1= etudiantService.save(etudiant);
            if (etudiant1 == null) {
                return new ResponseEntity(HttpStatus.NOT_FOUND);
            } else {
                return new ResponseEntity(etudiant1, HttpStatus.OK);
            }
        }
    }

    @GetMapping("/find")
    public ResponseEntity <User> findByEmail(@RequestParam(name = "email") String email) {
        return ResponseEntity.ok(authService.findByEmail(email));
    }
    @PostMapping("/signupEnseignant")
    public ResponseEntity registerEtudiant(@Valid @RequestBody Enseignant enseignant) {
        enseignant.getUser().setRole(RoleName.ROLE_Enseignant);
        User user = authService.registerUser(enseignant.getUser());
        if (user == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        } else {
            enseignant.setUser(user);
            Enseignant enseignant1= enseignantService.save(enseignant);
            if (enseignant1 == null) {
                return new ResponseEntity(HttpStatus.NOT_FOUND);
            } else {
                return new ResponseEntity(enseignant1, HttpStatus.OK);
            }
        }
    }
    @PostMapping("/signin")
    public ResponseEntity authenticateUser( @Valid @RequestBody User user) {
        return ResponseEntity.ok().body(authService.authenticateUser(user));
    }
}
