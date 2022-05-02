import type { NextPage } from "next";
import styles from "../styles/home.module.scss";
import logoImg from "../public/assets/img/logo_colorido.png";
import imgLogo from "../public/assets/img/logotipo.png";
import imgAndressa from "../public/assets/img/CB9P4220.jpg";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className={styles.pgInicial}>
      <Head>
        <title>Andressa Sakamoto Biscuit</title>
        <meta
          name="description"
          content="Produção de bolos fakes e topos de bolo em biscuit para festas infantis."
        />
        <meta
          name="keywords"
          content="bolo fakes, topo de bolo, festa, infantil, aniversário, biscuit"
        />
        <meta property="og:title" content="Andressa Sakamoto Biscuit" />
        <meta
          property="og:description"
          content="Produção de bolos fakes e topos de bolo em biscuit para festas infantis."
        />
        <meta property="og:image" content={logoImg.src} />
      </Head>
      <div className={styles.logoEscrito}>
        <Image src={imgLogo} alt="Logo Andressa Sakamoto Biscuit" />
      </div>
      <aside className={styles.image}>
        <Image src={imgAndressa} alt="Andressa Sakamoto e bolos fakes" />
      </aside>
      <main>
        <div className={styles.imagem}>
          <Image src={logoImg} alt="Logo Andressa Sakamoto Biscuit" />
        </div>
        <p className={styles.texto}>
          Seja Bem-vindo(a), neste website você encontrará o meu portfolio,
          desde meu primeiro até o último trabalho. Espero que goste.
        </p>

        <Link href="/works">
          <a>CONTINUAR</a>
        </Link>
      </main>
    </div>
  );
};

export default Home;
