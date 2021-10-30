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
import com.reto3b.reto3b.modelos.Client;
import com.reto3b.reto3b.modelos.Reservation;
import com.reto3b.reto3b.reports.ContadorClientes;
import java.util.ArrayList;
import java.util.Date;
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
    
    public List<Reservation> ReservacionStatus (String status){
        return crud.findAllByStatus(status);
    }
    
    public List<Reservation> ReservationDate (Date oneDate, Date twoDate){
        return crud.findAllByStartDateAfterAndStartDateBefore(oneDate, twoDate);
    }
    
     public List<ContadorClientes> getTopClient(){
         List<ContadorClientes> res=new ArrayList<>();
         List<Object[]>report = crud.countTotalReservationsByClient();
         for(int i=0; i<report.size();i++){
             res.add(new ContadorClientes((Long)report.get(i)[1],(Client) report.get(i)[0]));
         }
         return res;
     }
     
     public Integer prueba(){
         return crud.countTotalReservationsByClient().size();
     }
}
