/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3b.reto3b.servicios;

import com.reto3b.reto3b.modelos.Admin;
import com.reto3b.reto3b.modelos.Cabin;
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
   

    public Admin update(Admin admin){
        if(admin.getIdAdmin()!=null){
            Optional<Admin> e=metodosCrud.getAdmin(admin.getIdAdmin());
            if(!e.isEmpty()){
                if(admin.getName()!=null){
                    e.get().setName(admin.getName());
                }
                if(admin.getEmail()!=null){
                    e.get().setEmail(admin.getEmail());
                }
                if(admin.getPassaword()!=null){
                    e.get().setPassaword(admin.getPassaword());
                }
                metodosCrud.save(e.get());
                return e.get();
            }else{
                return admin;
            }
        }else{
            return admin;
        }
    }
    
    public boolean delete(int idAdmin){
        Boolean aBoolean = getAdmin(idAdmin).map(admin -> {
            metodosCrud.delete(admin);
            return true;
        }).orElse(false);
        return aBoolean;
    }
}
