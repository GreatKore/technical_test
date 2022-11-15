
package com.mongo.controller;

import com.mongo.service.OrderService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import model.Order;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class OrderController {
    
    private final OrderService orderService;
    
    @PostMapping("/order")
    public void saveOrder(@RequestBody Order order){
        orderService.saveOrder(order);
    }
    
    
    @GetMapping("/order")
    public List<Order> listAll(){
        return orderService.listAll();
    }
    
    @GetMapping("/order/{id}")
    public Order findById(@PathVariable String id){
        return orderService.findOrder(id).get();
    }
    
    @DeleteMapping("/order/{id}")
    public void deletePerson(@PathVariable String id){
        orderService.deleteOrder(id);
    }
    
    @PutMapping("/order")
    public void updatePerson(@RequestBody Order order){
        orderService.saveOrder(order);
    }
}
