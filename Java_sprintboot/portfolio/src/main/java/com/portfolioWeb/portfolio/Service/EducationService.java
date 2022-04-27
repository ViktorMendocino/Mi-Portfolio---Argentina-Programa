
package com.portfolioWeb.portfolio.Service;
import com.portfolioWeb.portfolio.Model.Education;
import com.portfolioWeb.portfolio.Repository.EducationRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EducationService {
    @Autowired
    EducationRepository EducationRepo;
    
   public void crearEducation(Education education){
    EducationRepo.save(education);
}
   public void modificarEducation(Education education){
    EducationRepo.save(education);
}
   public void eliminarEducation(Long id){
    EducationRepo.deleteById(id);
}
   
   public List<Education> listarEducation(){
    return EducationRepo.findAll();
}
   
   public Education buscarEducationPorId(Long id){
   
       return EducationRepo.findById(id).orElse(null);
   }
}
    
    
    

