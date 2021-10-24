/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3b.reto3b.modelos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "client")
@JsonPropertyOrder({"idClient","email","password","name","age","messages","reservations"})
@Data
@AllArgsConstructor 
@NoArgsConstructor
public class Client implements Serializable{
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idClient;
    private String email;
    private String password;
    private String name;
    private Integer age;
    
    @OneToMany(cascade = {CascadeType.PERSIST}, mappedBy="client")
    @JsonIgnoreProperties("client")
    private List<Message> messages;
    
    @OneToMany(cascade = {CascadeType.PERSIST}, mappedBy="client")
    @JsonIgnoreProperties("client")
    private List<Reservation> reservations;
}
