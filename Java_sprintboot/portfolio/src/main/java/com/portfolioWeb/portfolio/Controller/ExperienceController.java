
package com.portfolioWeb.portfolio.Controller;

import com.portfolioWeb.portfolio.Model.Experience;
import com.portfolioWeb.portfolio.Service.ExperienceService;
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
@CrossOrigin(origins = {"http://localhost:4200/"})
public class ExperienceController {
     @Autowired 
     
     ExperienceService expService;
     
     @PostMapping ("/crearExp")
     public void crearExperience(@RequestBody Experience experience){
         
        expService.crearExperience(experience);
     }
     
      @PutMapping ("/modificarExp")
     public void modificarExperience(@RequestBody Experience experience){
         
        expService.crearExperience(experience);
     }
     
     @DeleteMapping("/eliminarExp/{id}")
     public void eliminarExperiencia(@PathVariable Long id){
        expService.eliminarExperience(id);
     }
     
     @GetMapping("/solicitarExp")
     @ResponseBody
     public List<Experience> solicitarExperiencia(){
         
     return expService.listarExperience();
     
     }



     
     
}
