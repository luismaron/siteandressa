import { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import NavBar from "../components/navbar";
import styles from "../styles/contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { database } from "../services/firebase";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";

type FirebaseContacts = {
  instagram?: string;
  facebook?: string;
  whatsapp?: string;
  email?: string;
};

export const getStaticProps = async () => {
  const contactsRef = doc(database, "contacts", "Luhv5u1pOmJ0CdofoSON");
  let contacts: FirebaseContacts = {};
  const querySnapshot = await getDoc(contactsRef);
  if (querySnapshot.exists()) {
    var json = querySnapshot.data();
    contacts.instagram = json.instagram;
    contacts.email = json.email;
    contacts.whatsapp = json.whatsapp;
    contacts.facebook = json.facebook;
  }

  return {
    props: {
      contacts,
    },
  };
};

export function Contact({
  contacts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>Andressa Sakamoto Biscuit - Contato</title>
        <meta
          name="description"
          content="Contatos para orçamentos e redes sociais."
        />
        <meta name="keywords" content="instagram, facebook, email, whatsapp" />
      </Head>
      <NavBar contact={true} />
      <main className={styles.pgContent}>
        <h1>Meus Contatos</h1>
        <p>
          Gostou do meu trabalho? Me siga nas redes sociais e entre em contato
          comigo.
        </p>

        <div className={styles.socialMedias}>
          <Link href="https://wa.me/message/7XGERGQOUVV7G1">
            <a
              target="_blank"
              title="Abrir contato whatsapp"
              className="btn-social-media"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              {contacts.whatsapp}
            </a>
          </Link>

          <Link href={`https://www.instagram.com/${contacts.instagram}/`}>
            <a
              target="_blank"
              title="Acessar perfil no instagram"
              className="btn-social-media"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              {contacts.instagram}
            </a>
          </Link>
          <Link href={`https://www.facebook.com/${contacts.facebook}/`}>
            <a
              target="_blank"
              title="Acessar perfil facebook"
              className="btn-social-media"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
              {contacts.facebook}
            </a>
          </Link>
          <Link href={`mailto:${contacts.email}`}>
            <a
              target="_blank"
              title="Enviar email"
              className="btn-social-media"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
              {contacts.email}
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Contact;
