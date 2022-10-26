import ProductItem from "./ProductItem";
import styles from "./Products.module.css";

const Products = (props) => {
  const DUMMY_PRODUCTS = [
    {
      id: "p1",
      price: 5000,
      title: "The Living Legends",
      description: "Legends they say, are not born but made...",
    },
    {
      id: "p2",
      price: 6000,
      title: "The Villians",
      description: "Villians they also say, are not born but made...",
    },
    {
      id: "p3",
      price: 7000,
      title: "The Preys",
      description: "The survival of the preys solely depends on the presence of the legends",
    },
    {
      id: "p4",
      price: 8000,
      title: "Villians and Preys",
      description: "Legends they say, are not born but made...",
    },
    {
      id: "p5",
      price: 7000,
      title: "Sequel To The Living Legends",
      description: "After all said and done, legends were made...",
    },
  ];
  return (
    <section className={styles.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product =><ProductItem
          key = {product.id}
          id = {product.id}
          title= {product.title}
          price={product.price}
          description={product.description}
        /> )}
        
      </ul>
    </section>
  );
};

export default Products;
