
package com.portfolioWeb.portfolio.Service;

import com.portfolioWeb.portfolio.Model.Persona;
import com.portfolioWeb.portfolio.Repository.PersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class PersonaService {
    @Autowired
    PersonaRepository PersoRepository;
    
   public void crearPersona(Persona persona){
    PersoRepository.save(persona);
}
   public void modificarPersona(Persona persona){
    PersoRepository.save(persona);
}
   public void eliminarPersona(Long id){
    PersoRepository.deleteById(id);
}
   
     public List<Persona> listarPersonas(){
    return PersoRepository.findAll();
}
}
