package model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

//Mapear la coleccion
@Document(value = "Order")
@Data
public class Order {

    @Id
    private String idOrder;
    private String nro_order;
    private String date;
    private String product[];
    private double final_price;
 
    
    
}
