package homepage.database;

import javax.transaction.Transactional;

import homepage.entity.Appointment;
import homepage.entity.Room;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

import homepage.entity.Slide;

@Transactional
public interface RoomRepository extends CrudRepository<Room, Long>{
    public void deleteById(int id);
    public Room findById(int id);
    public List<Room> findAll();
}