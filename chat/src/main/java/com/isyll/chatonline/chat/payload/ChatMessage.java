package com.isyll.chatonline.chat.payload;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ChatMessage {

    private String content;
    private ChatType type;
    private String sender;
}
