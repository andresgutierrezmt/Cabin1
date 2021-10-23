package com.reto3b.reto3b.interfaces;

import com.reto3b.reto3b.modelos.Cabin;
import com.reto3b.reto3b.modelos.Category;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author Andres C. Gutierrez G.
 */

public interface InterfaceCategory extends CrudRepository<Category,Integer>{
    
}
