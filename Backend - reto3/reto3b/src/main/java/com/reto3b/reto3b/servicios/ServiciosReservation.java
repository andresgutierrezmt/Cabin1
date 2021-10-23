/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3b.reto3b.servicios;

import java.util.List;
import java.util.Optional;
import com.reto3b.reto3b.modelos.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.reto3b.reto3b.repositorios.RepositorioReservation;

/**
 *
 * @author Andres Camilo Gutierrez
 */

@Service 
public class ServiciosReservation {
@Autowired
    private RepositorioReservation metodosCrud;
    
    public List<Reservation> getAll(){
        return metodosCrud.getAll();
    }
    
    public Optional<Reservation> getReservation(int idReservation){
        return metodosCrud.getReservation(idReservation);
    }
    
    public Reservation save(Reservation reservation){
        if(reservation.getIdReservation() == null){
            return metodosCrud.save(reservation);
        } 
        else {
            Optional<Reservation> evt=metodosCrud.getReservation(reservation.getIdReservation());
            if(evt.isEmpty()){
                return metodosCrud.save(reservation);
            }
            else{
                return reservation;
            }
        }
    } 
}
