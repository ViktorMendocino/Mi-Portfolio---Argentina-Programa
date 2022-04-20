
package com.portfolioWeb.portfolio.Repository;
import com.portfolioWeb.portfolio.Model.Education;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EducationRepository extends JpaRepository<Education, Long>{
}
