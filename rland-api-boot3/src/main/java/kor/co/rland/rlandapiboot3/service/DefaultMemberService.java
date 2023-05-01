package kor.co.rland.rlandapiboot3.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kor.co.rland.rlandapiboot3.entity.Member;
import kor.co.rland.rlandapiboot3.repository.MemberRepository;

@Service
public class DefaultMemberService implements MemberService {

    @Autowired
    private MemberRepository repository;

    @Override
    public boolean inValid(String userName, String password) {

        // Optional<Member> member = repository.findById(1);
        Member member = repository.findByUserName("newlec");

        // if (!member.isEmpty()) {
            System.out.println(member.toString());

        // }

        return false;
    }
}
