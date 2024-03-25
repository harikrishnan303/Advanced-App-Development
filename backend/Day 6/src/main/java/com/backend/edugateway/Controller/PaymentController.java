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

import com.backend.edugateway.Entity.PaymentEntity;
import com.backend.edugateway.Service.PaymentService;
import com.backend.edugateway.dto.PaymentDTO;

/**
 * CollegeController
 */
@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @GetMapping("/allPayments")
    @PreAuthorize("hasAuthority('ADMIN')")
    public List<PaymentEntity> getAllPayments() {
        return paymentService.getAllPayments();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public Optional<PaymentEntity> getPaymentById(@PathVariable Long id) {
        return paymentService.getPaymentById(id);
    }

    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public PaymentEntity createPayment(@RequestBody PaymentEntity paymentEntity) {
        return paymentService.createPayment(paymentEntity);
    }

    @DeleteMapping("/deletePayment/{id}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public void deletePayment(@PathVariable Long id) {
        paymentService.deletePayment(id);
    }

    @GetMapping("/getPayment/{name}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public List<PaymentEntity> getPaymentByName(@PathVariable String name) {
        return paymentService.getPaymentByName(name);
    }

    @PutMapping("/updatePayment/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public PaymentEntity updateUser(@PathVariable Long id, @RequestBody PaymentDTO paymentDTO) {
        return paymentService.updatePayment(id, paymentDTO);
    }
}