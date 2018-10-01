package homepage.database;

import javax.transaction.Transactional;

import homepage.entity.Appointment;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

import homepage.entity.Slide;

@Transactional
public interface AppointmentRepository extends CrudRepository<Appointment, Long>{
    public void deleteById(int id);
    public Appointment findById(int id);
    public List<Appointment> findAll();
}