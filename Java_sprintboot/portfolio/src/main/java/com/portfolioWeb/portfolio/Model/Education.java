
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
public class Education {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Basic
    private String school;
    private String title;
    private String img;
    private String start;
    private String end;
    private String career;

    public Education(long id, String school, String title, String img, String start, String end, String career) {
        this.id = id;
        this.school = school;
        this.title = title;
        this.img = img;
        this.start = start;
        this.end = end;
        this.career = career;
    }

    public Education() {
    }
    
    
    
    
}
