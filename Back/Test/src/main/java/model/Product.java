package model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

//Mapear la coleccion
@Document(value = "Product")
@Data
public class Product {

    @Id
    private String idProduct;
    private String name;
    private double unit_price;
    private int qty;
    private double total_price;
    

    
    
}
