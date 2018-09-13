package database;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

import entity.Slide;

@Transactional
public interface SlideRepository extends CrudRepository<Slide, Long>{
    public void deleteById(int id);
    public Slide findById(int id);
    //public List<Slide> findByTitle(String title);
    public List<Slide> findAll();
}