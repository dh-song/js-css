package kor.co.rland.rlandapiboot3.auth;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class RlandSecurityConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{

        http
        .csrf().disable()
        .authorizeHttpRequests(authorize->authorize
            .requestMatchers("/admin/**").hasAnyRole("ADMIN")
            .requestMatchers("/member/**").hasAnyRole("ADMIN", "MEMBER")
            .anyRequest().permitAll());

        return http.build();
    }

    // @Bean
    // public UserDetailsService userDetailsService(){


    //     return new RlandUserDetailService();
    // }
}
