import { doc, getDoc } from "@firebase/firestore";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import NavBar from "../../../components/navbar";
import { database } from "../../../services/firebase";
import { ProductsType } from "../[type]";
import styles from "../../../styles/product.module.scss";
import Link from "next/link";
import { collection, getDocs, query } from "firebase/firestore";

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as IParams;
  const docRef = doc(database, "topcake", params.id);
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

  console.log("aqui");
  if (docSnapshot.exists()) {
    console.log(docSnapshot.data());
    product = {
      id: docSnapshot.id,
      text: docSnapshot.data().text,
      hashTags: docSnapshot.data().hashTags,
      imgs: docSnapshot.data().imgs,
      urlInstagram: docSnapshot.data().urlInstagram,
      price: docSnapshot.data().price,
      title: docSnapshot.data().title,
    };
  }

  return {
    props: {
      product,
    },
    revalidate: 1,
  };
};

export async function getStaticPaths() {
  const querySnapshot = await getDocs(query(collection(database, "topcake")));
  console.log("vai toma no cu");
  const paths = querySnapshot.docs.map((doc) => {
    return {
      params: { id: doc.id },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export default function Tops({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>Andressa Sakamoto Biscuit - Bolo - {product.title}</title>
        <meta
          name="description"
          content={`Bolo fake com o tema ${product.title}.`}
        />
        <meta
          name="keywords"
          content={`bolo fake, biscuit, festa infantil, ${product.title}`}
        />
      </Head>
      <NavBar works={true} />
      <main className={styles.pgContent}>
        <div>{product.text}</div>
      </main>
    </div>
  );
}
