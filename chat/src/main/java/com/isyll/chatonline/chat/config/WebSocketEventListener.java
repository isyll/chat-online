package com.isyll.chatonline.chat.config;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

@Component
@RequiredArgsConstructor
public class WebSocketEventListener {

    public void handleWebSocketDisconnectListener(
            SessionDisconnectEvent event
    ) {

    }
}
