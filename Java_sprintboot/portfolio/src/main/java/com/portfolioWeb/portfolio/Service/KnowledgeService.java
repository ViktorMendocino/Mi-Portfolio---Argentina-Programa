
package com.portfolioWeb.portfolio.Service;

import com.portfolioWeb.portfolio.Model.Knowledge;
import com.portfolioWeb.portfolio.Repository.KnowledgeRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class KnowledgeService {
    @Autowired
    KnowledgeRepository KnoRepo; 
    
      public void crearKnowledge(Knowledge knowledge){
    KnoRepo.save(knowledge);
}
    
      public void modificarKnowledge(Knowledge knowledge){
    KnoRepo.save(knowledge);
}
      
       public void eliminarKnowledge(Long id){
    KnoRepo.deleteById(id);
}
       
     public List<Knowledge> listarKnowledge(){
    return KnoRepo.findAll();
}
    
}
