
package com.portfolioWeb.portfolio.Service;
import com.portfolioWeb.portfolio.Model.AboutMe;
import com.portfolioWeb.portfolio.Repository.AboutMeRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AboutMeService {
    @Autowired
    AboutMeRepository  AboutMeRepository;
   
    public void crearAbout(AboutMe about){
    AboutMeRepository.save(about);
}
    
      public void modificarAbout(AboutMe about){
    AboutMeRepository.save(about);
}
      
       public void eliminarAbout(Long id){
    AboutMeRepository.deleteById(id);
}
      

     public List<AboutMe> solicitarAbout(){
    return AboutMeRepository.findAll();
}
    public  AboutMe buscarAboutMePorId(Long id) {
     return AboutMeRepository.findById(id).orElse(null);
    }
     
}
