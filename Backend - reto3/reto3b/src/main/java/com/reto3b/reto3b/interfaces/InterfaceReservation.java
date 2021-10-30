package com.reto3b.reto3b.interfaces;

import org.springframework.data.repository.CrudRepository;
import com.reto3b.reto3b.modelos.Cabin;
import com.reto3b.reto3b.modelos.Reservation;
import java.util.Date;
import java.util.List;
import org.springframework.data.jpa.repository.Query;

/**
 *
 * @author Andres C Gutierrez G
 */

public interface InterfaceReservation extends CrudRepository<Reservation,Integer> {
    
    public List<Reservation> findAllByStatus(String status);
    
    public List<Reservation> findAllByStartDateAfterAndStartDateBefore(Date DateOne, Date DateTwo);
    
    //"SELECT client, count(*) AS 'total' from reservacion group by client order by total" -> SQL
    @Query("SELECT c.client, COUNT(c.client) from Reservation AS c group by c.client order by COUNT(c.client)DESC")
    public List<Object[]> countTotalReservationsByClient();
    
    
}
