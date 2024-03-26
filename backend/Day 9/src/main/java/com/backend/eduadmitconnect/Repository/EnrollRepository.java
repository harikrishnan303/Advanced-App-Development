package com.backend.eduadmitconnect.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.eduadmitconnect.Entity.EnrollEntity;

public interface EnrollRepository extends JpaRepository<EnrollEntity, Long> {
    List<EnrollEntity> findByName(String Name);
}
