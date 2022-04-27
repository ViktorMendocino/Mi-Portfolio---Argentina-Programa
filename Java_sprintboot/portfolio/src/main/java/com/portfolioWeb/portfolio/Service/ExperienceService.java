
package com.portfolioWeb.portfolio.Service;

import com.portfolioWeb.portfolio.Model.Experience;
import com.portfolioWeb.portfolio.Repository.ExperienceRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExperienceService {
    @Autowired
    ExperienceRepository ExperienceRepo;
    
    
       public void crearExperience(Experience experience){
    ExperienceRepo.save(experience);
}
   public void modificarExperience(Experience experience){
    ExperienceRepo.save(experience);
}
   public void eliminarExperience(Long id){
    ExperienceRepo.deleteById(id);
}
   
     public List<Experience> listarExperience(){
    return ExperienceRepo.findAll();
}
}
