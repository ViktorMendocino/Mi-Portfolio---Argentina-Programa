
package com.portfolioWeb.portfolio.Controller;

import com.portfolioWeb.portfolio.Model.AboutMe;
import com.portfolioWeb.portfolio.Service.AboutMeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

  @RestController
public class AboutMeController {
  @Autowired 
  
  AboutMeService aboutMeService;
  
  
    @PostMapping("/crearAcerca")
    public void crearAbout(@RequestBody AboutMe about ){
     aboutMeService.crearAbout(about);
    }
    

    
   
    
    
}
