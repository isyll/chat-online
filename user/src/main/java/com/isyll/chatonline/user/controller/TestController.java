package com.isyll.chatonline.user.controller;

import com.isyll.chatonline.user.payload.response.MessageResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {

    @GetMapping
    public ResponseEntity<MessageResponse> test() {
        return ResponseEntity.ok(new MessageResponse("User service works!"));
    }
}
