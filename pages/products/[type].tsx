import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import NavBar from "../../components/navbar";
import { database } from "../../services/firebase";
import styles from "../../styles/products.module.scss";
import Image from "next/image";
import Link from "next/link";

export type ProductsType = {
  id: string;
  text: string;
  hashTags: string[];
  urlInstagram: string;
  imgs: string[];
  price: number;
  title: string;
};

interface IParams extends ParsedUrlQuery {
  type: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as IParams;
  const querySnapshot = await getDocs(
    query(
      collection(
        database,
        `${params.type === "cakes" ? "fakecake" : "topcake"}`
      ),
      orderBy("createdAt", "desc")
    )
  );

  let products: ProductsType[] = [];
  querySnapshot.forEach((doc) => {
    let product: ProductsType = {
      id: doc.id,
      text: doc.data().text,
      hashTags: doc.data().hashTags,
      imgs: doc.data().imgs,
      urlInstagram: doc.data().urlInstagram,
      price: doc.data().price,
      title: doc.data().title,
    };
    products.push(product);
  });

  return {
    props: {
      products,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const arr: string[] = ["cakes", "topcakes"];
  const paths = arr.map((type) => {
    return {
      params: { type },
    };
  });
  return { paths, fallback: true };
};

export default function Products({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const { type } = router.query;
  return (
    <div id="pageProducts">
      <Head>
        <title>
          {type === "cakes" ? "Bolos Fakes" : "Topos de Bolo"} - Andressa
          Sakamoto Biscuit
        </title>
        <meta
          name="description"
          content={`Catálogo de ${
            type === "cakes" ? "bolos fakes" : "topos de bolo"
          } produzidos.`}
        />
        <meta
          name="keywords"
          content={`${
            type === "cakes" ? "bolo fake" : "topo de bolo"
          }, artesanato, catálogo`}
        />
      </Head>
      <NavBar works={true} />
      <div className={styles.pgContent}>
        {products?.map((product: ProductsType) => {
          return (
            <Link
              href={`/products/${type === "cakes" ? "cake" : "top"}/${
                product.id
              }`}
              key={product.id}
            >
              <a className={styles.card}>
                <Image
                  src={product.imgs[0]}
                  alt="Bolo Fake de biscuit"
                  width="320"
                  height="320"
                />
                <span>{product.title}</span>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
