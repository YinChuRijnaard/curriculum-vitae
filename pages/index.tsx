import type { NextPage } from "next";
import Head from "next/head";

import { Hero } from "../components/Hero";
import { Contact } from "../components/Contact";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Education } from "../components/Education";
import { Footer } from "../components/Footer";

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

      <main className="border-8 border-neutral-600 md:px-32">
        <Hero />
        <Contact />
        <Skills />
        <Experience />
        <Education />
        <Footer />
      </main>
    </>
  );
};

export default Home;
