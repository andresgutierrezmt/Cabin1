/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3b.reto3b.modelos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import java.io.Serializable;
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
 * @author Andres C Gutierrez
 */

@Entity
@Table(name="score")
@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonPropertyOrder({"idScore","message","starts","reservationId"})
public class Score implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idScore;
    private String messageText;
    private Integer stars;
    
    @ManyToOne
    @JoinColumn(name="reservationId")
    @JsonIgnoreProperties("reservation")
    private Reservation reservation;
}
