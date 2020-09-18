package com.Test.Education.models;


import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Etudiant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String prenom;
    private String tel;
    private double moyenne;
    @OneToOne
    @JoinColumn
    private User user;
    
    
    
    
}
