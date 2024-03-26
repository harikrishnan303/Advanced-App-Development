package com.backend.eduadmitconnect.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.eduadmitconnect.Entity.CollegeEntity;

public interface CollegeRepository extends JpaRepository<CollegeEntity, Long> {
    List<CollegeEntity> findByCollegeName(String collegeName);
}
