package com.backend.edugateway.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.edugateway.Entity.CollegeEntity;
import com.backend.edugateway.Repository.CollegeRepository;

@Service
public class CollegeService {

    @Autowired
    private CollegeRepository collegeRepository;

    public List<CollegeEntity> getAllCollege() {
        return collegeRepository.findAll();
    }

    @SuppressWarnings("null")
    public Optional<CollegeEntity> getCollegeById(Long id) {
        return collegeRepository.findById(id);
    }

    @SuppressWarnings("null")
    public CollegeEntity createCollege(CollegeEntity collegeEntity) {
        collegeEntity.setCollegeName(collegeEntity.getCollegeName().toLowerCase().trim());
        collegeEntity.setCourses(collegeEntity.getCourses().toLowerCase().trim());
        collegeEntity.setAddr(collegeEntity.getAddr().toLowerCase().trim());
        return collegeRepository.save(collegeEntity);
    }

    @SuppressWarnings("null")
    public void deleteCollege(Long id) {
        collegeRepository.deleteById(id);
    }

    public List<CollegeEntity> getByCollegeName(String name) {
        return collegeRepository.findByCollegeName(name);
    }

    @SuppressWarnings("null")
    public CollegeEntity updateCollege(Long id, CollegeEntity collegeEntity) {
        Optional<CollegeEntity> updateCollegeEntity = collegeRepository.findById(id);
        if (updateCollegeEntity.isPresent()) {
            CollegeEntity existingCollege = updateCollegeEntity.get();
            existingCollege.setCollegeName(collegeEntity.getCollegeName().toLowerCase().trim());
            existingCollege.setCourses(collegeEntity.getCourses().toLowerCase().trim());
            existingCollege.setAddr(collegeEntity.getAddr().toLowerCase().trim());
            return collegeRepository.save(existingCollege);
        }
        return null;
    }
}
