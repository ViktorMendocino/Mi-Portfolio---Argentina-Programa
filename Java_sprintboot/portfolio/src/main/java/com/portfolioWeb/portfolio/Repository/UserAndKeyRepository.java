
package com.portfolioWeb.portfolio.Repository;

import com.portfolioWeb.portfolio.Model.UserAndKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAndKeyRepository extends JpaRepository<UserAndKey,Long>{
    public boolean existsByUsuarioAndPwd(String usuario, String pwd);
}
