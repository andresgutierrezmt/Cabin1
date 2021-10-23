package com.reto3b.reto3b.repositorios;

import com.reto3b.reto3b.interfaces.InterfaceCabin;
import java.util.List;
import java.util.Optional;
import com.reto3b.reto3b.modelos.Cabin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Andres C Gutierrez
 */

@Repository
public class RepositorioCabin {
    
    @Autowired
    private InterfaceCabin crud;
    
    public List<Cabin> getAll(){
        return (List<Cabin>) crud.findAll();
    }
    
    public Optional<Cabin> getCabin(int id){ //Optional si existe el id retornalo si no no retorne nada
        return crud.findById(id);
    }
    
    public Cabin save(Cabin cabin){
        return crud.save(cabin);
    }
    
}
