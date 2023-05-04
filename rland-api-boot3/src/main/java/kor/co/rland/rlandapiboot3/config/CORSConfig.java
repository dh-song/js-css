package kor.co.rland.rlandapiboot3.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CORSConfig {
    
    @Bean
    WebMvcConfigurer webMvcConfigurer(){
        WebMvcConfigurer configurer = new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                // TODO Auto-generated method stub
                registry.addMapping("/**").allowedOrigins("*");
            }
        };
        return configurer;
    }
}
