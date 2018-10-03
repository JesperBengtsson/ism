package homepage.controller;

import homepage.database.*;
import homepage.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping({"/api"})
public class MainRestController {

    public MainRestController() {
        // TODO Auto-generated constructor stub
    }

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private BundleRepository bundleRepository;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private SlideRepository slideRepository;




    @GetMapping(value = "/allappointments")
    public List<Appointment> appointmentPage(Map<String, Object> model) {
        return appointmentRepository.findAll();
    }

    @GetMapping(value = "/allbundles")
    public List<Bundle> bundlePage(Map<String, Object> model) {
        return bundleRepository.findAll();
    }

    @GetMapping(value = "/allclients")
    public List<Client> clientPage(Map<String, Object> model) {
        return clientRepository.findAll();
    }

    @GetMapping(value = "/allrooms")
    public List<Room> roomPage(Map<String, Object> model) {
        return roomRepository.findAll();
    }

    @GetMapping(value = "/allslides")
    public List<Slide> slidePage(Map<String, Object> model) {
        return slideRepository.findAll();
    }


    @PostMapping(value = "/postappointment")
    public String postAppointment(@RequestBody Appointment appointment) {

        System.out.println("POST");
        System.out.println(appointment);
        appointmentRepository.save(appointment);

        return "{\"ret\": \"APPOINTMENT THROWN\"}";
    }

    @PostMapping(value = "/postbundle")
    public String postBundle(@RequestBody Bundle bundle) {

        System.out.println("POST");
        System.out.println(bundle);

        return "{\"ret\": \"BUNDLE THROWN\"}";
    }

    @PostMapping(value = "/postclient")
    public String postClient(@RequestBody Client client) {

        System.out.println("POST");
        System.out.println(client);

        return "{\"ret\": \"CLIENT THROWN\"}";
    }

    @PostMapping(value = "/postroom")
    public String postRoom(@RequestBody Room room) {

        System.out.println("POST");
        System.out.println(room);

        return "{\"ret\": \"ROOM THROWN\"}";
    }

    @PostMapping(value = "/postslide")
    public String postSlide(@RequestBody Slide slide) {

        System.out.println("POST");
        System.out.println(slide);

        return "{\"ret\": \"SLIDE THROWN\"}";
    }

    //TODO FIX FIX FIX FIX FIX
    @CrossOrigin
    @PutMapping(value = "/editappointment/{id}")
    public String editAppointment(@RequestBody Appointment appointment, @PathVariable int id) {

        appointmentRepository.save(appointment);

        return "{\"ret\": \"OK\"}";
    }


}