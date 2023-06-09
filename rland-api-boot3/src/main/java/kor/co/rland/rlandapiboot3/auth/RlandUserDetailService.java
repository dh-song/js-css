package kor.co.rland.rlandapiboot3.auth;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import kor.co.rland.rlandapiboot3.entity.Member;
import kor.co.rland.rlandapiboot3.repository.MemberRepository;

@Service
public class RlandUserDetailService implements UserDetailsService{

    @Autowired
    private MemberRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // TODO Auto-generated method stub
        RlandUserDetails user = new RlandUserDetails();
        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));



         Member member = repository.findByUserName(username);
         user.setId(member.getId());
         user.setEmail(member.getEmail());
         user.setPassword(member.getPwd());
         System.out.println("비번"+ member.getPwd());
         user.setUsername(member.getUserName());
         user.setAuthorities(authorities);

        return user;
    }
    
}
