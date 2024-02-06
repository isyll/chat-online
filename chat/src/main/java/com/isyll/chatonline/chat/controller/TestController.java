package com.isyll.chatonline.chat.controller;

import com.isyll.chatonline.chat.payload.response.MessageResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/test")
public class TestController {

    @GetMapping
    public Mono<MessageResponse> test() {
        return Mono.just(new MessageResponse("Chat server works!"));
    }
}
