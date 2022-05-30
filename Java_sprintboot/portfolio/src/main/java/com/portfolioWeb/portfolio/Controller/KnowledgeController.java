
package com.portfolioWeb.portfolio.Controller;

import com.portfolioWeb.portfolio.Model.Knowledge;
import com.portfolioWeb.portfolio.Service.KnowledgeService;
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
public class KnowledgeController {
    @Autowired
    
    
    KnowledgeService  KnowService;
    @PostMapping("/crearConocimiento")
    public void  crearKnowledge(@RequestBody Knowledge Know){

    KnowService.crearKnowledge(Know);
} 

    @PutMapping("/modificarConocimiento")
    public void modificarKnowledge (@RequestBody Knowledge Know){
    
    KnowService.modificarKnowledge(Know);
    }
    
    @DeleteMapping("/eliminarCono/{id}")
    public void eliminarKnowledge(@PathVariable Long id ){
    KnowService.eliminarKnowledge(id);
    }
    
        @GetMapping("/listaConocimiento")
        @ResponseBody
    public List<Knowledge> listarKnowledge(){
    return KnowService.listarKnowledge() ; 
    }
    
}
