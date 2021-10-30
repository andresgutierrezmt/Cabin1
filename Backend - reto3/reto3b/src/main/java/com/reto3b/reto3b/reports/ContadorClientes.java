/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3b.reto3b.reports;

import com.reto3b.reto3b.modelos.Client;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author cabal
 */
@Data 
@AllArgsConstructor 
@NoArgsConstructor 
public class ContadorClientes {
    private Long total;
    private Client client;
}
