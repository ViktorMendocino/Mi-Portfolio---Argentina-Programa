
package com.portfolioWeb.portfolio.Model;
import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Persona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;
    @Basic
 private String fullName ;
 private String position ;
 private String ubication;
 private String url ;

    public Persona(Long id, String fullName, String position, String ubication, String url) {
        this.id = id;
        this.fullName = fullName;
        this.position = position;
        this.ubication = ubication;
        this.url = url;
    }

    public Persona() {
    }

   
 
    
}
