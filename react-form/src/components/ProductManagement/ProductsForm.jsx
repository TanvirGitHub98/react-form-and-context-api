import React from "react";

const ProductsForm = ({ handleNewProduct }) => {
  const handleProductSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    const product = {
      name,
      price,
      quantity,
    };
    handleNewProduct(product);
  };
  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleProductSubmit}>
        <input type="text" name="name" id="name" placeholder="Name" /> <br />
        <input type="text" name="price" id="price" placeholder="Price" />
        <br />
        <input
          type="text"
          name="quantity"
          id="quantity"
          placeholder="Quantity"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ProductsForm;
