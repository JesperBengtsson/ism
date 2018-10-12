package homepage.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Date;
import java.util.Map;

public class MainController {

    @Value("${application.message:Hello World}")
    private String message = "Hello World";

    @GetMapping("/")
    public String welcome(Map<String, Object> model, String query1) {

        model.put("time", new Date());
        model.put("message", message);
        return "welcome";
    }


}
