import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxOpen,
  faCartArrowDown,
  faChartPie,
  faChevronDown,
  faClipboard,
  faCommentDots,
  faFileAlt,
  faPlus,
  faRocket,
  faStore,
  faStar,
  faFire,
  faSearch,
  faCalculator,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  Col,
  Row,
  Button,
  Dropdown,
  Card,
  Form,
  Modal,
  InputGroup,
  Badge,
  Stack,
  Collapse,
} from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget } from '../components/Widgets';
import { GeneralInfoForm } from '../components/Forms';

import LogoPNG from '../assets/img/logo.png';

export default () => {
  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => setShowDefault(false);

  return (
    <>
      <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className="h6 text-center">
            CALCULADORA ANTIRED
          </Modal.Title>
          <Button variant="close" aria-label="Close" onClick={handleClose} />
        </Modal.Header>
        <Modal.Header className="d-flex flex-column justify-content-center">
          <Modal.Title className="h6 text-center">
            GEORGIA - ESPANHA
          </Modal.Title>
          Data do evento: 08/09/2023 ÀS 13:00 HS
        </Modal.Header>
        <Modal.Body>
          <Modal.Title className="h6 text-center">
            QUANTO VOCE QUER APOSTAR
          </Modal.Title>
          <Row>
            <Col>
              <div className="d-flex align-items-center">
                <label>INVESTIR</label>
                <Form.Control type="number" />
              </div>
            </Col>
            =
            <Col>
              <div className="d-flex align-items-center">
                <label>RETORNA</label>
                <Form.Control className="bg-success text-secondary" />
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            I Got It
          </Button>
          <Button
            variant="link"
            className="text-gray ms-auto"
            onClick={handleClose}
          >
            Close
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
