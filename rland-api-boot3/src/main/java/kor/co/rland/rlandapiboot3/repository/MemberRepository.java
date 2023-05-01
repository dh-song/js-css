package kor.co.rland.rlandapiboot3.repository;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;

import kor.co.rland.rlandapiboot3.entity.Member;

public interface MemberRepository extends JpaRepository<Member, Integer>{

    @Query("from member where userName = :username")
    Member findByUserName(String username);

}
