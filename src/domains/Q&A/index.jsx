import React from "react";
import QAAccordion from "./componets/index.jsx";
import { Stack } from "@mui/material";
import { useLanguage } from "../../hooks/useLanguage.jsx";
import text from "../../Assets/text.json";
import { FirstSection } from "../../Components/FirstSection/index.jsx";

const QeA = () => {
    const { language } = useLanguage();
    const data = [
        {
            Q: text.QEA.Accordion[0].questions[language],
            A: [
                {
                    id: 1,
                    description: [
                        "Pode levar mais amigos ou familiares que desejar para a viagem ao Brasil sem nenhum problema, contudo terá que indicar quantas pessoas no espaço de mensagem na confirmação de presença para melhor gestão de turismo. Somente convidados atenderão ao Casamento. Somente convidados terão os benefícios do transfer gratuito (vagas limitadas), isto é: quem não é convidado poderá usufruir do transfer, porém pagando uma taxa.",
                    ],
                },
            ],
        },
        {
            Q: "Quanto poderia esperar gastar por dia com custos de alimentação no Brasil?",
            A: [
                {
                    id: 2,
                    description: [
                        "Depende muito do seu perfil de viajante. Existe um site que é muito interessante para comparar custo de vida em diversas cidades do mundo: Numbeo.",
                        "Exemplo: Búzios é a cidade mais cara da Região dos Lagos, e restaurantes em Búzios tende a ser mais caro do que o Rio de Janeiro. Rio de Janeiro é mais caro que Belo Horizonte. Cracóvia tem um custo de vida mais similar a Armação de Búzios do que Rio de Janeiro. Já os preços do Rio de Janeiro são mais altos de Quito, ainda que a diferença nos restaurantes não seja percebida tão alta.",
                    ],
                },
            ],
        },
        {
            Q: "Todos os passeio são gratuitos?",
            A: [
                {
                    id: 3,
                    description: [
                        "Não, nenhum passeio turístico é gratuito. O que vamos facilitar é informação e planejamento de viagem (como uma agência de viagem) sem nenhum custo adicional comissionado por ser organizado completamente de forma independente através de fornecedores de confiança e transporte seguro.",
                        "Vamos oferecer apenas um transfer gratuito do Rio de Janeiro até Búzios como cortesia para nossos convidados em um horário específico definido posteriormente com a confirmação de presença dos convidados.",
                        "Fique atento ao seu e-mail depois da confirmação de presença para poder aproveitar os pacotes de viagem que estamos organizando especialmente para nossos convidados, incluindo transfer seguro, passeios turístico e muito mais!",
                    ],
                },
            ],
        },
        {
            Q: "E se meu vôo chegar depois do transfer gratuito?",
            A: [
                {
                    id: 4,
                    description: ["Temos algumas opções:"],
                    lista: [
                        "Transfer do Casamento: Nós contratamos uma empresa especializada que possui horários fixos de transporte para Búzios direto do Aeroporto do Rio de Janeiro. Recomendamos muito a empresa por questão de segurança e credibilidade, além de que a empresa terá o nosso contato direto. Mais informação sobre a empresa em Destination Wedding.",
                        "Outros Transfers: Não conhecemos, portanto não podemos indicar outros transfers que saem direto do Aeroporto. Porém, existem outras empresas que fazem esse serviço, contudo, fique atento a falsos transfers e taxis no Rio de Janeiro.",
                        "Transfer do Hotel: Alguns hotéis em Búzios oferecem o serviço de transfer do Aeroporto Galeão, no Rio de Janeiro, até o Hotel. Geralmente acaba ficando mais caro, mas é uma opção mais segura.",
                        "Ônibus 1001: É possível comprar bilhetes de ônibus no próprio Aeroporto Galeão, no Rio de Janeiro, da empresa Viação 1001 que tem como destino final a Rodoviária de Búzios. Da Rodoviária seria necessário chamar um Uber para ir até o Hotel.",
                    ],
                },
            ],
        },
        {
            Q: "Onde compro passagem de vôos para o Rio de Janeiro?",
            A: [
                {
                    id: 5,
                    description: [
                        "O Rio de Janeiro possui dois aeroportos: Galeão (GIG) e Santos Dumont (SDU). O Santos Dumont é somente para vôos domésticos e o Galeão inclui vôos internacionais. O transfer gratuito sairá do Galeão (GIG).",
                        "Basta buscar rotas e preços através de sites buscadores de vôos como Momondo, Kayak ou Skyscanner. É possível comprar direto dos buscadores, mas também pode comprar diretamente pelos sites das companhias aéreas, como as que tem vôo direto da Europa para o Rio de Janeiro Galeão (e o tempo de duração de vôo):",
                    ],
                    lista: [
                        "Londres (LHR) - Rio de Janeiro (GIG): British Airway | 11h40",
                        "Madrid (MAD) - Rio de Janeiro (GIG): Iberia | 10h50",
                        "Lisbon (LIS) - Rio de Janeiro (GIG): TAP |  09h55",
                        "Porto (OPO) - Rio de Janeiro (GIG): TAP | 10h20",
                        "Paris (CDG) - Rio de Janeiro (GIG): Air France | 11h20",
                        "Amsterdam (AMS) - Rio de Janeiro (GIG): KLM | 11h55",
                        "Munique (MUC) - Rio de Janeiro (GIG): Lufthansa | 11h50",
                        "Roma (FCO) - Rio de Janeiro (GIG): ITA Airways | 12h15",
                        "Dubai (DXB) - Rio de Janeiro (GIG): Emirates | 14h20",
                        "Panamá (PTY) - Rio de Janeiro (GIG): Copa Airlines | 07h05",
                        "Bogotá (BOG) -Rio de Janeiro (GIG): Avianca | 06h20",
                        "Lima (LIM) - Rio de Janeiro (GIG): Latam | 05h05",
                        "Nova Yorque (JFK) - Rio de Janeiro (GIG): American Airline e Delta | 09h45",
                        "Miami (MIA) - Rio de Janeiro (GIG): American Airline | 08h07",
                        "Atlanta (ATA) - Rio de Janeiro (GIG): Delta | 09h45",
                        "Huston (IAH) - Rio de Janeiro (GIG): United Airlines | 10h15",
                    ],
                    additionalInfo: [
                        "Outra opção é fazer a conexão no aeroporto internacional de Guarulhos (GRU) em São Paulo que possui muito mais opções de conexões e, muitas vezes, possui preços mais competitivos. Para fazer o vôo doméstico de São Paulo - Guarulhos (GRU) para Rio de Janeiro - Galeão (GIG) pode ser feito via Latam ou Gol. O Aeroporto de São Paulo (GRU) é um aeroporto grande e geralmente as companhias aéreas pedem para retirar as malas chegando em São Paulo para fazer o check-in e drop-off das malas novamente para vôos domésticos - o que acaba gastando muito tempo.",
                        "Outra questão importante com relação aos vôos de São Paulo é porque algumas conexões são feitas de São Paulo - Congonhas (CGH) que é outro aeroporto que atende a cidade de São Paulo ou mesmo Viracopos (VCO) que é em Campinas - não atende a cidade de São Paulo. Existem ônibus gratuitos das companhias aéreas para fazer a conexão entre Guarulhos (GRU) e Congonhas (CGH), porém, não recomendo fazer essa rota porque os ônibus saem a cada hora e pode haver trânsito. Além disso, o aeroporto de Congonhas só faz vôos domésticos para o aeroporto Santos Dumont no Rio de Janeiro (SDU).",
                    ],
                },
            ],
        },
        {
            Q: "Tem algum transfer do Aeroporto de Cabo Frio?",
            A: [
                {
                    id: 6,
                    description: [
                        "O Aeroporto de Cabo Frio é o mais próximo de Búzios e só recebe vôos de Belo Horizonte pela companhía aérea Azul e raramente alguns de São Paulo, mas não recebe vôos internacionais. Portanto, à princípio não é o nossa prioridade em fornecer transfer do Aeroporto de Cabo Frio, porém se houver muita demanda podemos orçar um valor mais próximo da data. De qualquer forma, um Uber (ou App 99) geralmente cobram em torno de R$100,00 para fazer o trajeto de Cabo Frio a Búzios (até região de Manguinhos ou Geribá).",
                    ],
                },
            ],
        },
        {
            Q: "Alguém poderia me dar uma carona de BH?",
            A: [
                {
                    id: 7,
                    description: ["Muitos convidados vão preferir sair de Belo Horizonte de carro e poderia dar carona dividindo custos. Fique atento ao seu e-mail e posteriormente será liberado um Grupo no WhatsApp específico para discutir essas logística."],
                },
            ],
        },
        {
            Q: "Gostaria de me hospedar em outro lugar que não está nas recomendações de Viagem, onde seriam os melhores lugares?",
            A: [
                {
                    id: 8,
                    description: [
                        "Nossas recomendaçōes neste site foram escolhidas atentamente levando em consideração o melhor custo-benefício (um preço justo, um lugar organizado e limpo, próximo de onde vale a pena ir, incluindo café da manhã). Contudo, claro que existem outras opções de pousadas legais mais em conta, hostel e hotéis até de mais luxo.",
                        "Vale lembrar que Búzios é uma cidade praiana, muito úmida e dependendo do lugar pode ter cheiro de mofo ou presença de insetos indesejáveis por causa do clima. Rio de Janeiro é uma cidade grande e, apesar de muito turística, pode haver lugares que pode ser perigoso. Lembre-se que os passeios sairão da Zona Sul.",
                        "Se ainda assim você querer se arriscar, recomendamos:",
                    ],
                    lista: [
                        "Búzios:",
                        "A região de Manguinhos próximo do Porto da Barra, um centro gastronômico bem legal na cidade. A praia de manguinhos é exclusiva para pesca local.",
                        "A região de Geribá próximo da praia. É a praia mais popular da península, sempre cheia, com muita vida, muitas opções de comida, bebida e atividades na água como SUP e Kayak.",
                        "Outras regiões: podem ser difícil de chegar porque a península é levemente montanhosa e muitas vezes sem asfalto e fica longe de onde será o evento.",
                        "Rio de Janeiro:",
                        "Zona Sul: Copacabana, Arpoador, Ipanema ou Leblon. Preferencialmente até três quadras da praia para manter a segurança.",
                        "Barra da Tijuca: próximo à praia da Barra pode ser interessante para quem quiser aproveitar as praias para surfar, curtir calmaria da Praia da Reserva e ir em outros passeios no Parque Nacional da Tijuca ou trilhas para a famosa Pedra do Telégrafo. Porém é uma região bem longe do centro, da Zona Sul e do aeroporto. Para fazer qualquer passeio turístico recomendamos ir com empresas de turismo local e não sozinhos.",
                        "É importante lembrar que há certas regiões no Rio de Janeiro que podem ser perigosas e a Zona Sul é mais turística e, portanto, monitorada com guardas e policiamento local. A Barra é mais residencial.",
                    ],
                },
            ],
        },
        {
            Q: "Preciso de Visto para ir ao Brasil?",
            A: [
                {
                    id: 9,
                    description: [
                        "Europeus e extrangeiros do Mercosul não precisam de visto para entrar no Brasil e ficar até 90 dias como turista. Para extrangeiros do Mercosul somente Identidade é suficiente, já as demais nacionaldiades é necessário o Passaporte para ser carimbado!",
                        "Somente passagem de volta e acomodação paga já serve como prova suficiente para entrar como turista no Brasil.",
                    ],
                },
            ],
        },
        {
            Q: "Preciso ter alguma vacina para entrar no Brasil?",
            A: [
                {
                    id: 10,
                    description: [
                        "Para viajar para o Brasil é obrigatório ter comprovante de vacinação completa contra COVID-19 para pessoas acima de 12 anos. Além disso é necessário confirmar com as autoridades do seu país, sendo recomendável a vacinação de Febre Amarela e Poliomielite (para crianças entre 3 meses a 6 anos).",
                    ],
                },
            ],
        },
        {
            Q: "Quanto custa uma passagem de avião da Europa para o Brasil?",
            A: [
                {
                    id: 11,
                    description: [
                        "Pela experiência da noiva, passagens de avião da Europa para o Rio de Janeiro podem variar bastante, mas se achar valores de €600 a €700 por trajeto, pode considerar como bom preço para comprar. As linhas aéreas mais em conta para viajar da Europa para o Brasil é a TAP, Latam e Ibéria. Contudo vale a pena pesquisar em outras companhías aéreas dependendo de onde for seu vôo de origem.",
                    ],
                },
            ],
        },
        {
            Q: "Quanto tempo é o mínimo de tempo de vôo entre a Europa e o Brasil?",
            A: [
                {
                    id: 12,
                    description: ["Em média, um vôo de Lisboa para o Rio de Janeiro é de 11 horas."],
                },
            ],
        },
        {
            Q: "Será fornecido um Transfer gratuito do Rio de Janeiro para Búzios?",
            A: [
                {
                    id: 13,
                    description: [
                        "Vamos fornecer um transfer gratuito com vagas limitadas do Aeroporto Galeão do Rio de Janeiro com direção à Armação de Búzios passando em uma das hospedagens recomendadas no site. A prioridade será para convidados estrangeiros. Mais informação será compartilhada posteriormente por e-mail, após a confirmação de presença.",
                    ],
                },
            ],
        },
        {
            Q: "Nossa recomendação da melhor rota para voar de/para Cracóvia",
            A: [
                {
                    id: 14,
                    description: ["Existem dois roteiros que podem ser a melhor opção e a escolha do noivo para ir ao Brasil."],
                    emprAir: ["KLM:"],
                    descriptionData: ["Cracóvia – Rio de Janeiro 09.05.2024"],
                    additionalInfo: [
                        "1ª parada: Cracóvia – Amsterdam (06:35 – 08:35; duração: 2h)",
                        "Parada 4h 15 min",
                        "2ª parada: Amsterdã – Rio de Janeiro (12h50 – 19h45; duração: 11h 55min)",
                        "Rio de Janeiro – Cracóvia 19.05.2024 (chegada a Cracóvia em 20.05.2024)",
                        "1ª parada: Rio de Janeiro – Amsterdã (21h55, 19.05.2024 – 14h25, 20.05.2024; duração: 11h 30 min)",
                        "Parada: 6h 10 min",
                        "2ª parada: Amsterdã – Cracóvia (20h35 – 22h25; duração: 1h 50 min)",
                        "Custo total por pessoa: cerca de 3 800 PLN",
                    ],
                    additionalInfoemprAir: ["Lufthansa"],
                    additionalInfodescriptionData: ["Cracóvia – Rio de Janeiro 09.05.2024"],
                    additionalInfodescription: [
                        "1ª parada: Cracóvia – Munique (06:00 – 07:20; duração: 1h 20 min)",
                        "Parada 4h 55 min",
                        "2ª parada: Munique – Rio de Janeiro (12h15 – 19h05; duração: 11h 50 min)",
                        "Rio de Janeiro – Cracóvia 19.05.2024 (chegada a Cracóvia em 20.05.2024",
                        "1ª parada: Rio de Janeiro – Munique (20h50, 19.05.2024 – 13h15, 20.05.2024; duração: 11h 25 min)",
                        "Parada: 8h 45 min",
                        "2ª parada: Munique – Cracóvia (22:00 – 23h20; duração: 1h 20 min)",
                        "Custo total por pessoa: cerca de 4 800 PLN",
                    ],
                },
            ],
        },
    ];


    return (
        <Stack width="100%" height="100%" mb={0}>
            <FirstSection title={text.Wedding.title[language]} subtitle={text.Wedding.subTitle[language]} paragraph1={text.Wedding.introP1[language]} paragraph2={text.Wedding.introP2[language]} />

            <QAAccordion data={data} />
        </Stack>
    );
};

export default QeA;
