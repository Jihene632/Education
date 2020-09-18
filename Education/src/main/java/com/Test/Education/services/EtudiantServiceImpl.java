package com.Test.Education.services;
import com.Test.Education.dto.MoyDto;
import com.Test.Education.models.Enseignant;
import com.Test.Education.models.Etudiant;
import com.Test.Education.models.Note;
import com.Test.Education.models.User;
import com.Test.Education.repositories.EtudiantRepo;
import com.Test.Education.repositories.NoteRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class EtudiantServiceImpl implements EtudiantService{
    @Autowired
    private EtudiantRepo etudiantRepo;
    @Autowired
    private NoteRepo noteRepo;
    @Override
    public Etudiant save(Etudiant e){
        return etudiantRepo.save(e);

    }

    @Override
    public void deleteEtudiant(Long id ){
        Etudiant e=new Etudiant();
        e.setId(id);
        etudiantRepo.delete(e);
    }

    @Override
    public List<Etudiant> findAll(){

        return  etudiantRepo.findAll();
    }

    @Override
    public Etudiant findById(Long id){
        Optional<Etudiant> p= etudiantRepo.findById(id);
        if(p.isPresent()){
            return p.get();
        }
        else{
            return null;
        }
    }

    @Override
    public Etudiant updateEtudiant (Etudiant e, Long id)
    {
        Optional<Etudiant> pr= etudiantRepo.findById(e.getId());
        if (!pr.isPresent())
            e.setId(id);
        Etudiant p=etudiantRepo.save(e);
        return p;
    }
    @Override
    public Etudiant findByUser (User user){
        Optional<Etudiant> e= etudiantRepo.findByUser(user);
        if (!e.isPresent())
        {
            return  null;
        }
        else {
            return  e.get();
        }

    }
@Override
    public MoyDto calculMoy (Etudiant e ){
        double coefftotal=0;
        double total=0;
        double moyenne=0;
        List<Note>listeNotes=noteRepo.findByEtudiant(e);
    for(int i=0;i<listeNotes.size();i++) {
        coefftotal=coefftotal+listeNotes.get(i).getMatiere().getCoefficient();
        total=total+(listeNotes.get(i).getNote()*listeNotes.get(i).getMatiere().getCoefficient());


    }
    moyenne=total/coefftotal;
    MoyDto m =new MoyDto();
    m.setMoyenne(moyenne);
    e.setMoyenne(moyenne);
    etudiantRepo.save(e);
    return m;
    
    
    }
        
        

}
