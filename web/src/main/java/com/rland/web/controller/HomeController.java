package com.rland.web.controller;

import java.io.File;
import java.io.IOException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import jakarta.servlet.http.HttpServletRequest;

@CrossOrigin(origins = "http://127.0.0.1:5500")
@Controller
@RestController
@RequestMapping("/")
public class HomeController {

    @ResponseBody
    @GetMapping
    public String index(){
        return " Hello Index";
    } 

    @PostMapping("upload")
    public ResponseEntity<String> upload(MultipartFile file, String test,
    HttpServletRequest req) throws IllegalStateException, IOException{
        String fileName = file.getOriginalFilename();
        System.out.println(fileName);
        System.out.println(test);
        System.out.println("upload called");

        if (file.isEmpty()) {
            return new ResponseEntity<String>( "파일이없다는것이다", HttpStatus.BAD_REQUEST);
        }
        String urlPath = "/upload";
        // String urlFile = urlPath+file.getOriginalFilename();
        String realPath = req.getServletContext().getRealPath(urlPath);

        System.out.println(realPath);

        File filePath = new File(realPath);

        if (!filePath.exists()) {
            filePath.mkdirs();
        }
        
        File saveFile = new File(filePath+File.separator+fileName);

        System.out.println(saveFile);

        file.transferTo(saveFile);
  


        
        return new ResponseEntity<String>( fileName, HttpStatus.OK);
    }
}
