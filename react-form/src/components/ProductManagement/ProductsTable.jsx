import React from "react";

const ProductsTable = ({ product }) => {
  console.log(product);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Inndex</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantit</th>
          </tr>
        </thead>
        <tbody>
          
            {product.map((device, index)  => (
            <tr key={index}>
            
                <td>{index}</td>
                <td>{device.name}</td>
                <td>{device.price}</td>
                <td>{device.quantity}</td>
                </tr>
            ))}
        
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
