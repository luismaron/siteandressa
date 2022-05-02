import type { NextPage } from "next";
import Link from "next/link";
import NavBar from "../components/navbar";
import boloFake from "../public/assets/img/bolo_fake.jpg";
import topoBolo from "../public/assets/img/topo_bolo.jpg";
import styles from "../styles/works.module.scss";
import Image from "next/image";

const Content: NextPage = () => {
  return (
    <div className={styles.pgContent}>
      <div>
        <NavBar works={true} />
      </div>
      <main>
        <Link href="/products/cakes">
          <a className={styles.card}>
            <Image src={boloFake} alt="Bolo Fake de biscuit" />
            <span>Bolos Fake</span>
          </a>
        </Link>

        <Link href="/products/tops">
          <a className={styles.card}>
            <Image src={topoBolo} alt="Bolo Fake de biscuit" />
            <span>Topos de Bolo</span>
          </a>
        </Link>
      </main>
    </div>
  );
};

export default Content;
