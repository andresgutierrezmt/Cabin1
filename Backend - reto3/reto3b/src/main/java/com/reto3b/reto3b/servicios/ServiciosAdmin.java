/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3b.reto3b.servicios;

import com.reto3b.reto3b.modelos.Admin;
import com.reto3b.reto3b.repositorios.RepositorioAdmin;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Andres C Gutierrez
 */

@Service
public class ServiciosAdmin {
   @Autowired 
   RepositorioAdmin metodosCrud;
   
   public List<Admin> getAll(){
       return metodosCrud.getAll();
   }
   
   public Optional<Admin> getAdmin(int id){
       return metodosCrud.getAdmin(id);
   }
   
   public Admin save(Admin admin){
       if(admin.getIdAdmin() == null){
           return metodosCrud.save(admin);
       }
       else{
           Optional<Admin> evt= metodosCrud.getAdmin(admin.getIdAdmin());
           if(evt.isEmpty()){
               return metodosCrud.save(admin);
           }
           else{
               return admin;
           }
       }
   }
}
