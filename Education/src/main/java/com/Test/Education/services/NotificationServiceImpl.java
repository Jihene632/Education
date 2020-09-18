package com.Test.Education.services;

import com.Test.Education.models.Matiere;
import com.Test.Education.models.Note;
import com.Test.Education.models.Notification;
import com.Test.Education.repositories.MatiereRepo;
import com.Test.Education.repositories.NotificationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class NotificationServiceImpl implements NotificationService{
    @Autowired
    private NotificationRepo notificationRepo;
    @Override
    public Notification save(Notification e){
        return notificationRepo.save(e);

    }
    @Override
    public void deleteNotification(Long id ){
        Notification n=new Notification();
        n.setId(id);
        notificationRepo.delete(n);
    }

    @Override
    public List<Notification> findAll(){

        return  notificationRepo.findAll();
    }

    @Override
    public Notification findById(Long id){
        Optional<Notification> p= notificationRepo.findById(id);
        if(p.isPresent()){
            return p.get();
        }
        else{
            return null;
        }
    }

    @Override
    public Notification findByLuAndNote(Boolean lu, Note note) {
        Notification notification = notificationRepo.findByLuAndNote(lu,note);
        return notification;
    }

    @Override
    public Notification findByNote(Note note) {
        Notification notification = notificationRepo.findByNote(note);
        return notification;    }

    @Override
    public Notification updateNotification (Notification n, Long id)
    {
        Optional<Notification> no= notificationRepo.findById(n.getId());
        if (!no.isPresent())
            n.setId(id);
        Notification p=notificationRepo.save(n);
        return p;
    }



}
