import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import NavBar from "../components/navbar";
import styles from "../styles/about.module.scss";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Andressa Sakamoto Biscuit - Sobre</title>
        <meta name="description" content="História da artesã responsável." />
        <meta name="keywords" content="artesanato, artesão, história" />
      </Head>
      <NavBar about={true} />
      <div className={styles.pgContent}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          ipsum orci, vulputate eget condimentum ut, volutpat at eros. Nulla
          auctor elit nec lacus scelerisque, sed cursus enim congue. Integer
          vulputate enim eget laoreet varius. Donec tincidunt lectus nec tortor
          faucibus tristique. Mauris aliquet quam vel orci dignissim, sed cursus
          lorem dictum. Suspendisse scelerisque augue lacus, eu ultrices mauris
          imperdiet ac. Pellentesque porttitor viverra lorem sed scelerisque.
        </p>
        <p>
          Phasellus vitae consequat libero, a dictum metus. Nam suscipit
          ultricies purus a interdum. Etiam placerat tempor elit. Mauris eget
          magna aliquet, mollis magna eget, dignissim nibh. Nulla mauris est,
          consectetur quis libero et, aliquet condimentum lectus. Nunc ornare
          tortor tortor, at tristique lacus ullamcorper sed. Nam pellentesque
          mollis nulla eu finibus. Ut placerat ex quis magna vestibulum iaculis.
          Maecenas non consequat massa. Pellentesque molestie venenatis eros vel
          gravida. Nam viverra ex eros, eget sollicitudin elit ultrices ut.
          Integer malesuada urna nisi. Cras a interdum ante. Pellentesque ac
          elementum elit, non ullamcorper enim. Aliquam pharetra, purus sed
          tempus elementum, massa neque pharetra urna, id lacinia tellus leo vel
          metus. Vivamus sed tellus ante.
        </p>
        <p>
          Sed felis urna, malesuada sit amet enim id, mattis vehicula est. Donec
          auctor pharetra magna et imperdiet. Praesent lectus sem, euismod id
          dignissim sed, aliquam vel ante. Morbi commodo diam sed lorem cursus,
          sodales pulvinar elit vulputate. Vestibulum condimentum, orci nec
          lobortis aliquam, lorem nisi porta risus, vel mollis enim leo a
          turpis. Quisque vestibulum interdum dolor, vel vestibulum tortor
          porttitor eget. Nunc ac urna eget neque volutpat consequat elementum
          eu lacus. Praesent finibus porta diam, vel maximus ex auctor et.
          Mauris nec orci pellentesque, commodo libero a, suscipit augue.
          Pellentesque vulputate ante diam, et sodales odio tristique eget. Nam
          sollicitudin vehicula interdum. Cras nunc augue, lobortis vel ipsum
          sit amet, porta aliquet nibh. In lectus erat, congue congue nisl nec,
          ultricies consectetur tellus.
        </p>
      </div>
    </div>
  );
};

export default About;
