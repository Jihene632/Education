package com.Test.Education.controllers;

import com.Test.Education.dto.MoyDto;
import com.Test.Education.models.Enseignant;
import com.Test.Education.models.Etudiant;
import com.Test.Education.models.User;
import com.Test.Education.services.EtudiantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/etudiant")
public class EtudiantController {
    @Autowired
    private EtudiantService etudiantService;
 
    @GetMapping("/all")
    public ResponseEntity<List<Etudiant>> findAll() {
        return ResponseEntity.ok(etudiantService.findAll());
    }
 
    @DeleteMapping("/delete/{id}")
    public void deleteEtudiant(@PathVariable(name = "id") Long id)

    {
        etudiantService.deleteEtudiant(id);

    }
    @GetMapping("/find/{id}")
    public ResponseEntity <Etudiant> findById(@PathVariable(name = "id") Long id) {
        return ResponseEntity.ok(etudiantService.findById(id));
    }
    
    @PostMapping("/create")
    public ResponseEntity<Etudiant> create(@RequestBody Etudiant etudiant) {

     Etudiant etudiant1=etudiantService.save(etudiant);
        
        return ResponseEntity.status(HttpStatus.CREATED).body(etudiant1);
    }
  
    @PutMapping("update/{id}")
    public  ResponseEntity <Etudiant> update(@RequestBody Etudiant etudiant,@PathVariable (name="id")Long id){
        return  ResponseEntity.ok(etudiantService.updateEtudiant(etudiant,id));
    }
    @PostMapping("/find")
    public ResponseEntity<Etudiant> findByUser(@RequestBody User user) {
        return ResponseEntity.ok(etudiantService.findByUser(user));
    }
    @PostMapping("/moyenne")
    public ResponseEntity<MoyDto> calculerMoyenne(@RequestBody Etudiant e) {
        return ResponseEntity.ok(etudiantService.calculMoy(e));
    }
    
    
}


