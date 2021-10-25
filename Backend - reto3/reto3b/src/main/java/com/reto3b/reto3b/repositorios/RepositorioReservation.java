/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3b.reto3b.repositorios;

import com.reto3b.reto3b.interfaces.InterfaceCabin;
import com.reto3b.reto3b.interfaces.InterfaceReservation;
import java.util.List;
import java.util.Optional;
import com.reto3b.reto3b.modelos.Cabin;
import com.reto3b.reto3b.modelos.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Andres C Gutierrez
 */

@Repository
public class RepositorioReservation {
    
    @Autowired
    private InterfaceReservation crud; 

    public List<Reservation> getAll(){
        return (List<Reservation>) crud.findAll();
    }
    
    public Optional<Reservation> getReservation(int id){
        return crud.findById(id);
    }
    
    public Reservation save(Reservation reservation){
        return crud.save(reservation);
    }
    
    public void delete(Reservation reservation){
        crud.delete(reservation);
    }
}
