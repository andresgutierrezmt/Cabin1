/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3b.reto3b.modelos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author Andres C. Gutierrez
 */

@Entity
@Table(name = "message")
@JsonPropertyOrder({"idMessage","messageText","client","cabin"})
@Data 
@AllArgsConstructor 
@NoArgsConstructor 
public class Message implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idMessage;
    private String messageText;
    
    @ManyToOne
    @JoinColumn(name="client")
    @JsonIgnoreProperties({"client","message","reservation"})
    private Client client;
    
    @ManyToOne
    @JoinColumn(name="cabin")
    @JsonIgnoreProperties({"client","message","reservation"})
    private Cabin cabin;
    
}
