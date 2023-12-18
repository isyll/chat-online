package com.isyll.chatonline.chat.controller;

import com.isyll.chatonline.chat.payload.response.MessageResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {

    @GetMapping
    public ResponseEntity<MessageResponse> test() {
        return ResponseEntity.ok(new MessageResponse("Chat service works!"));
    }
}
