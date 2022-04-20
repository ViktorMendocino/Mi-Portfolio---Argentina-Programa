
package com.portfolioWeb.portfolio.Repository;
import com.portfolioWeb.portfolio.Model.AboutMe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AboutMeRepository extends JpaRepository<AboutMe, Long>{
    
}
