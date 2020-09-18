package com.Test.Education.controllers;


import com.Test.Education.models.Enseignant;
import com.Test.Education.models.User;
import com.Test.Education.services.EnseignantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/enseignant")
public class EnseignantController {
    @Autowired
    private EnseignantService enseignantService;
    @PostMapping("/find")
    public ResponseEntity<Enseignant> findByUser(@RequestBody User user) {
        return ResponseEntity.ok(enseignantService.findByUser(user));
    }
}
