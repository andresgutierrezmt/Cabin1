package com.reto3b.reto3b.controladores;

import com.reto3b.reto3b.modelos.Cabin;
import java.util.List;
import java.util.Optional;
import com.reto3b.reto3b.modelos.Reservation;
import com.reto3b.reto3b.reports.ContadorClientes;
import com.reto3b.reto3b.reports.ReservationStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import com.reto3b.reto3b.servicios.ServiciosReservation;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 *
 * @author Andres Camilo Gutierrez Gonzalez
 */

@RestController
@RequestMapping("/api/Reservation")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
public class ControladorReservation_1 {

    @Autowired
    private ServiciosReservation servicios;
    
    @GetMapping("/all")
    public List<Reservation>getReservation(){
        return servicios.getAll();
    }
    
    @GetMapping("/{id}")
    public Optional<Reservation> getReservation(@PathVariable("id") int id){
        return servicios.getReservation(id);
    }
    
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Reservation save(@RequestBody Reservation reservation){
        return servicios.save(reservation);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Reservation update(@RequestBody Reservation reservation){
        return servicios.update(reservation);
    }
    
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int idReservation){
        return servicios.delete(idReservation);
    }

    @GetMapping("/report-status")
    public  ReservationStatus getReservas(){
        return servicios.getReportStatusReservation();
    }
    
    @GetMapping("/report-dates/{dateOne}/{dateTwo}")
    public List<Reservation> getDateReservation(@PathVariable("dateOne")String dateOne, @PathVariable("dateTwo")String dateTwo){
        return servicios.getReportDate(dateOne, dateTwo);
    }
    
    @GetMapping("/report-clients")
    public List<ContadorClientes> getClients(){
        return servicios.getTopClients();
    }
    
     @GetMapping("/report-prueba")
    public Integer pruebas(){
        return servicios.pruebas();
    }
}
