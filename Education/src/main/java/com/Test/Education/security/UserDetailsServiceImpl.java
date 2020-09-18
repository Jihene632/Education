package com.Test.Education.security;


import com.Test.Education.models.User;
import com.Test.Education.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    UserRepo userRepository;

    @Override
    @Transactional
    public UserPrinciple loadUserByUsername(String email)
            {

        User user = userRepository.findByEmail(email)
                	.orElseThrow(() ->
                        new UsernameNotFoundException("User Not Found with -> username or email : " + email)
        );

        return UserPrinciple.build(user);
    }
}