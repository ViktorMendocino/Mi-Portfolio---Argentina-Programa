
package com.portfolioWeb.portfolio.Service;

import com.portfolioWeb.portfolio.Model.SoftSkills;
import com.portfolioWeb.portfolio.Repository.SoftSkillsRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SoftSkillsService {
    @Autowired
    SoftSkillsRepository SoftRepo ;
           public void crearSoftSkill(SoftSkills softSkills){
    SoftRepo.save(softSkills);
}
   public void modificarSoftSkill(SoftSkills softSkills){
    SoftRepo.save(softSkills);
}
   public void eliminarSoftSkill(Long id){
    SoftRepo.deleteById(id);
}
   
     public List<SoftSkills> listarSoftSkill(){
    return SoftRepo.findAll();
}
}
