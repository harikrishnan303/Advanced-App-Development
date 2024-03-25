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

import com.backend.edugateway.Entity.CollegeEntity;
import com.backend.edugateway.Service.CollegeService;

/**
 * CollegeController
 */
@RestController
@RequestMapping("/api/college")
public class CollegeController {

    @Autowired
    private CollegeService collegeService;

    @GetMapping("/allCollege")
    public List<CollegeEntity> getAllCollege() {
        return collegeService.getAllCollege();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public Optional<CollegeEntity> getCollegeById(@PathVariable Long id) {
        return collegeService.getCollegeById(id);
    }

    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public CollegeEntity createCollege(@RequestBody CollegeEntity collegeEntity) {
        return collegeService.createCollege(collegeEntity);
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public void deleteCollege(@PathVariable Long id) {
        collegeService.deleteCollege(id);
    }

    @GetMapping("/getCollege/{name}")
    public List<CollegeEntity> getByCollegeName(@PathVariable String name) {
        return collegeService.getByCollegeName(name);
    }

    @PutMapping("/updateCollege/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public CollegeEntity updateCollege(@PathVariable Long id, @RequestBody CollegeEntity collegeEntity) {
        return collegeService.updateCollege(id, collegeEntity);
    }
}