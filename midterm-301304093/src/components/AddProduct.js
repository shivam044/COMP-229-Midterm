import React, { useState } from 'react';

const AddProduct = () => { 

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        quantity: '',
        price: ''
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(formData, null, 2));
        console.log(formData);
      };
    
    return (
        <form>
            <input name="name" placeholder="Name" onChange={handleChange} />
            <input name="description" placeholder="Description" onChange={handleChange} />
            <input name="category" placeholder="Category" onChange={handleChange} />
            <input name="quantity" placeholder="Quantity" onChange={handleChange} />
            <input name="price" placeholder="Price" onChange={handleChange} />
            <button type="submit">Submit</button>
            <button type="button">Cancel</button>
        </form>
    )
}

export default AddProduct;