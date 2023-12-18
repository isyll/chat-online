package com.isyll.chatonline.chat.controller;

import com.isyll.chatonline.chat.payload.ChatMessage;
import org.springframework.messaging.handler.annotation.Payload;

public class ChatController {

    public ChatMessage sendMessage(@Payload ChatMessage message) {
        return message;
    }
}
