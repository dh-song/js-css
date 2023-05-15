package kor.co.rland.rlandapiboot3.auth;

import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.user.OAuth2User;

public class GoogleUserDetailsService extends DefaultOAuth2UserService{
    
    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest){
        OAuth2User user = super.loadUser(userRequest);
        System.out.println(user.getAttributes());
        return user;

        // 프로퍼티설정
        // 보안에서 oauth2login.userinfoendpoint.userservice
        // 
    }
}
