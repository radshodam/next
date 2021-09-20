import React from "react";

function products({ products }) {
  return (
    <div>
        products
      <ul>
        {products.map((product) => {
        return  <li key={product.id}>{product.title}</li>;
        })}
      </ul>
    </div>
  );
}
//getServerSideProps very dynamics for just pages (for SSR) similar useefect
//getStaticProps (for SSR) similar useefect
export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return {
    props: { products },
  };
}

export default products;
