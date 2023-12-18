package com.isyll.chatonline.chat.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document
public class User {

    @Id
    private String username;
    private String firstname;
    private String lastname;
    private String email;
    private String phone;
    private Status status;
}
