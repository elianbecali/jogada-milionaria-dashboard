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

export default (props) => {
  // const { icon, iconColor, category, title, period, percentage } = props;
  // const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  // const percentageColor = percentage < 0 ? 'text-danger' : 'text-success';

  const [totalInvested, setTotalInvested] = useState('');
  const [value01, setValue01] = useState('');
  const [value02, setValue02] = useState('');
  const [value03, setValue03] = useState('');

  const [Operation01, setOperation01] = useState(0);
  const [Operation02, setOperation02] = useState(0);
  const [Operation03, setOperation03] = useState(0);

  const [invested01, setInvested01] = useState(0);
  const [invested02, setInvested02] = useState(0);
  const [invested03, setInvested03] = useState(0);

  const [profit, setProfit] = useState(0);

  function onChangeOdd(e, id) {
    if (id === 0) setValue01(e.target.value);
    if (id === 1) setValue02(e.target.value);
    if (id === 2) setValue03(e.target.value);
  }

  function onChangeTotalInvested(e) {
    setTotalInvested(e.target.value);
  }

  const handleCalculate = () => {
    const sum = value03
      ? 1 / parseFloat(value01) +
        1 / parseFloat(value02) +
        1 / parseFloat(value03)
      : 1 / parseFloat(value01) + 1 / parseFloat(value02);

    const Op01 = (1 / parseFloat(value01) / sum) * 100;
    const Op02 = (1 / parseFloat(value02) / sum) * 100;
    const Op03 = value03 ? (1 / parseFloat(value03) / sum) * 100 : 0;

    setOperation01(Op01);
    setOperation02(Op02);
    setOperation03(Op03);

    const inv01 = (parseFloat(totalInvested) * Operation01) / 100;
    const inv02 = (parseFloat(totalInvested) * Operation02) / 100;
    const inv03 = value03 ? (parseFloat(totalInvested) * Operation03) / 100 : 0;

    setInvested01(inv01);
    setInvested02(inv02);
    setInvested03(inv03);

    const prof = inv01 * parseFloat(value01);
    setProfit(prof);

    // Update state with the calculated values
    setTotalInvested('');
    setValue01('');
    setValue02('');
    setValue03('');

    console.log(
      Operation01.toFixed(2),
      Operation02.toFixed(2),
      Operation03.toFixed(2)
    );
  };

  const TABLE_DATA = [
    {
      id: 0,
      operation: 'Operação #1',
      odd: value01,
      probability: Operation01,
      valueToOperate: invested01,
    },
    {
      id: 1,
      operation: 'Operação #2',
      odd: value02,
      probability: Operation02,
      valueToOperate: invested02,
    },
    {
      id: 2,
      operation: 'Operação #3',
      odd: value03,
      probability: Operation03,
      valueToOperate: invested03,
    },
  ];

  const Content = ({ value, subtitle }) => {
    return (
      <Card border="light" className="shadow-sm">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div className="">
              <h5>{value}</h5>
              <h3 className="mb-1">{subtitle}</h3>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <span className="icon icon-md bg-secondary rounded-circle p-3">
                <FontAwesomeIcon icon={faHome} />
              </span>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  };

  return (
    <>
      <div className="py-4">
        <Row>
          <Col>
            <Content value={'BRL 00.0'} subtitle="Resultado" />
          </Col>
          <Col>
            <Content value={profit} subtitle="Lucro" />
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <Card border="light" className="shadow-sm">
              <Table>
                <thead className="thead-light">
                  <tr>
                    <th className="border-0">OPERAÇÕES #</th>
                    <th className="border-0">ODDS </th>
                    <th className="border-0">% PROBABILIDADE</th>
                    <th className="border-0">VALOR A OPERAR</th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE_DATA.map((data, index) => (
                    <tr key={index}>
                      <td className="border-1">
                        <div>
                          <span className="h6">{data.operation}</span>
                        </div>
                      </td>
                      <td className="border-0 fw-bold">
                        <Form.Control
                          required
                          type="number"
                          placeholder="Ex: 80"
                          value={data.odd}
                          onChange={(e) => onChangeOdd(e, data.id)}
                        />
                      </td>
                      <td className="border-0 text-success">
                        <span className="fw-bold">
                          % {data.probability.toFixed(2)}
                        </span>
                      </td>
                      <td className="border-0 text-success">
                        <span className="fw-bold">
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
        <Row className="my-4">
          <Col>
            <span className="text-primary">
              Informe o valor disponível para a operação:
            </span>
            <Form.Control
              required
              type="number"
              placeholder="Ex: 80"
              value={totalInvested}
              onChange={onChangeTotalInvested}
            />
            <div className="my-2">
              <Button variant="secondary" onClick={handleCalculate}>
                Calcular
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
