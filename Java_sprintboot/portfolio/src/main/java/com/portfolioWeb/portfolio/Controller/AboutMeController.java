
package com.portfolioWeb.portfolio.Controller;

import com.portfolioWeb.portfolio.Model.AboutMe;
import com.portfolioWeb.portfolio.Service.AboutMeService;
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
public class AboutMeController {
  @Autowired 
  
  AboutMeService aboutMeService;
  
  
    @PostMapping("/crearAcerca")
    public void crearAbout(@RequestBody AboutMe about ){
     aboutMeService.crearAbout(about);
    }
    @PutMapping("/modificarAcerca")
    public void modificarAbout(@RequestBody AboutMe about){
    
    aboutMeService.modificarAbout(about);
    }
    
    @DeleteMapping("/eliminarAcerca/{id}")
  public void eliminarAcerca(@PathVariable Long id ) {     
   aboutMeService.eliminarAbout(id);
    }
    
     @GetMapping("/solicitarAcerca")
     @ResponseBody
    public List<AboutMe> solicitarAbout(){
        
       return aboutMeService.solicitarAbout();
        
    }
    @GetMapping("/buscarAcercaDe/{id}")
    @ResponseBody
    public AboutMe buscarAboutMePorId(@PathVariable Long id){

    return aboutMeService.buscarAboutMePorId(id);
    }
    
  
  }
    

    


