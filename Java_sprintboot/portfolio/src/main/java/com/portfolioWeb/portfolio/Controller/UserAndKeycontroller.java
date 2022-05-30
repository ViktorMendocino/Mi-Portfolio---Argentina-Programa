
package com.portfolioWeb.portfolio.Controller;

import com.portfolioWeb.portfolio.Model.UserAndKey;
import com.portfolioWeb.portfolio.Service.UserAndKeyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"https://victormirandaportfolio.web.app/"})
public class UserAndKeycontroller {
     @Autowired
     UserAndKeyService UserAndkeyR ;
     
    @PostMapping("/Login")
     public boolean existeUsuarioAndPwd(@RequestBody UserAndKey userAndKey ){
     
     return UserAndkeyR.existeUserAndPwd(userAndKey);
     
     }
    
    
}
