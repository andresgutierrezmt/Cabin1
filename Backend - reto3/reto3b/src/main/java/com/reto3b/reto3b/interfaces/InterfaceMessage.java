package com.reto3b.reto3b.interfaces;

import com.reto3b.reto3b.modelos.Message;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author Andres C Gutierrez G
 */

public interface InterfaceMessage extends CrudRepository<Message,Integer>{
    
}
