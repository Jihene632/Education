package com.Test.Education.services;

import com.Test.Education.models.Etudiant;
import com.Test.Education.models.Note;
import com.Test.Education.models.Notification;
import com.Test.Education.repositories.NoteRepo;
import com.Test.Education.repositories.NotificationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class NoteServiceImpl implements NoteService {
    @Autowired
    private NoteRepo noteRepo;
    @Autowired
    private NotificationRepo notificationRepo;
    @Override
    public Note save(Note e){
        String message="";
        
        if( e.getNote()<10){
            message=" il faut améliorer ton niveau en "+e.getMatiere().getNomMatiere()+" pour avoir la moyenne";
            
            
        }
       
        Note note=noteRepo.save(e);
        Notification n=new Notification();
        n.setMessage(message);
        n.setNote(note);
        n.setLu(false);
       
        notificationRepo.save(n);
        
        
        return note;

    }
    @Override
    public void deleteNote(Long id ){
        Note n=new Note();
        n.setId(id);
        noteRepo.delete(n);
    }

    @Override
    public List<Note> findAll(){

        return  noteRepo.findAll();
    }

    @Override
    public Note findById(Long id){
        Optional<Note> p= noteRepo.findById(id);
        if(p.isPresent()){
            return p.get();
        }
        else{
            return null;
        }
    }

    @Override
    public Note updateNote (Note n, Long id)
    {
        Optional<Note> no= noteRepo.findById(n.getId());
        if (!no.isPresent())
            n.setId(id);
        Note p=noteRepo.save(n);
        return p;
    }
    @Override
    public List<Note> findByEtud(Etudiant e){

        return  noteRepo.findByEtudiant(e);
    } 


}
