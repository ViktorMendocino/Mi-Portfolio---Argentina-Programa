
package com.portfolioWeb.portfolio.Controller;

import com.portfolioWeb.portfolio.Model.Persona;
import com.portfolioWeb.portfolio.Service.PersonaService;
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
@CrossOrigin(origins = {"http://localhost:4200/"})
public class PersonaController {
    @Autowired
       
            
    PersonaService personaService;   
   @GetMapping("/saludar")
public String Saludar(){

    return "Hola Argentina Programa";
}    

   @PostMapping("/crearPersona")
public void crearPersona(@RequestBody Persona persona){

    personaService.crearPersona(persona);
}  

   @PutMapping("/modificarPersona")
public void modificarPersona(@RequestBody Persona persona){

personaService.crearPersona(persona);
}

@DeleteMapping("/eliminarPersona/{id}")
  public void eliminarPersona(@PathVariable Long id ) {     
 personaService.eliminarPersona(id);
         
         }
  

     @GetMapping("/listarPersonas")
     @ResponseBody
public List<Persona> listarPersonas(){
return personaService.listarPersonas();
}


@GetMapping("/buscarPersona/{id}")
@ResponseBody
public Persona buscarPersonaPorId(@PathVariable Long id){

return personaService.buscarPersonaPorId(id);
}


}
