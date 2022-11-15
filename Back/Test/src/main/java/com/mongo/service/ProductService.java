
package com.mongo.service;

import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import model.Product;
import org.springframework.stereotype.Service;
import com.mongo.repository.ProductRepository;


@Service
@RequiredArgsConstructor
public class ProductService {
    
    private final ProductRepository productRepository;
    
    //Guardar
    public void saveProduct(Product product){
        productRepository.save(product);
    }
    
    //Listar
    public List<Product> listAll(){
        return productRepository.findAll();
    }
    
    //Listar por ID
    public Optional<Product> findProduct(String id){
        return productRepository.findById(id);
    } 
    
    
    public void deleteProduct(String id){
        productRepository.deleteById(id);
    }

    
}
