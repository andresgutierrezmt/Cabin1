package com.reto3b.reto3b.controladores;

import java.util.List;
import java.util.Optional;
import com.reto3b.reto3b.modelos.Reservation;
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
    
    @GetMapping("/id")
    public Optional<Reservation> getReservation(@PathVariable("id") int id){
        return servicios.getReservation(id);
    }
    
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Reservation save(@RequestBody Reservation reservation){
        return servicios.save(reservation);
    }    
}
