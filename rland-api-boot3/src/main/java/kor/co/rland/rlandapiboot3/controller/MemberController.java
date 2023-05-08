package kor.co.rland.rlandapiboot3.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kor.co.rland.rlandapiboot3.entity.Member;
import kor.co.rland.rlandapiboot3.service.MemberService;

@RestController
@RequestMapping("members")
public class MemberController {

    @Autowired
    private MemberService service;

    @PostMapping("login")
    public ResponseEntity<Map<String, Object>> isValid(String username, String password){

        
        Map<String,Object> dto = new HashMap<>();
        dto.put("result", null);

        if(service.isValid(username, password)){
        Member member = service.getByUsername(username);
        dto.put("result", member);
        }
        return new ResponseEntity<Map<String,Object>>(dto,HttpStatus.OK);
    }

}
