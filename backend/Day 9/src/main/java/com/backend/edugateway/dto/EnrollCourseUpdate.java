package com.backend.edugateway.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EnrollCourseUpdate {
    private String name;
    private String email;
    private String gender;
    private String mobile;
    private String dob;
    private Integer sslc;
    private Integer hsc;
    private Integer age;
    private String country;
    private String address;
}
