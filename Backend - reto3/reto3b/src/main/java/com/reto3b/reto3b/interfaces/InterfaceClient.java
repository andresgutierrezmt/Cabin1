/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.reto3b.reto3b.interfaces;

import com.reto3b.reto3b.modelos.Cabin;
import com.reto3b.reto3b.modelos.Client;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author Andres C Gutierrez G
 */
public interface InterfaceClient extends CrudRepository<Client,Integer>{
    
}
