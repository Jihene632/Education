package com.Test.Education.services;

import com.Test.Education.models.Enseignant;
import com.Test.Education.models.User;
import com.Test.Education.repositories.EnseignantRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EnseignantServiceImpl implements EnseignantService {
    @Autowired
    private EnseignantRepo enseignantRepo;
    @Override
    public Enseignant save(Enseignant e){
        return enseignantRepo.save(e);

    }

    @Override
    public void deleteEnseignant(Long id ){
        Enseignant e=new Enseignant();
        e.setId(id);
        enseignantRepo.delete(e);
    }

    @Override
    public List<Enseignant> findAll(){

        return  enseignantRepo.findAll();
    }

    @Override
    public Enseignant findById(Long id){
        Optional<Enseignant> p= enseignantRepo.findById(id);
        if(p.isPresent()){
            return p.get();
        }
        else{
            return null;
        }
    }

    @Override
    public Enseignant updateEnseignant (Enseignant e, Long id)
    {
        Optional<Enseignant> pr= enseignantRepo.findById(e.getId());
        if (!pr.isPresent())
            e.setId(id);
        Enseignant p=enseignantRepo.save(e);
        return p;
    }
    @Override
    public Enseignant findByUser (User user){
        Optional<Enseignant> e= enseignantRepo.findByUser(user);
        if (!e.isPresent())
        {
            return  null;
        }
        else {
            return  e.get();
        }
        
    }
}


