/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3b.reto3b.controladores;

import com.reto3b.reto3b.modelos.Score;
import com.reto3b.reto3b.servicios.ServiciosScore;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Andres C Gutierrez
 */

@RestController
@RequestMapping("/api/Score")
@CrossOrigin(origins="*",methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT, RequestMethod.DELETE})
public class ControladorScore {
     @Autowired
    private ServiciosScore servicios;
    
    @GetMapping("/all")
    public List<Score> getAdmin(){
        return servicios.getAll();
    }
    
    @GetMapping("/id")
    public Optional<Score> getAdmin(int id){
        return servicios.getScore(id);
    }
    
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Score save(@RequestBody Score score){
        return servicios.save(score);
    }
}
