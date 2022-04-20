
package com.portfolioWeb.portfolio.Controller;

import com.portfolioWeb.portfolio.Model.Education;
import com.portfolioWeb.portfolio.Service.EducationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EducationController {
    @Autowired
            
    EducationService educationservice;
    @PostMapping("/crear")
    public void  crearEducation(@RequestBody Education education){

    educationservice.crearEducation(education);
} 

}
