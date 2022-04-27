
package com.portfolioWeb.portfolio.Repository;
import com.portfolioWeb.portfolio.Model.Proyect;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProyectRepository extends JpaRepository<Proyect, Long>{
    
}
