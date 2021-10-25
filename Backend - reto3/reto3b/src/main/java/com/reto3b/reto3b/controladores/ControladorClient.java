/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3b.reto3b.controladores;

import com.reto3b.reto3b.modelos.Cabin;
import com.reto3b.reto3b.modelos.Client;
import com.reto3b.reto3b.servicios.ServiciosClient;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Andres Camilo Gutierrez Gonzalez
 */

@RestController
@RequestMapping("/api/Client")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
public class ControladorClient {
    
    @Autowired
    private ServiciosClient servicios;
    
    @GetMapping("/all")
    public List<Client> getClient(){
        return servicios.getAll();
    }    
 
    @GetMapping("/{id}")
    public Optional<Client> getClient(@PathVariable("id") int id){
        return servicios.getClient(id);
    } 
    
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Client save(@RequestBody Client client){
        return servicios.save(client);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Client update(@RequestBody Client client){
        return servicios.update(client);
    }
    
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int idClient){
        return servicios.delete(idClient);
    }       
}
