package kor.co.rland.rlandapiboot3.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import kor.co.rland.rlandapiboot3.entity.Member;
import kor.co.rland.rlandapiboot3.repository.MemberRepository;

@Service
public class DefaultMemberService implements MemberService {

    @Autowired
    private MemberRepository repository;

    @Override
    public boolean isValid(String userName, String password) {

        // Optional<Member> member = repository.findById(1);
        Member member = repository.findByUserName("newlec");

        // if (!member.isEmpty()) {
            System.out.println(member.toString());
            // if (member == null) {
            //     return false;
            // } else if (member.getPwd().equals(member))
        // }
        if (member == null) {
            return false;    
        } else if(!BCrypt.checkpw(password, member.getPwd())){
            return false;
        }
        return true;
    }

    @Override
    public Member getByUsername(String username) {
        Member member = repository.findByUserName(username);
       return member;
    }
}
