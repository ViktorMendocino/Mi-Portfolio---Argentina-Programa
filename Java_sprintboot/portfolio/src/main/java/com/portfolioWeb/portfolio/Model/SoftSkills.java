
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
public class SoftSkills {
    
        @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Basic
    private String name;
    private String value;

    public SoftSkills(long id, String name, String value) {
        this.id = id;
        this.name = name;
        this.value = value;
    }

    public SoftSkills() {
    }
    
    
}
