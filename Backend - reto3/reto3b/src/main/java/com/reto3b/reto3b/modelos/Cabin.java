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
import javax.persistence.Column;
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


/**
 *
 * @author Andres C. Gutierrez
 */

@Entity
@Table(name = "cabin")
@JsonPropertyOrder({"id","name","brand","rooms","description","category","messages","reservations"})
@Data //Metodos Getter and setter automaticos
@AllArgsConstructor //Constructores con todos los parametros generados automaticamente
@NoArgsConstructor // Constructores vacios generados automaticamente
public class Cabin implements Serializable{
    
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String brand;
    private Integer rooms;
    private String name;
    private String description;

    @ManyToOne
    @JoinColumn(name="category")
    @JsonIgnoreProperties("cabin")
    private Category category;
    
    @OneToMany(cascade = {CascadeType.PERSIST}, mappedBy="cabin")
    @JsonIgnoreProperties({"cabin","client"})
    private List<Message> messages;
    
    @OneToMany(cascade = {CascadeType.PERSIST}, mappedBy="cabin")
    @JsonIgnoreProperties({"cabin","message"})
    private List<Reservation> reservations;
    
}
