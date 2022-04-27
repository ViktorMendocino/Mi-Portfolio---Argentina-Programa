
package com.portfolioWeb.portfolio.Model;

import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Proyect {
    
    
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Basic
    private String name;
    private String title;
    private String img;
    private String start;
    private String end;
    private String repo;

    public Proyect(long id, String name, String title, String img, String start, String end, String repo) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.img = img;
        this.start = start;
        this.end = end;
        this.repo = repo;
    }

    public Proyect() {
    }

}
