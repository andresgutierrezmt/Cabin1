/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3b.reto3b.servicios;

import java.util.List;
import java.util.Optional;
import com.reto3b.reto3b.modelos.Cabin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.reto3b.reto3b.repositorios.RepositorioCabin;

/**
 *
 * @author Andres Camilo Gutierrez
 */

@Service 
public class ServiciosCabin {
    
    @Autowired
    private RepositorioCabin metodosCrud;
    
    public List<Cabin> getAll(){
        return metodosCrud.getAll();
    }
    
    public Optional<Cabin> getCabin(int idCabin){
        return metodosCrud.getCabin(idCabin);
    }
    
    public Cabin save(Cabin cabin){
        if(cabin.getId() == null){
            return metodosCrud.save(cabin);
        } 
        else {
            Optional<Cabin> evt=metodosCrud.getCabin(cabin.getId());
            if(evt.isEmpty()){
                return metodosCrud.save(cabin);
            }
            else{
                return cabin;
            }
        }
    }
}
