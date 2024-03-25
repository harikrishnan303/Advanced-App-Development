package com.backend.edugateway.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.edugateway.Entity.CollegeEntity;

public interface CollegeRepository extends JpaRepository<CollegeEntity, Long> {
    List<CollegeEntity> findByCollegeName(String collegeName);
}
