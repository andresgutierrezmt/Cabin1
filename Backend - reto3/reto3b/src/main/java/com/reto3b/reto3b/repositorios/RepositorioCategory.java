/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3b.reto3b.repositorios;

import com.reto3b.reto3b.interfaces.InterfaceCabin;
import com.reto3b.reto3b.interfaces.InterfaceCategory;
import com.reto3b.reto3b.modelos.Cabin;
import com.reto3b.reto3b.modelos.Category;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class RepositorioCategory {
    @Autowired
    private InterfaceCategory crud;
    
    public List<Category> getAll(){
        return (List<Category>) crud.findAll();
    }
    
    public Optional<Category> getCategory(int id){
        return crud.findById(id);
    }
        
    public Category save(Category category){
        return crud.save(category);
    }
}
