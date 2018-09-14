package homepage.controller;

import homepage.database.BundleRepository;
import homepage.database.SlideRepository;
import homepage.entity.Bundle;
import homepage.entity.Slide;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping({"/api"})
public class MainRestController {

    public MainRestController() {
        // TODO Auto-generated constructor stub
    }

    @Autowired
    private BundleRepository bundleRepository;

    @Autowired
    private SlideRepository slideRepository;



    @GetMapping(value = "/allbundles")
    public List<Bundle> bundlePage(Map<String, Object> model) {
        return bundleRepository.findAll();
    }

    @GetMapping(value = "/allslides")
    public List<Slide> slidePage(Map<String, Object> model) {
        return slideRepository.findAll();
    }

    @PostMapping(value = "/postbundle")
    public String postBundle(@RequestBody Bundle bundle){

        System.out.println("POST");
        System.out.println(bundle);

        return "{\"ret\": \"BUNDLE THROWN\"}";
    }

    @PostMapping(value = "/postslide")
    public String postSlide(@RequestBody Slide slide){

        System.out.println("POST");
        System.out.println(slide);

        return "{\"ret\": \"SLIDE THROWN\"}";
    }

}
