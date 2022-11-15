
package com.mongo.controller;

import com.mongo.service.ProductService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import model.Product;
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
public class ProductController {
    
    private final ProductService productService;
    
    @PostMapping("/product")
    public void savePerson(@RequestBody Product product){
        productService.saveProduct(product);
    }
    
    
    @GetMapping("/product")
    public List<Product> listAll(){
        return productService.listAll();
    }
    
    @GetMapping("/product/{id}")
    public Product findById(@PathVariable String id){
        return productService.findProduct(id).get();
    }
    
    @DeleteMapping("/product/{id}")
    public void deletePerson(@PathVariable String id){
        productService.deleteProduct(id);
    }
    
    @PutMapping("/product")
    public void updatePerson(@RequestBody Product product){
        productService.saveProduct(product);
    }
}
