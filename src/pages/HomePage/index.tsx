import React, { useContext } from "react";
import { observer } from "mobx-react";
import {
  About,
  CallForm,
  Circles,
  Footer,
  Header,
  Hero,
  Languages,
  Questionnaire,
  QuestionsForm,
  Reasons,
  Reviews,
  Services,
  WorkSteps,
} from "@components";
import { AppContext, ThemeContext } from "@context";
import { themes } from "@models/themes";

export const HomePage = observer(() => {
  const { themeName } = useContext(ThemeContext);
  const {
    stores: { questionsStore },
  } = useContext(AppContext);

  return (
    <main
      style={{
        width: "100%",
        backgroundColor: themes[themeName].backgroundColor,
        color: themes[themeName].color,
        maxHeight: questionsStore.modalOpen ? "100vh" : "initial",
        overflowY: "hidden",
      }}
    >
      <Questionnaire />

      <Header />

      <Hero />

      <About />

      <Circles>
        <Services />

        <Reasons />

        <CallForm />
      </Circles>

      <WorkSteps />

      <Languages />

      <Reviews />

      <QuestionsForm />

      <Footer />
    </main>
  );
});
