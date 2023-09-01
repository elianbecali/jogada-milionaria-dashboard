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
} from '@fortawesome/free-solid-svg-icons';
import {
  Col,
  Row,
  Card,
  Button,
  Dropdown,
  Table,
  Form,
} from '@themesberg/react-bootstrap';
import {
  faAngleDown,
  faAngleUp,
  faHome,
  faChartArea,
  faChartBar,
  faChartLine,
  faFlagUsa,
  faFolderOpen,
  faGlobeEurope,
  faPaperclip,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { ChoosePhotoWidget, ProfileCardWidget } from '../components/Widgets';
import { GeneralInfoForm } from '../components/Forms';

import Profile3 from '../assets/img/team/profile-picture-3.jpg';

const TABLE_DATA = [
  {
    operation: 'Operação #1',
    odd: 0,
    probability: 0,
    valueToOperate: 0,
  },
  {
    operation: 'Operação #2',
    odd: 0,
    probability: 0,
    valueToOperate: 0,
  },
  {
    operation: 'Operação #3',
    odd: 0,
    probability: 0,
    valueToOperate: 0,
  },
];

export default (props) => {
  // const { icon, iconColor, category, title, period, percentage } = props;
  // const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  // const percentageColor = percentage < 0 ? 'text-danger' : 'text-success';
  const Content = ({ value, subtitle }) => {
    return (
      <>
        <Card border='light' className='shadow-sm'>
          <Card.Body>
            <div className='d-flex justify-content-between'>
              <div className=''>
                <h5>{value}</h5>
                <h3 className='mb-1'>{subtitle}</h3>
              </div>
              <div className='d-flex justify-content-center align-items-center'>
                <span className='icon icon-md bg-secondary rounded-circle p-3'>
                  <FontAwesomeIcon icon={faHome} />
                </span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  };

  return (
    <>
      <div className='py-4'>
        <Row>
          <Col>
            <Content value={'BRL 00.0'} subtitle='Resultado' />
          </Col>
          <Col>
            <Content value={'00.0%'} subtitle='Lucro' />
          </Col>
        </Row>
        <Row className='my-4'>
          <Col>
            <Card border='light' className='shadow-sm'>
              <Table>
                <thead className='thead-light'>
                  <tr>
                    <th className='border-0'>OPERAÇÕES #</th>
                    <th className='border-0'>ODDS </th>
                    <th className='border-0'>% PROBABILIDADE</th>
                    <th className='border-0'>VALOR A OPERAR</th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE_DATA.map((data) => (
                    <tr>
                      <td className='border-1'>
                        <div>
                          <span className='h6'>{data.operation}</span>
                        </div>
                      </td>
                      <td className='border-0 fw-bold'>
                        <Form.Control
                          required
                          type='number'
                          placeholder='Ex: 80'
                          value={data.odd}
                        />
                      </td>
                      <td className='border-0 text-success'>
                        <span className='fw-bold'>% {data.probability}</span>
                      </td>
                      <td className='border-0 text-success'>
                        <span className='fw-bold'>
                          R$ {data.valueToOperate}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
        <Row className='my-4'>
          <Col>
            <span className='text-primary'>
              Informe o valor disponível para a operação:
            </span>
            <Form.Control required type='number' placeholder='Ex: 80' />
            <div className='my-2'>
              <Button variant='secondary'>Calcular</Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
