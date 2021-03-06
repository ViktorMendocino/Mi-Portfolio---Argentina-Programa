
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
public class Experience {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Basic
    private String business;
    private String position;
    private String img;
    private String start;
    private String end;
    private String tasksDeveloped;

    public Experience(long id, String business, String position, String img, String start, String end, String tasksDeveloped) {
        this.id = id;
        this.business = business;
        this.position = position;
        this.img = img;
        this.start = start;
        this.end = end;
        this.tasksDeveloped = tasksDeveloped;
    }

    public Experience() {
    }
}
