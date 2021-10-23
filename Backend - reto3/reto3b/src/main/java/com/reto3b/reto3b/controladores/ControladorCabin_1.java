/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3b.reto3b.controladores;

import java.util.List;
import java.util.Optional;
import com.reto3b.reto3b.modelos.Cabin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import com.reto3b.reto3b.servicios.ServiciosCabin;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 *
 * @author Andres Camilo Gutierrez Gonzalez
 */

@RestController
@RequestMapping("/api/Cabin")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
public class ControladorCabin_1 {
    
    @GetMapping("/prueba")
    public String saludar(){
        return "Hola mundo funciono";
    }

    @Autowired
    private ServiciosCabin servicios;
    
    @GetMapping("/all")
    public List<Cabin>getCabin(){
        return servicios.getAll();
    }
    
    @GetMapping("/id")
    public Optional<Cabin> getCabin(@PathVariable("id") int id){
        return servicios.getCabin(id);
    }
    
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Cabin save(@RequestBody Cabin cabin){
        return servicios.save(cabin);
    }
}
