package com.Test.Education.services;

import com.Test.Education.models.Etudiant;
import com.Test.Education.models.Matiere;
import com.Test.Education.repositories.MatiereRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class MatiereServiceImpl implements MatiereService{
    @Autowired
    private MatiereRepo matiereRepo;
    @Override
    public Matiere save(Matiere e){
        return matiereRepo.save(e);

    }
    @Override
    public void deleteMatiere(Long id ){
        Matiere m=new Matiere();
        m.setId(id);
        matiereRepo.delete(m);
    }

    @Override
    public List<Matiere> findAll(){

        return  matiereRepo.findAll();
    }

    @Override
    public Matiere findById(Long id){
        Optional<Matiere> p= matiereRepo.findById(id);
        if(p.isPresent()){
            return p.get();
        }
        else{
            return null;
        }
    }

    @Override
    public Matiere updateMatiere (Matiere e, Long id)
    {
        Optional<Matiere> pr= matiereRepo.findById(e.getId());
        if (!pr.isPresent())
            e.setId(id);
        Matiere p=matiereRepo.save(e);
        return p;
    }
    
    @Override
    public Matiere findByNomMatiere(String nomMatiere){
        Optional<Matiere> m= matiereRepo.findByNomMatiere(nomMatiere);
        
        if (!m.isPresent()){
            return  null;
        }
        else {
            return m.get();
        }
        
    }


}
