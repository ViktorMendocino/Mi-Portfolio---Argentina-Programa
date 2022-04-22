
package com.portfolioWeb.portfolio.Controller;

import com.portfolioWeb.portfolio.Model.SoftSkills;
import com.portfolioWeb.portfolio.Service.SoftSkillsService;
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
public class SoftSkillsController {
    @Autowired  
     SoftSkillsService SoftService;
   
    @PostMapping ("/crearSoft")
     public void crearSoftSkill(@RequestBody SoftSkills softS){
         
        SoftService.crearSoftSkill(softS);
     }
     
      @PutMapping ("/modificarSoft")
     public void modificarSoftSkill(@RequestBody SoftSkills softS){
         
        SoftService.modificarSoftSkill(softS);
     }
     
     @DeleteMapping("/eliminarSoft/{id}")
     public void eliminarSoftSkill(@PathVariable Long id){
        SoftService.eliminarSoftSkill(id);
     }
     
     @GetMapping("/solicitarSoft")
     @ResponseBody
     public List<SoftSkills> solicitarSoftSkill(){
         
     return SoftService.listarSoftSkill();
     
     }
}
