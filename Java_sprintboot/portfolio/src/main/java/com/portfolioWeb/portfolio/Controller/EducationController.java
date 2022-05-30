
package com.portfolioWeb.portfolio.Controller;

import com.portfolioWeb.portfolio.Model.Education;
import com.portfolioWeb.portfolio.Service.EducationService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"https://victormirandaportfolio.web.app/"})
public class EducationController {
    @Autowired
            
    EducationService educationservice;
    @PostMapping("/crearEdu")
    public void  crearEducation(@RequestBody Education education){

    educationservice.crearEducation(education);
} 

    @PutMapping("/modificarEdu")
    public void modificarEducation (@RequestBody Education education){
    
    educationservice.crearEducation(education);
    }
    
    @DeleteMapping("/eliminarEdu/{id}")
    public void eliminarEducation(@PathVariable Long id ){
    educationservice.eliminarEducation(id);
    }
    
        @GetMapping("/listaEducation")
        @ResponseBody
public List<Education> listarEducation(){
return educationservice.listarEducation() ; 
}
    @GetMapping("/buscarEducation/{id}")
@ResponseBody
public Education buscarEducationPorId(@PathVariable Long id){

return educationservice.buscarEducationPorId(id);
}
    
    
}
