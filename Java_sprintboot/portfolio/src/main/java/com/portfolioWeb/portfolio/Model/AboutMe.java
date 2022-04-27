
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
public class AboutMe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
private long id;
    @Basic
private String name;

public AboutMe(long id, String name) {
        this.id = id;
        this.name = name;
    }

public AboutMe() {
    } 
    
}
