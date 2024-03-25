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

import com.backend.edugateway.Entity.EnrollEntity;
import com.backend.edugateway.Service.EnrollService;
import com.backend.edugateway.dto.EnrollCourseUpdate;

/**
 * EnrollController
 */
@RestController
@RequestMapping("/api/enroll")
public class EnrollCourseController {

    @Autowired
    private EnrollService enrollService;

    @GetMapping("/allEnrollments")
    @PreAuthorize("hasAuthority('ADMIN')")
    public List<EnrollEntity> getAllEnrollments() {
        return enrollService.getAllEnrollments();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public Optional<EnrollEntity> getEnrollmentById(@PathVariable Long id) {
        return enrollService.getEnrollmentById(id);
    }

    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public EnrollEntity createEnrollment(@RequestBody EnrollEntity enrollEntity) {
        return enrollService.createEnrollment(enrollEntity);
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public void deleteEnrollment(@PathVariable Long id) {
        enrollService.deleteEnrollment(id);
    }

    @PutMapping("/updateEnrollment/{id}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public EnrollEntity updateEnrollment(@PathVariable Long id, @RequestBody EnrollCourseUpdate enrollCourseUpdate) {
        return enrollService.updateEnrollment(id, enrollCourseUpdate);
    }
}
