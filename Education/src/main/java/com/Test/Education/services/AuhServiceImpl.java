package com.Test.Education.services;


import com.Test.Education.models.Matiere;
import com.Test.Education.models.User;
import com.Test.Education.repositories.UserRepo;
import com.Test.Education.security.JwtProvider;
import com.Test.Education.security.JwtResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import javax.validation.Valid;
import java.util.Optional;

@Service
public class AuhServiceImpl implements AuthService {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private JwtProvider jwtProvider;

    @Override
    //authentication method
    public JwtResponse authenticateUser(@Valid @RequestBody User user) {
//construction of a new object usernamePasswordAuthenticationToken where parameters are email and password of user 
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken=
                new UsernamePasswordAuthenticationToken(
                        user.getEmail(),
                        user.getPassword()
                );
        // the oject authentication as a result of method authenticate of class authenticationManager that takes 
        //usernamePasswordAuthenticationToken as parameter
        Authentication authentication = authenticationManager.authenticate(

                usernamePasswordAuthenticationToken
        );
        //set the authentication attribute of the context of the class SecurityclassHolder
        SecurityContextHolder.getContext().setAuthentication(authentication);
        //generating token 
        String jwt = jwtProvider.generateJwtToken(authentication);
        //get Principal that contains (username,password,authorities) of the object authentication
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        //returns jwtResponse that contains  jwt ,username(email) and authorities
        return new JwtResponse(jwt, userDetails.getUsername(), userDetails.getAuthorities());

    }
    @Override
    public User registerUser(User userr){
        Boolean trouve=userRepo.existsByEmail(userr.getEmail()) ;
        if(trouve.equals(true)) {
            return null;
        }
        
        User user=new User();
        user.setEmail(userr.getEmail());
        user.setPassword(encoder.encode(userr.getPassword()));
        user.setRole(userr.getRole());
        userRepo.save(user);
        return user;
    }
    @Override
    public User findByEmail(String email){
        Optional<User> u= userRepo.findByEmail(email);

        if (!u.isPresent()){
            return  null;
        }
        else {
            return u.get();
        }

    }
    
    
    
}
