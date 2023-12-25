package com.isyll.chatonline.user.controller;

import com.isyll.chatonline.user.payload.response.MessageResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/test")
public class TestController {

    @GetMapping
    public Mono<MessageResponse> test() {
        return Mono.just(new MessageResponse("User service works!"));
    }
}
