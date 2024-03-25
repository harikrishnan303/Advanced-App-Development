package com.backend.edugateway.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.edugateway.Entity.JoinedCollege;
import com.backend.edugateway.Repository.JoinedCollegeRepository;

@Service
public class JoinedCollegeService {

    @Autowired
    private JoinedCollegeRepository joinedCollegeRepository;

    public List<JoinedCollege> getAllJoinedStudents() {
        return joinedCollegeRepository.findAll();
    }

    @SuppressWarnings("null")
    public Optional<JoinedCollege> getJoinedStudentById(Long id) {
        return joinedCollegeRepository.findById(id);
    }

    @SuppressWarnings("null")
    public JoinedCollege createJoinedStudent(JoinedCollege joinedCollege) {
        joinedCollege.setName(joinedCollege.getName().toLowerCase().trim());
        joinedCollege.setEmail(joinedCollege.getEmail().trim());
        joinedCollege.setCollege(joinedCollege.getCollege().toLowerCase().trim());
        joinedCollege.setCourse(joinedCollege.getCourse().toLowerCase().trim());
        joinedCollege.setDate(joinedCollege.getDate().toLowerCase().trim());
        return joinedCollegeRepository.save(joinedCollege);
    }

    @SuppressWarnings("null")
    public void deleteJoinedStudent(Long id) {
        joinedCollegeRepository.deleteById(id);
    }

    public List<JoinedCollege> getJoinedStudentsByName(String name) {
        return joinedCollegeRepository.findByName(name);
    }

    @SuppressWarnings("null")
    public JoinedCollege updateStudent(Long id, JoinedCollege joinedCollege) {
        Optional<JoinedCollege> updateStudentEntity = joinedCollegeRepository.findById(id);
        if (updateStudentEntity.isPresent()) {
            JoinedCollege existingJoinedStudent = updateStudentEntity.get();
            existingJoinedStudent.setName(joinedCollege.getName().toLowerCase().trim());
            existingJoinedStudent.setEmail(joinedCollege.getEmail().trim());
            existingJoinedStudent.setCollege(joinedCollege.getCollege().toLowerCase().trim());
            existingJoinedStudent.setCourse(joinedCollege.getCourse().toLowerCase().trim());
            existingJoinedStudent.setDate(joinedCollege.getDate().toLowerCase().trim());
            return joinedCollegeRepository.save(existingJoinedStudent);
        }
        return null;
    }
}
