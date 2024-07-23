// src/components/Home.js

import React from 'react';
import Product from '.product';

const Home = () => {
    const products = [
        {
            name: 'Computer',
            image: 'https://via.placeholder.com/150',
            description: 'This is a sample product description for computer.',
            price: 29.99,
            quantity: 10,
        },
        {
            name: 'LGTV',
            image: 'https://via.placeholder.com/150',
            description: 'This is a sample product description for LGTV.',
            price: 49.99,
            quantity: 5,
        },
        {
            name: 'Printer',
            image: 'https://via.placeholder.com/150',
            description: 'This is a sample product description for printers.',
            price: 19.99,
            quantity: 20,
        }

        // Add more products as needed


    ];
}

export default Home;