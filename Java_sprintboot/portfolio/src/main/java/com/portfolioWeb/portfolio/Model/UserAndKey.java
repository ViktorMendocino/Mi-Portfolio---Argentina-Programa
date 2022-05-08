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
public class UserAndKey {
        @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Basic
    private String usuario ;
    private String pwd ;
    
    public UserAndKey(long id, String usuario, String pwd) {
        this.id = id;
        this.usuario = usuario;
        this.pwd = pwd;
    }

    public UserAndKey() {
    }

  
    
}
