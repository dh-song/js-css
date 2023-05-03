package kor.co.rland.rlandapiboot3.service;

import kor.co.rland.rlandapiboot3.entity.Member;

public interface MemberService {

    boolean isValid(String userName, String password);

    Member getByUsername(String username);

}
