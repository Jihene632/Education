package com.Test.Education.controllers;

import com.Test.Education.models.Etudiant;
import com.Test.Education.models.Matiere;
import com.Test.Education.services.EtudiantService;
import com.Test.Education.services.MatiereService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/matiere")
public class MatiereController {
    @Autowired
    private MatiereService matiereService;

    @GetMapping("/all")
    public ResponseEntity<List<Matiere>> findAll() {
        return ResponseEntity.ok(matiereService.findAll());
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEtudiant(@PathVariable(name = "id") Long id)

    {
        matiereService.deleteMatiere(id);

    }
    @GetMapping("/find/{id}")
    public ResponseEntity <Matiere> findById(@PathVariable(name = "id") Long id) {
        return ResponseEntity.ok(matiereService.findById(id));
    }
    @GetMapping("/find")
    public ResponseEntity <Matiere> findByNom(@RequestParam(name = "nom") String nom) {
        return ResponseEntity.ok(matiereService.findByNomMatiere(nom));
    }

    @PostMapping("/create")
    public ResponseEntity<Matiere> create(@RequestBody Matiere matiere) {

        Matiere matiere1=matiereService.save(matiere);

        return ResponseEntity.status(HttpStatus.CREATED).body(matiere1);
    }

    @PutMapping("update/{id}")
    public  ResponseEntity <Matiere> update(@RequestBody Matiere matiere,@PathVariable (name="id")Long id){
        return  ResponseEntity.ok(matiereService.updateMatiere(matiere,id));
    }
}


