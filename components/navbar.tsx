import Link from "next/link";
import styles from "../styles/navbar.module.scss";
import imgLogo from "../public/assets/img/logotipo.png";
import Image from "next/image";
import { useState } from "react";

type MenuActiveType = {
  works?: boolean;
  biscuit?: boolean;
  about?: boolean;
  contact?: boolean;
};
const NavBar = (props: MenuActiveType) => {
  const [showMenu, setShowMenu] = useState(false);

  function handleClick() {
    setShowMenu(!showMenu);
  }
  return (
    <nav
      className={`${styles.topnav} ${showMenu && styles.responsive}`}
      id="myTopnav"
    >
      <div>
        <Link href="javascript:void(0)">
          <a className={styles.icon} onClick={handleClick}>
            &#9776;
          </a>
        </Link>
        <Link href="/">
          <a className={styles.img}>
            <Image src={imgLogo} alt="Logo Andressa Sakamoto Biscuit" />
          </a>
        </Link>
      </div>
      <Link href="/works">
        <a className={props.works ? styles.active : ""}>Trabalhos</a>
      </Link>
      <Link href="/biscuit">
        <a className={props.biscuit ? styles.active : ""}>Biscuit</a>
      </Link>
      <Link href="/about">
        <a className={props.about ? styles.active : ""}>Sobre</a>
      </Link>
      <Link href="/contact">
        <a className={props.contact ? styles.active : ""}>Contato</a>
      </Link>
    </nav>
  );
};

export default NavBar;
