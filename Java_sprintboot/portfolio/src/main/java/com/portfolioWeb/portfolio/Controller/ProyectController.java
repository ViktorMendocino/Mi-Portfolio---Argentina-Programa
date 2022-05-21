
package com.portfolioWeb.portfolio.Controller;

import com.portfolioWeb.portfolio.Model.Proyect;
import com.portfolioWeb.portfolio.Service.ProyectService;
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
public class ProyectController {
    @Autowired
    
    
      ProyectService  ProService;
    @PostMapping("/crearProyecto")
    public void  crearProyecto(@RequestBody Proyect proyect){

    ProService.crearProyect(proyect);
} 

    @PutMapping("/modificarProyecto")
    public void modificarProyecto (@RequestBody Proyect proyect){
    
    ProService.modificarProyect(proyect);
    }
    
    @DeleteMapping("/eliminarProyecto/{id}")
    public void eliminarProyecto(@PathVariable Long id ){
    ProService.eliminarProyect(id);
    }
    
        @GetMapping("/listaProyecto")
        @ResponseBody
public List<Proyect> listarProyecto(){
return ProService.listarProyect() ; 
}
}
