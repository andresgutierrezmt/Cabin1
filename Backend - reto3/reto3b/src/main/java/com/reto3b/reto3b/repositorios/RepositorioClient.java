/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3b.reto3b.repositorios;

import com.reto3b.reto3b.interfaces.InterfaceCabin;
import com.reto3b.reto3b.interfaces.InterfaceClient;
import com.reto3b.reto3b.modelos.Cabin;
import com.reto3b.reto3b.modelos.Client;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author iyhm
 */

@Repository
public class RepositorioClient {
    @Autowired
    private InterfaceClient crud;
    
    public List<Client> getAll(){
        return (List<Client>) crud.findAll();
    }
    
    public Optional<Client> getClient(int id){
        return crud.findById(id);
    }
    
    public Client save(Client client){
        return crud.save(client);
    }
      
}
