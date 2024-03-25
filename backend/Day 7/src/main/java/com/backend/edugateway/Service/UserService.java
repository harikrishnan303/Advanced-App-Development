package com.backend.edugateway.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.backend.edugateway.Entity.UserEntity;
import com.backend.edugateway.Repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<UserEntity> getAllSignups() {
        return userRepository.findAll();
    }

    @SuppressWarnings("null")
    public Optional<UserEntity> getSignUpbyId(Long id) {
        return userRepository.findById(id);
    }

    public UserEntity createSignup(UserEntity signup) {
        signup.setName(signup.getName().toLowerCase().trim());
        signup.setEmail(signup.getEmail().trim());
        signup.setPassword(signup.getPassword().trim());
        signup.setRoles(signup.getRoles().toUpperCase().trim());
        signup.setPassword(passwordEncoder.encode(signup.getPassword()));
        return userRepository.save(signup);
    }

    @SuppressWarnings("null")
    public void deleteSignup(Long id) {
        userRepository.deleteById(id);
    }

    public List<UserEntity> getByName(String name) {
        return userRepository.findAllByName(name);
    }

    @SuppressWarnings("null")
    public UserEntity updateUser(Long id, UserEntity updatedUserEntity) {
        Optional<UserEntity> userEntity = userRepository.findById(id);
        if (userEntity.isPresent()) {
            UserEntity existingUser = userEntity.get();
            existingUser.setEmail(updatedUserEntity.getEmail().trim());
            existingUser.setName(updatedUserEntity.getName().toLowerCase().trim());
            existingUser.setPassword(updatedUserEntity.getPassword());
            return userRepository.save(existingUser);
        }
        return null;
    }
}
