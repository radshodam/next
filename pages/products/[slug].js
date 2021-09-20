import image from "next/image";
import Image from "next/image";

const Single = ({ products }) => {
  return (
    <div>
      <h1>{products.title}</h1>
      <h2>{products.image}</h2>
    </div>
  );
};
//if use getStaticProps use getStaticPaths
export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "1" } }, { params: { slug: "2" } }],
    fallback: true,
  };
}
//!If getServerSideProps okay but if use getStaticProps usee bottom + up
export async function getStaticProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.slug}`);

  const products = await res.json();

  return {
    props: { products },
  };
}

export default Single;
