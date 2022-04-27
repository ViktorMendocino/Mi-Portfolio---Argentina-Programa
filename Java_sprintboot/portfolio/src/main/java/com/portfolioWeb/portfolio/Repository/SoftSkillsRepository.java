
package com.portfolioWeb.portfolio.Repository;
import com.portfolioWeb.portfolio.Model.SoftSkills;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SoftSkillsRepository extends JpaRepository<SoftSkills, Long>{
    
}
