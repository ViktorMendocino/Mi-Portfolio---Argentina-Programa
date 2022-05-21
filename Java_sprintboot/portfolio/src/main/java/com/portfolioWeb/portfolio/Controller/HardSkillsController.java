
package com.portfolioWeb.portfolio.Controller;

import com.portfolioWeb.portfolio.Model.HardSkills;
import com.portfolioWeb.portfolio.Service.HardSkillsService;
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
public class HardSkillsController {
   @Autowired   
   HardSkillsService HardService;
   
    @PostMapping ("/crearHSkills")
     public void crearHardSkill(@RequestBody HardSkills hardS){
         
        HardService.crearHardSkill(hardS);
     }
     
      @PutMapping ("/modificarHSkills")
     public void modificarHardSkill(@RequestBody HardSkills hardS){
         
        HardService.modificarHardSkill(hardS);
     }
     
     @DeleteMapping("/eliminarHskills/{id}")
     public void eliminarHardSkill(@PathVariable Long id){
        HardService.eliminarHardSkill(id);
     }
     
     @GetMapping("/solicitarHskills")
     @ResponseBody
     public List<HardSkills> solicitarHardSkill(){
         
     return HardService.listarHardSkill();
     
     }
   
}
