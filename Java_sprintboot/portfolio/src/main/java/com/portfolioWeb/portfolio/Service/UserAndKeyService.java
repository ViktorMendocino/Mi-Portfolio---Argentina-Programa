
package com.portfolioWeb.portfolio.Service;

import com.portfolioWeb.portfolio.Model.UserAndKey;
import com.portfolioWeb.portfolio.Repository.UserAndKeyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserAndKeyService {
    @Autowired
    UserAndKeyRepository UserAndkeyR ;
    
    public boolean existeUserAndPwd(UserAndKey userAndKey)     
   {
       return UserAndkeyR.existsByUsuarioAndPwd(userAndKey.getUsuario(), userAndKey.getPwd());
    }
    
}
