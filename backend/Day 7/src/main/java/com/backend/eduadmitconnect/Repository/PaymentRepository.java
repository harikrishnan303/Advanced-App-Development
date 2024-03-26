package com.backend.eduadmitconnect.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.eduadmitconnect.Entity.PaymentEntity;

public interface PaymentRepository extends JpaRepository<PaymentEntity, Long> {
    List<PaymentEntity> findByName(String Name);
}
