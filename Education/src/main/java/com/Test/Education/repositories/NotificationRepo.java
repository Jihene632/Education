package com.Test.Education.repositories;

import com.Test.Education.models.Matiere;
import com.Test.Education.models.Note;
import com.Test.Education.models.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
    public interface NotificationRepo  extends JpaRepository<Notification,Long> {

    Notification findByLuAndNote(Boolean lu, Note note);
    Notification findByNote(Note note);
}
