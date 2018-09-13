package database;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

import entity.Bundle;

@Transactional
public interface BundleRepository extends CrudRepository<Bundle, Long>{
    public void deleteById(int id);
    public Bundle findById(int id);
    //public List<Bundle> findByTitle(String title);
    public List<Bundle> findAll();
}