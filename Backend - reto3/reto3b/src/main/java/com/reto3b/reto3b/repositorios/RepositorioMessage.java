/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3b.reto3b.repositorios;

import com.reto3b.reto3b.interfaces.InterfaceCabin;
import com.reto3b.reto3b.interfaces.InterfaceMessage;
import java.util.List;
import java.util.Optional;
import com.reto3b.reto3b.modelos.Cabin;
import com.reto3b.reto3b.modelos.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Andres C Gutierrez
 */

@Repository
public class RepositorioMessage {
    
    @Autowired
    private InterfaceMessage crud;
    
    public List<Message> getAll(){
        return (List<Message>) crud.findAll();
    }
    
    public Optional<Message> getMessage(int id){
        return crud.findById(id);
    }
    
    public Message save(Message message){
        return crud.save(message);
    }
    
    public void delete(Message message){
        crud.delete(message);
    }
}
