import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";
import React from "react";
import { ProductsType } from "../pages/products/[type]";
import styles from "../styles/product.module.scss";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import router from "next/router";
import Image from "next/image";

type ProductProps = {
  product: ProductsType;
};

export default function Product({ product }: ProductProps) {
  function monetize(value: number) {
    var formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",

      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    return formatter.format(value);
  }
  return (
    <>
      <div>
        <div className={styles.divImg}>
          <Splide>
            {product.imgs.map((img: string) => {
              return (
                <>
                <SplideSlide key={img}>
                  <Image src={img} alt="Imagem da publicação" />
                </SplideSlide>
                </>
              );
            })}
          </Splide>
        </div>
      </div>
      <div className={styles.divText}>
        <h1>{product.title}</h1>

        <p>
          <b>andressa.sakamoto </b>
          {product.text}
        </p>
        <p>
          <b>Valor: </b>
          {monetize(product.price)}
        </p>
        <p>
          {product.hashTags.map((element) => {
            return <span className={styles.hashTag} key={element}>#{element} </span>;
          })}
        </p>
        <Link href={product.urlInstagram}>
          <a
            target="_blank"
            title="Acessar publicação no instagram"
            className={styles.btnSocialMedia}
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            &nbsp;Acessar publicação
          </a>
        </Link>
        <button
          type="button"
          className={styles.btnVoltar}
          title="Voltar"
          onClick={() => router.back()}
        >
          <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" />
          &nbsp;Voltar
        </button>
      </div>
    </>
  );
}
