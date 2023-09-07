import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faEquals,
  faCalculator,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  Col,
  Row,
  Button,
  Card,
  Form,
  Modal,
  Collapse,
} from '@themesberg/react-bootstrap';

export default () => {
  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => setShowDefault(false);

  const [valueReturn, setValueReturn] = useState(0);

  return (
    <>
      <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose}>
        <Modal.Header className="d-flex flex-column justify-content-center bg-light">
          <Modal.Title className="h6 text-center">
            GEORGIA - ESPANHA
          </Modal.Title>
          Data do evento: 08/09/2023 ÀS 13:00 HS
        </Modal.Header>
        <Modal.Body>
          <div>
            <Modal.Title className="h6 text-center">
              QUANTO VOCE QUER APOSTAR
            </Modal.Title>
            <br />
            <div className="d-flex gap-3">
              <Form.Control
                className="text-black fw-bold"
                type="number"
                placeholder="INVESTIR"
              />

              <span className="icon icon-sm">
                <FontAwesomeIcon icon={faEquals} />
              </span>

              <Form.Control
                className="bg-success text-white fw-bold custom-input"
                placeholder={`RETORNA          R$ ${valueReturn}`}
              />
            </div>
            <div className="text-center my-5">
              <span className="text-with-dash fs-6">RESULTADO FINAL</span>
              <FinalResultItem />
              <FinalResultItem />
              <div className="d-flex justify-content-between m-3">
                <FinalResultSubItem label="Apostas" value={`R$ 300`} />
                <FinalResultSubItem label="Voltar" value={`R$ 9.08`} />
                <FinalResultSubItem
                  label="Lucro Certo"
                  value={<span className="text-success">9.08 %</span>}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="link"
            className="text-gray ms-auto"
            onClick={handleClose}
          >
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
      <h6>Operação</h6>
      <Card>
        <div className="d-flex justify-content-between p-3 align-items-center bg-light">
          <div className="d-flex justify-content-center align-items-center">
            <Button variant="text">
              <FontAwesomeIcon icon={faPlusCircle} />
            </Button>

            <h5>FUTEBOL – VENEZUELA – SEGUNDA DIVISÃO</h5>
          </div>

          <h5>06/09/2023 ÀS 17:00 HS</h5>
        </div>
        <Collapse in={true}>
          <div id="example-collapse-text">
            <div className="p-3 bg-light">
              <Row>
                <Col xs={10}>
                  <div>
                    <div>EOVEGAS</div>
                    <div>BETWAY</div>
                  </div>
                  <br />
                  <div>
                    <div>CS MARITIMO DE LA GUAIRA</div>
                    <div>ATLETICO LA CRUZ</div>
                  </div>
                  <br />
                  <div>
                    <div>TIME 1 VENCE E EMPATE ANULA A APOSTA</div>
                    <div>TIME 2 VENCE E EMPATE ANULA A APOSTA</div>
                  </div>
                </Col>
                <Col>
                  Odds 01:
                  <Form.Control required type="number" placeholder="Ex: 80" />
                  Odds 02:
                  <Form.Control required type="number" placeholder="Ex: 80" />
                </Col>
              </Row>
            </div>
            <div className="d-flex justify-content-between align-items-center bg-white m-1">
              <Button variant="success" disabled className="m-1">
                <i>5,12% LUCRO GARANTIDO</i>
              </Button>
              <Button
                variant="secondary"
                className="m-1"
                onClick={() => setShowDefault(true)}
              >
                <FontAwesomeIcon icon={faCalculator} className="me-2" />{' '}
                Calcular
              </Button>
            </div>
          </div>
        </Collapse>
      </Card>
    </>
  );
};

const FinalResultItem = () => {
  return (
    <>
      <div className="d-flex gap-3 m-3">
        <Form.Group>
          <Form.Label>Casa 2</Form.Label>
          <Form.Control />
        </Form.Group>
        <span className="icon icon-sm icon-transform-rotate">
          <FontAwesomeIcon icon={faPlus} />
        </span>
        <Form.Group>
          <Form.Label>Apostas</Form.Label>
          <Form.Control />
        </Form.Group>
        <span className="icon icon-sm">
          <FontAwesomeIcon icon={faEquals} />
        </span>
        <Form.Group>
          <Form.Label>%</Form.Label>
          <Form.Control />
        </Form.Group>
      </div>
    </>
  );
};

const FinalResultSubItem = ({ label, value }) => {
  return (
    <>
      <div>
        <div>{label} </div>
        <div className="fw-bold">{value}</div>
      </div>
    </>
  );
};
