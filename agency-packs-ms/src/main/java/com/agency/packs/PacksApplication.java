package com.agency.packs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.config.EnableMongoAuditing;

@SpringBootApplication
@EnableMongoAuditing
public class PacksApplication {

    public static void main(String[] args) {
        SpringApplication.run(PacksApplication.class, args);
    }

}
