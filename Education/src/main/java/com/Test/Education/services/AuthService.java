package com.Test.Education.services;


import com.Test.Education.models.User;
import com.Test.Education.security.JwtResponse;

public interface AuthService {
        User registerUser(User user);
        JwtResponse authenticateUser(User user);
        User findByEmail(String email);
}
