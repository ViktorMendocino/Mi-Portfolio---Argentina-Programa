
package com.portfolioWeb.portfolio.Service;

import com.portfolioWeb.portfolio.Model.HardSkills;
import com.portfolioWeb.portfolio.Repository.HardSkillsRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HardSkillsService {
   @Autowired
   HardSkillsRepository hardRepo;
  
         public void crearHardSkill(HardSkills hardSkills){
    hardRepo.save(hardSkills);
}
   public void modificarHardSkill(HardSkills hardSkills){
    hardRepo.save(hardSkills);
}
   public void eliminarHardSkill(Long id){
    hardRepo.deleteById(id);
}
   
     public List<HardSkills> listarHardSkill(){
    return hardRepo.findAll();
}
}
