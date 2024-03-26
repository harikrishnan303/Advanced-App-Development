package com.backend.eduadmitconnect.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.eduadmitconnect.Entity.JoinedCollege;

public interface JoinedCollegeRepository extends JpaRepository<JoinedCollege, Long> {
    List<JoinedCollege> findByName(String Name);
}
