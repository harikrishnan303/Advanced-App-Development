package com.backend.edugateway.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.edugateway.Entity.EnrollEntity;
import com.backend.edugateway.Repository.EnrollRepository;
import com.backend.edugateway.dto.EnrollCourseUpdate;

@Service
public class EnrollService {

    @Autowired
    private EnrollRepository enrollRepository;

    public List<EnrollEntity> getAllEnrollments() {
        return enrollRepository.findAll();
    }

    @SuppressWarnings("null")
    public Optional<EnrollEntity> getEnrollmentById(Long id) {
        return enrollRepository.findById(id);
    }

    @SuppressWarnings("null")
    public EnrollEntity createEnrollment(EnrollEntity enrollEntity) {
        enrollEntity.setName(enrollEntity.getName().toLowerCase().trim());
        enrollEntity.setEmail(enrollEntity.getEmail().trim());
        enrollEntity.setGender(enrollEntity.getGender().toLowerCase().trim());
        enrollEntity.setMobile(enrollEntity.getMobile().toLowerCase().trim());
        enrollEntity.setDob(enrollEntity.getDob().toLowerCase().trim());
        enrollEntity.setSslc(enrollEntity.getSslc());
        enrollEntity.setHsc(enrollEntity.getHsc());
        enrollEntity.setAge(enrollEntity.getAge());
        enrollEntity.setCountry(enrollEntity.getCountry().toLowerCase().trim());
        enrollEntity.setAddress(enrollEntity.getAddress().toLowerCase().trim());
        return enrollRepository.save(enrollEntity);
    }

    @SuppressWarnings("null")
    public void deleteEnrollment(Long id) {
        enrollRepository.deleteById(id);
    }

    public List<EnrollEntity> getEnrollmentByName(String name) {
        return enrollRepository.findByName(name);
    }

    @SuppressWarnings("null")
    public EnrollEntity updateEnrollment(Long id, EnrollCourseUpdate enrollCourseUpdate) {
        Optional<EnrollEntity> updateEnrollment = enrollRepository.findById(id);
        if (updateEnrollment.isPresent()) {
            EnrollEntity updatedEnrollment = updateEnrollment.get();
            updatedEnrollment.setName(enrollCourseUpdate.getName().toLowerCase().trim());
            updatedEnrollment.setEmail(enrollCourseUpdate.getEmail().trim());
            updatedEnrollment.setGender(enrollCourseUpdate.getGender().toLowerCase().trim());
            updatedEnrollment.setMobile(enrollCourseUpdate.getMobile().toLowerCase().trim());
            updatedEnrollment.setDob(enrollCourseUpdate.getDob().toLowerCase().trim());
            updatedEnrollment.setSslc(enrollCourseUpdate.getSslc());
            updatedEnrollment.setHsc(enrollCourseUpdate.getHsc());
            updatedEnrollment.setAge(enrollCourseUpdate.getAge());
            updatedEnrollment.setCountry(enrollCourseUpdate.getCountry().toLowerCase().trim());
            updatedEnrollment.setAddress(enrollCourseUpdate.getAddress().toLowerCase().trim());
            return enrollRepository.save(updatedEnrollment);
        }
        return null;
    }
}
