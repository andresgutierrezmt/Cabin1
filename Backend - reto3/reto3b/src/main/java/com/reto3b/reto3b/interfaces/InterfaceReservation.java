package com.reto3b.reto3b.interfaces;

import org.springframework.data.repository.CrudRepository;
import com.reto3b.reto3b.modelos.Cabin;
import com.reto3b.reto3b.modelos.Reservation;

/**
 *
 * @author Andres C Gutierrez G
 */

public interface InterfaceReservation extends CrudRepository<Reservation,Integer> {
    
}
