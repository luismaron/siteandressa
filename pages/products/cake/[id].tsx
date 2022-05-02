import { doc, getDoc } from "@firebase/firestore";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import NavBar from "../../../components/navbar";
import { database } from "../../../services/firebase";
import { ProductsType } from "../[type]";
import styles from "../../../styles/product.module.scss";
import { collection, getDocs, query } from "firebase/firestore";
import "@splidejs/splide/dist/css/splide.min.css";
import Product from "../../../components/product";

interface IParams extends ParsedUrlQuery {
  id: string;
}
type Props = {
  product: ProductsType;
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const params = context.params as IParams;
  const docRef = doc(database, "fakecake", params.id);
  const docSnapshot = await getDoc(docRef);
  let product: ProductsType = {
    id: "",
    text: "",
    hashTags: [],
    urlInstagram: "",
    imgs: [],
    price: 0,
    title: "",
  };

  if (docSnapshot.exists()) {
    product.id = docSnapshot.id;
    product.text = docSnapshot.data().text;
    product.hashTags = docSnapshot.data().hashTags;
    product.imgs = docSnapshot.data().imgs;
    product.urlInstagram = docSnapshot.data().urlInstagram;
    product.price = docSnapshot.data().price;
    product.title = docSnapshot.data().title;
  }

  return {
    props: {
      product,
    },
  };
};

export async function getStaticPaths() {
  const querySnapshot = await getDocs(query(collection(database, "fakecake")));

  const paths = querySnapshot.docs.map((doc) => {
    return {
      params: { id: doc.id },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
}

export function Cake({ product }: Props) {
  return (
    <div>
      <Head>
        <title>Andressa Sakamoto Biscuit - Bolo - {product?.title}</title>
        <meta
          name="description"
          content={`Bolo fake com o tema ${product?.title}.`}
        />
        <meta
          name="keywords"
          content={`bolo fake, biscuit, festa infantil, ${product?.title}`}
        />
      </Head>
      <NavBar works={true} />
      <main className={styles.pgContent}>
        {product && <Product product={product} />}
      </main>
    </div>
  );
}

export default Cake;
