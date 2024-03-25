package com.backend.edugateway.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.edugateway.Entity.UserEntity;
import com.backend.edugateway.Service.UserService;

@RestController
@RequestMapping("/api/signup")
public class UserContoller {

    @Autowired
    private UserService userService;

    @GetMapping("/allSignups")
    @PreAuthorize("hasAuthority('ADMIN')")
    public List<UserEntity> getAllSignups() {
        return userService.getAllSignups();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public Optional<UserEntity> getSignupById(@PathVariable Long id) {
        return userService.getSignUpbyId(id);
    }

    @PostMapping
    public UserEntity createSignup(@RequestBody UserEntity signup) {
        return userService.createSignup(signup);
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public void deleteSignup(@PathVariable Long id) {
        userService.deleteSignup(id);
    }

    @GetMapping("/user/{name}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public List<UserEntity> getByName(@PathVariable String name) {
        return userService.getByName(name);
    }

    @PutMapping("/user/{id}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public UserEntity updateUser(@PathVariable Long id, @RequestBody UserEntity userEntity) {
        return userService.updateUser(id, userEntity);
    }

}
