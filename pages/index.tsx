import type { NextPage } from "next";
import Head from "next/head";

import { Hero } from "../components/Hero";
import { Contact } from "../components/Contact";
import { Skills } from "../components/Skills";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Curriculum Vitae: Yin Chu Rijnaard</title>
        <meta
          name="description"
          content="Curriculum vitae of Yin Chu Rijnaard"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-screen border-8 border-neutral-600">
        <Hero />
        <Contact />
        <Skills />
      </main>
    </>
  );
};

export default Home;
