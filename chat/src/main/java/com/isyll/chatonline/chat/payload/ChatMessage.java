package com.isyll.chatonline.chat.payload;

import lombok.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ChatMessage {

    private String content;
    private ChatType type;
    private String senderId;
    private String recipientId;
    private LocalDate timestamp;

}
