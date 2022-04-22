
package com.portfolioWeb.portfolio.Service;

import com.portfolioWeb.portfolio.Model.Proyect;
import com.portfolioWeb.portfolio.Repository.ProyectRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProyectService {
    @Autowired
    ProyectRepository Proyectrepo;   
    
    
               public void crearProyect(Proyect proyect){
    Proyectrepo.save(proyect);
}
   public void modificarProyect(Proyect proyect){
    Proyectrepo.save(proyect);
}
   public void eliminarProyect(Long id){
    Proyectrepo.deleteById(id);
}
   
     public List<Proyect> listarProyect(){
    return Proyectrepo.findAll();
}
}
