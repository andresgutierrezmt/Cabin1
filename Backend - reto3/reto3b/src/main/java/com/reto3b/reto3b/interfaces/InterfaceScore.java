/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.reto3b.reto3b.interfaces;

import com.reto3b.reto3b.modelos.Score;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author Andres C Gutierrez
 */
public interface InterfaceScore extends CrudRepository<Score,Integer>{
    
}
