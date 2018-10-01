package homepage.database;

import javax.transaction.Transactional;

import homepage.entity.Appointment;
import homepage.entity.Client;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

import homepage.entity.Slide;

@Transactional
public interface ClientRepository extends CrudRepository<Client, Long>{
    public void deleteById(int id);
    public Client findById(int id);
    public List<Client> findAll();
}