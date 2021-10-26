/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3b.reto3b.controladores;

import com.reto3b.reto3b.modelos.Cabin;
import com.reto3b.reto3b.servicios.ServiciosCabin;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Andres C Gutierrez
 */
@RestController
@RequestMapping("/api/amor")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
public class ControladorPagina {
    @GetMapping("/index.html")
    public String saludar(){
        return "¿Te quieres casar conmigo? Se que no tengo un anillo fisico por el momento pero quiero que sepas que quiero que estes a mi lado toda la via, eres la persona que siempre he querido en mi vida y de veras doy gracias a dios por el gran ser que me puso a mi lado te amooooo! posdata: se que es raro hacer esto en la pagina web del proyecto pero esque la verdad quiero sorprenderte xd te amo gracias por el curso ";
    }
}
