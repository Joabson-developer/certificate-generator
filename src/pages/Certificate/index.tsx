import React, { useRef } from "react";

// Components
import { Container, Row, Stack as Flex } from "react-bootstrap";
import { Text, HR, ImageContainer, Image, Tag, Download } from "./style";

// Assets
import { Logo, BABY } from "../../assets";
import { GoDesktopDownload } from "react-icons/go";

// Helpers
import { dateToString, exportPDF, store, useQuery } from "../../helpers";

export function Certificate() {
  const main = useRef(document.createElement("main"));

  const {
    name,
    gender,
    birthday,
    city,
    nameFather,
    nameMother,
    dateOfThePresentation,
  } = useQuery() || store.get();

  return (
    <Container
      as="main"
      fluid
      className={`position-relative certificate color-default ${
        gender === "M" ? "bg-male" : "bg-female"
      }`}
      ref={main}
    >
      <Text.H1 className="text-center font-matura mb-5">
        Certificado de Apresentação
      </Text.H1>
      <Text.P className="font-great-vibes text-justify mb-5 mt-10">
        Certificamos que{" "}
        <span className={gender === "M" ? "color-male" : "color-female"}>
          {name}.
        </span>
        {gender === "M" ? "Nascido" : "Nascida"} no dia {dateToString(birthday)}
        , na cidade de {city}. {gender === "M" ? "Filho" : "Filha"} de
        {nameFather} e {nameMother}, foi{" "}
        {gender === "M" ? "apresentado" : "apresentada"} ao Senhor Jesus Cristo,
        conforme a palavra de Deus em Lucas 2:22.
      </Text.P>

      <Row className="mt-5">
        <Flex className="col-5 align-items-center mt-5">
          <HR />

          <Text.SPAN size={24} className="font-great-vibes">
            Pr. Ananias Martins de Almeida
          </Text.SPAN>

          <Text.SPAN size={18} className="font-lobster-two">
            Pastor Local
          </Text.SPAN>
        </Flex>

        <Flex className="col-7 justify-content-center">
          <Text.SPAN
            size={28}
            className="font-lobster-two line-height-10 text-center"
          >
            Feira da Mata - BA{" "}
            <Text.SPAN size={32} className="font-moolboran mt-4">
              {dateToString(dateOfThePresentation)}
            </Text.SPAN>
          </Text.SPAN>

          <Text.P size={12} className="text-center font-lobster-two m-0 p-0">
            E, cumprindo-se os dias da purificação dela, segundo a lei de
            Moisés, o levaram a Jerusalém, para o apresentarem ao Senhor - Lucas
            2:22
          </Text.P>
        </Flex>
      </Row>

      <ImageContainer className="top-0 start-0 end-0 p-4">
        <Image
          src={BABY[gender].babe_1}
          alt="Imagem de um bebê recém-nascido"
          size={11}
        />

        <Image
          src={Logo}
          alt="Logotipo da igreja"
          size={7}
          className="opacity-14"
        />

        <Image
          src={BABY[gender].babe_2}
          alt="Imagem de um bebê com mais de 1 ano de idade"
          size={15}
        />
      </ImageContainer>

      <ImageContainer className="bottom-0 start-0 end-0 p-4">
        <Image
          src={BABY[gender].clothing}
          alt="Imagem de uma roupinha de bebê"
          size={11}
        />

        <Tag size={11}>
          <Image src={BABY[gender].tag} alt="Imagem de uma tag" />

          <Text.SPAN size={24} className="font-lobster-two">
            {name.split(" ")[0]}
          </Text.SPAN>
        </Tag>

        <Image
          src={BABY[gender].carriage}
          alt="Imagem de um carrinho de bebê"
          size={15}
        />
      </ImageContainer>

      <Download
        className="btn btn-dark"
        onClick={(e) => exportPDF(e, main.current, name)}
      >
        <GoDesktopDownload className="pe-none" />
      </Download>
    </Container>
  );
}
