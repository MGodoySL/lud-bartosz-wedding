import React from "react";
import QAAccordion from "./componets/index.jsx";
import { Stack } from "@mui/material";
import { useLanguage } from "../../hooks/useLanguage.jsx";
import text from "../../Assets/text.json";
import { FirstSection } from "../../Components/FirstSection/index.jsx";

const QeA = () => {
  const { language } = useLanguage();
  const data = [
    //1
    {
      Q: text.QEA.Accordion[0].questions[language],
      A: [
        {
          id: 1,
          description: [text.QEA.Accordion[0].answers[language]],
        },
      ],
    },
    //2
    //tentar por italico
    {
      Q: text.QEA.Accordion[1].questions[language],
      A: [
        {
          id: 2,
          description: [text.QEA.Accordion[1].answers[language]],
        },
        {
          description: [
            text.QEA.Accordion[1].answers3[language] +
              " " +
              text.QEA.Accordion[1].answers2[language],
          ],
        },
      ],
    },
    //3
    //tentar por negrito
    {
      Q: text.QEA.Accordion[2].questions[language],
      A: [
        { id: 3 },
        { description: [text.QEA.Accordion[2].answers[language]] },
        { description: [text.QEA.Accordion[2].answers2[language]] },
      ],
    },
    //4
    {
      Q: text.QEA.Accordion[3].questions[language],
      A: [
        {
          id: 4,
          description: [text.QEA.Accordion[3].answers[language]],
          lista: [
            text.QEA.Accordion[3].transfer[0][language],
            text.QEA.Accordion[3].transfer[1][language],
            text.QEA.Accordion[3].transfer[2][language],
            text.QEA.Accordion[3].transfer[3][language],
          ],
        },
      ],
    },
    //5
    {
      Q: text.QEA.Accordion[4].questions[language],
      A: [
        { id: 5 },
        { description: [text.QEA.Accordion[4].answers[language]] },
        { description: [text.QEA.Accordion[4].answers2[language]] },
        { description: [text.QEA.Accordion[4].answers3[language]] },
        { description: [text.QEA.Accordion[4].answers4[language]] },
      ],
    },
    //6
    {
      Q: text.QEA.Accordion[5].questions[language],
      A: [
        {
          id: 6,
          description: [text.QEA.Accordion[5].answers[language]],
        },
      ],
    },
    //7
    {
      Q: text.QEA.Accordion[6].questions[language],
      A: [
        {
          id: 7,
          description: [text.QEA.Accordion[6].answers[language]],
        },
      ],
    },
    //8
    {
      Q: text.QEA.Accordion[7].questions[language],
      A: [
        {
          id: 8,
        },
        { description: [text.QEA.Accordion[7].answers[language]] },
        { description: [text.QEA.Accordion[7].answer1[language]] },
        { description: [text.QEA.Accordion[7].answer2[language]] },

        {
          emprAir: [
            text.QEA.Accordion[7].answer4[language],
            text.QEA.Accordion[7].opcoesBuzios[0][language],
            text.QEA.Accordion[7].opcoesBuzios[1][language],
            text.QEA.Accordion[7].opcoesBuzios[2][language],
          ],
        },

        {
          emprAir: [
            text.QEA.Accordion[7].answer5[language],
            text.QEA.Accordion[7].opcoesRioDeJaneiro[0][language],
            text.QEA.Accordion[7].opcoesRioDeJaneiro[1][language],
          ],
        },
        { description: [text.QEA.Accordion[7].answer3[language]] },
      ],
    },
    //9
    {
      Q: text.QEA.Accordion[8].questions[language],
      A: [
        {
          id: 9,
        },
        { description: [text.QEA.Accordion[8].answers[language]] },
        { description: [text.QEA.Accordion[8].answers2[language]] },
      ],
    },
    //10
    {
      Q: text.QEA.Accordion[9].questions[language],
      A: [
        {
          id: 10,
          description: [text.QEA.Accordion[9].answers[language]],
        },
      ],
    },
    //11
    {
      Q: text.QEA.Accordion[10].questions[language],
      A: [
        {
          id: 11,
          description: [text.QEA.Accordion[10].answers[language]],
        },
      ],
    },
    //12
    {
      Q: text.QEA.Accordion[11].questions[language],
      A: [
        {
          id: 12,
          description: [text.QEA.Accordion[11].answers[language]],
        },
      ],
    },
    //13
    {
      Q: text.QEA.Accordion[12].questions[language],
      A: [
        {
          id: 13,
          description: [text.QEA.Accordion[12].answers[language]],
        },
      ],
    },
    //14
    {
      Q: text.QEA.Accordion[13].questions[language],
      A: [
        { description: text.QEA.Accordion[13].answers[language] },
        { id: 14 },
        { description: [text.QEA.Accordion[13].answer2[language]] },
        {
          description: [text.QEA.Accordion[13].flightKLM[0][language]],
        },
        {
          description: [text.QEA.Accordion[13].flightKLM[1][language]],
        },
        {
          description: [text.QEA.Accordion[13].flightKLM[2][language]],
        },

        { description: [text.QEA.Accordion[13].answer3[language]] },
        {
          description: [text.QEA.Accordion[13].flightLUFTHANSA1[0][language]],
        },
        {
          description: [text.QEA.Accordion[13].flightLUFTHANSA1[1][language]],
        },
        {
          description: [text.QEA.Accordion[13].flightLUFTHANSA1[2][language]],
        },
        {
          description: [text.QEA.Accordion[13].answer4[language]],
        },
      ],
    },
  ];

  return (
    <Stack width="100%" height="100%" mb={0}>
      <FirstSection
        title={text.QEA.titleP1[language]}
        subtitle={text.QEA.subTitle[language]}
        paragraph1={text.QEA.introP1[language]}
      />

      <QAAccordion data={data} />
    </Stack>
  );
};

export default QeA;
