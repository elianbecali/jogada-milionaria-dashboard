import React from 'react';
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
} from '@fortawesome/free-solid-svg-icons';
import {
  Col,
  Row,
  Button,
  Dropdown,
  Card,
  Form,
  InputGroup,
} from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget } from '../components/Widgets';
import { GeneralInfoForm } from '../components/Forms';

import LogoPNG from '../assets/img/logo.png';

export default () => {
  return (
    <div className='py-4'>
      {/* <InputGroup>
        <InputGroup.Text>
          <FontAwesomeIcon icon={faSearch} />
        </InputGroup.Text>
        <Form.Control type='text' placeholder='Search' />
      </InputGroup> */}
      {/* <Form.Control /> */}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={LogoPNG} />
        <Card.Body>
          <div className='d-flex align-items-center'>
            <div>
              <Card.Text>5.0</Card.Text>
            </div>
            <div>
              <FontAwesomeIcon icon={faStar} className='me-2 text-warning' />
            </div>
            <div>
              <Card.Text>17°</Card.Text>
            </div>
            <div>
              <FontAwesomeIcon icon={faFire} className='me-2 text-danger' />
            </div>
          </div>
          <Card.Title>ANTIRED - Plano Anual</Card.Title>
          <Card.Text>
            Descubra o produto que irá revolucionar sua vida no mercado de...
          </Card.Text>
          <Button variant='secondary'>Ver Produto</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
