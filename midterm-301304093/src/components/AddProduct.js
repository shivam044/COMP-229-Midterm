import React, { useState } from 'react';

const AddProduct = () => { 
    return (
        <form>
            <input name="name" placeholder="Name" onChange={handleChange} />
            <input name="description" placeholder="Description" onChange={handleChange} />
            <input name="category" placeholder="Category" onChange={handleChange} />
            <input name="quantity" placeholder="Quantity" onChange={handleChange} />
            <input name="price" placeholder="Price" onChange={handleChange} />
        </form>
    )
}