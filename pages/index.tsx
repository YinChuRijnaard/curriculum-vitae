import type { NextPage } from "next";
import Head from "next/head";

import { Hero } from "../components/Hero";
import { Intro } from "../components/Intro";
import { Contact } from "../components/Contact";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";
import { Education } from "../components/Education";
import { Languages } from "../components/Languages";
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
        <Intro />
        <Contact />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Languages />
        <Footer />
      </main>
    </>
  );
};

export default Home;
