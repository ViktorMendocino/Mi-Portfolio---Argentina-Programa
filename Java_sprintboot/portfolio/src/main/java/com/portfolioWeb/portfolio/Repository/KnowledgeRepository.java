
package com.portfolioWeb.portfolio.Repository;
import com.portfolioWeb.portfolio.Model.Knowledge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KnowledgeRepository extends JpaRepository<Knowledge, Long>{
    
}
