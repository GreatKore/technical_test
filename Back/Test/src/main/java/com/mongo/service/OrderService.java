
package com.mongo.service;

import com.mongo.repository.OrderRepository;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.mongo.repository.ProductRepository;
import model.Order;


@Service
@RequiredArgsConstructor
public class OrderService {
    
    private final OrderRepository orderRepository;
    
    //Guardar
    public void saveOrder(Order order){
        orderRepository.save(order);
    }
    
    //Listar
    public List<Order> listAll(){
        return orderRepository.findAll();
    }
    
    //Listar por ID
    public Optional<Order> findOrder(String id){
        return orderRepository.findById(id);
    } 
    
    
    public void deleteOrder(String id){
        orderRepository.deleteById(id);
    }

    
}
