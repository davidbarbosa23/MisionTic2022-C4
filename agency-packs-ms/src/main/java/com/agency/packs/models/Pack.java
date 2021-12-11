package com.agency.packs.models;

import lombok.Data;
import lombok.ToString;
import org.hibernate.validator.constraints.Length;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Max;
import java.util.Date;

@Document(collection = "packs")
@ToString
@Data
public class Pack {
    @Id                 private String  _id;
    @Length(max = 50)   private String  title;
                        private String  description;
                        private Double  price;
                        private Boolean isActive = Boolean.TRUE;
    @Max(100)           private Integer discount = 0;
    @Length(max = 50)   private String  country;
                        private String  imageUrl = "https://cdn.pixabay.com/photo/2017/01/05/16/57/girl-1955797_960_720.jpg";
    @CreatedDate        private Date    createdAt;
    @LastModifiedDate   private Date    modifiedAt;
}
