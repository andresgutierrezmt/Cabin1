/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3b.reto3b.modelos;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author Andres C Gutierrez
 */

@Entity
@Table(name= "admin")
@JsonPropertyOrder({"idAdmin","email","name","password"})
@Data
@AllArgsConstructor //Constructores con todos los parametros generados automaticamente
@NoArgsConstructor
public class Admin implements Serializable{
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idAdmin;
    private String email;
    private String name;
    private String passaword;
}
