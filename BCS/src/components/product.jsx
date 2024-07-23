// src/components/Product.js

const Product = ({name, image, description, price, quantity}) => {
    return(
      
      <div>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <p>{description}</p>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
      </div>

      
    );

    return (
        <div>
            <h1>Home Component</h1>
            {products.map((product, index) => (
                <Product
                key={index}
                name={product.name}
                image={product.image}
                description={product.description}
                price={product.price}
                quantity={product.quantity}
                />
            ))}
        </div>
    );
};
    
export default Product;