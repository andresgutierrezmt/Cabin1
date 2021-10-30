/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3b.reto3b.servicios;

import java.util.List;
import java.util.Optional;
import com.reto3b.reto3b.modelos.Reservation;
import com.reto3b.reto3b.reports.ContadorClientes;
import com.reto3b.reto3b.reports.ReservationStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.reto3b.reto3b.repositorios.RepositorioReservation;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

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
    
    public Reservation update(Reservation reservation){
        if(reservation.getIdReservation()!=null){
            Optional<Reservation> e=metodosCrud.getReservation(reservation.getIdReservation());
            if(!e.isEmpty()){
                if(reservation.getDevolutionDate()!=null){
                    e.get().setDevolutionDate(reservation.getDevolutionDate());
                }
                if(reservation.getStartDate()!=null){
                    e.get().setStartDate(reservation.getStartDate());
                }
                if(reservation.getClient()!=null){
                    e.get().setClient(reservation.getClient());
                }
                if(reservation.getCabin()!=null){
                    e.get().setCabin(reservation.getCabin());
                }
                if(reservation.getScore()!=null){
                    e.get().setScore(reservation.getScore());
                }
                metodosCrud.save(e.get());
                return e.get();
            }else{
                return reservation;
            }
        }else{
            return reservation;
        }
    }
    
    public boolean delete(int idReservation){
        Boolean aBoolean = getReservation(idReservation).map(reservation -> {
            metodosCrud.delete(reservation);
            return true;
        }).orElse(false);
        return aBoolean;
    }
    
    
    public ReservationStatus getReportStatusReservation(){
        List<Reservation>completed = metodosCrud.ReservacionStatus("completed");
        List<Reservation>cancelled = metodosCrud.ReservacionStatus("cancelled");
        return new ReservationStatus (completed.size(), cancelled.size());
    }
    
    public List<Reservation> getReportDate(String dateOne, String dateTwo){
        SimpleDateFormat parser=new SimpleDateFormat ("yyyy-MM-dd");
        Date dateA = new Date();
        Date dateB = new Date();
        
        try{
            dateA = parser.parse(dateOne);
            dateB = parser.parse(dateTwo);
        }catch(ParseException evt){
            evt.printStackTrace();
        }if(dateA.before(dateB)){
            return metodosCrud.ReservationDate(dateA, dateB);
        }else{
        return new ArrayList<>();
        }
    }
    
    public List<ContadorClientes> getTopClients(){
        return metodosCrud.getTopClient();
    }
    
    public Integer pruebas(){
        return metodosCrud.prueba();
    }
}


