/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3b.reto3b.servicios;

import com.reto3b.reto3b.modelos.Client;
import com.reto3b.reto3b.repositorios.RepositorioClient;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Andres Camilo Gutierrez
 */

@Service 
public class ServiciosClient {
    @Autowired
    private RepositorioClient metodosCrud;
    
    public List<Client> getAll(){
        return metodosCrud.getAll();
    }
    
    public Optional<Client> getClient(int idClient){
        return metodosCrud.getClient(idClient);
    }
    
    public Client save(Client client){
        if(client.getIdClient()== null){
            return metodosCrud.save(client);
        } 
        else {
            Optional<Client> evt=metodosCrud.getClient(client.getIdClient());
            if(evt.isEmpty()){
                return metodosCrud.save(client);
            }
            else{
                return client;
            }
        }
    }
}