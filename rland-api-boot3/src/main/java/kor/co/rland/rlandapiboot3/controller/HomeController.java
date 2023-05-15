package kor.co.rland.rlandapiboot3.controller;

import java.security.Principal;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class HomeController {
    
    public String index(Principal principal){
        System.out.println(principal.getName());
        return "index";
    }
}
