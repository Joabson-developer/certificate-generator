import React, { useState } from "react";

import {
  Button,
  Container,
  Row,
  Col,
  Form,
  Stack as Flex,
  Navbar,
} from "react-bootstrap";

import { DataCertificate } from "../../@types/data-certificate";

import { Logo, Banner } from "../../assets";

import { generateCertificate, store } from "../../helpers";

export function Home() {
  const initialData: DataCertificate = store.get();

  const [data, setData] = useState(initialData);

  const newData = (newState: any) => {
    setData((prevState) => ({ ...prevState, ...newState }));
    store.set(data);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" className="mb-5">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={Logo}
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Gerador de Certificado
          </Navbar.Brand>
        </Container>
      </Navbar>

      <img
        src={Banner}
        alt=""
        aria-hidden={true}
        className="mx-auto d-block mb-3 img-100"
      />

      <Container>
        <Form>
          <Form.Group className="form-floating" controlId="nameChildren">
            <Form.Control
              type="text"
              placeholder="Nome da criança"
              value={data.name}
              onChange={(e) => newData({ name: e.target.value })}
            />
            <Form.Label>Nome da criança</Form.Label>
          </Form.Group>

          <Row className="align-items-center mt-4">
            <fieldset className="col-sm-12 col-md-6 col-lg-3">
              <legend className="col-form-label pt-0">Gênero</legend>

              <Flex
                direction="horizontal"
                gap={1}
                className="align-items-center"
              >
                <Form.Group controlId="male">
                  <Form.Check
                    type="radio"
                    name="gender"
                    label="Masculino"
                    value="M"
                    checked={data.gender === "M"}
                    onChange={(e) => newData({ gender: e.target.value })}
                  />
                </Form.Group>
                <Form.Group controlId="female">
                  <Form.Check
                    type="radio"
                    name="gender"
                    label="Feminino"
                    value="F"
                    checked={data.gender === "F"}
                    onChange={(e) => newData({ gender: e.target.value })}
                  />
                </Form.Group>
              </Flex>
            </fieldset>

            <Form.Group
              className="form-floating col-sm-12 col-md-6 col-lg-3 mt-sm-3 mt-md-0"
              controlId="city"
            >
              <Form.Control
                type="text"
                placeholder="Cidade nascimento"
                value={data.city}
                onChange={(e) => newData({ city: e.target.value })}
              />
              <Form.Label className="start-10px">Cidade nascimento</Form.Label>
            </Form.Group>

            <Col sm={12} md={6} lg={3} className="mt-3 mt-sm-3 mt-lg-0">
              <Form.Label className="mb-0">Data de nascimento</Form.Label>
              <Form.Control
                type="date"
                placeholder="Data de nascimento"
                value={data.birthday}
                onChange={(e) => newData({ birthday: e.target.value })}
              />
            </Col>

            <Col sm={12} md={6} lg={3} className="mt-3 mt-sm-3 mt-lg-0">
              <Form.Label className="mb-0">Data de apresentação</Form.Label>
              <Form.Control
                type="date"
                placeholder="Data de apresentação"
                value={data.dateOfThePresentation}
                onChange={(e) =>
                  newData({ dateOfThePresentation: e.target.value })
                }
              />
            </Col>
          </Row>

          <fieldset className="mb-3 mt-3">
            <legend className="col-form-label pt-0">Nome dos pais</legend>
            <Row>
              <Form.Group
                className="form-floating col-md-6 col-sm-12 mb-3"
                controlId="nameFather"
              >
                <Form.Control
                  type="text"
                  placeholder="Nome do pai"
                  value={data.nameFather}
                  onChange={(e) =>
                    newData({
                      nameFather: e.target.value,
                    })
                  }
                />
                <Form.Label className="start-10px">Nome do pai</Form.Label>
              </Form.Group>

              <Form.Group
                className="form-floating col-md-6 col-sm-12 mb-3"
                controlId="nameMother"
              >
                <Form.Control
                  type="text"
                  placeholder="Nome da mãe"
                  value={data.nameMother}
                  onChange={(e) =>
                    newData({
                      nameMother: e.target.value,
                    })
                  }
                />
                <Form.Label className="start-10px">Nome da mãe</Form.Label>
              </Form.Group>
            </Row>
          </fieldset>

          <Button
            variant="dark"
            className="w-sm-100"
            onClick={() => {
              store.set(data);
              generateCertificate(data);
            }}
          >
            Gerar certificado
          </Button>
        </Form>
      </Container>
    </>
  );
}
