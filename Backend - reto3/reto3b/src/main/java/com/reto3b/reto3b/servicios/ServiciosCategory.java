/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3b.reto3b.servicios;

import com.reto3b.reto3b.modelos.Category;
import com.reto3b.reto3b.repositorios.RepositorioCategory;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author iyhm
 */

@Service 
public class ServiciosCategory {
    @Autowired
    private RepositorioCategory metodosCrud;
    
    public List<Category> getAll(){
        return metodosCrud.getAll();
    }
    
    public Optional<Category> getCategory(int id) {
        return metodosCrud.getCategory(id);
    }
    
    public Category save(Category category){
        if(category.getId() == null){
            return metodosCrud.save(category);
        } 
        else {
            Optional<Category> evt=metodosCrud.getCategory(category.getId());
            if(evt.isEmpty()){
                return metodosCrud.save(category);
            }
            else{
                return category;
            }
        }
    } 
    
    public Category update(Category category){
        if(category.getId()!=null){
            Optional<Category> e=metodosCrud.getCategory(category.getId());
            if(!e.isEmpty()){
                if(category.getName()!=null){
                    e.get().setName(category.getName());
                }
                
                if(category.getDescription()!=null){
                    e.get().setDescription(category.getDescription());
                }
                
                metodosCrud.save(e.get());
                return e.get();
            }else{
                return category;
            }
        }else{
            return category;
        }
    }
    
    public boolean delete(int idCategory){
        Boolean aBoolean = getCategory(idCategory).map(category -> {
            metodosCrud.delete(category);
            return true;
        }).orElse(false);
        return aBoolean;
    }
}
 

