package com.Test.Education.services;

import com.Test.Education.models.Note;
import com.Test.Education.models.Notification;

import java.util.List;

public interface NotificationService {
    Notification save(Notification n);
    void deleteNotification(Long id );
    List<Notification> findAll();
    Notification findById(Long id);
    Notification findByLuAndNote(Boolean lu , Note note);
    Notification findByNote(Note note);
    Notification updateNotification (Notification m, Long id);

}
