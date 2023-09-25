import React, { useEffect, useState } from 'react';
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
import { useQuery } from 'react-query';
import { api } from '../services/api';
import { isAxiosError } from 'axios';
import { format } from 'date-fns';

type Odd = {
  id: string;
  value: string;
}

const TipsPremium = () => {
  const [showItemModal, setShowItemModal] = useState<TTipsPremium.TypeItemResponse | null>(null);
  const handleClose = () => setShowItemModal(null);

  const [amountForBet, setAmountForBet] = useState('100');
  const [amountForOperate, setAmountForOperate] = useState({
    odd1: 0,
    odd2: 0,
  });
  const [odd1, setOdd1] = useState({} as Odd);
  const [odd2, setOdd2] = useState({} as Odd);
  const [probability, setProbability] = useState({
    odd1: 0,
    odd2: 0,
  });
  const [lucro, setLucro] = useState({
    odd1: 0,
    odd2: 0
  });

  const { data: tips } = useQuery({
    queryKey: ['tips-premium'],
    queryFn: async () => {
      try {
        const { data } = await api.get<TTipsPremium.GetTipsResponse>('/tips');

        const formattedData = data.map(item => ({
          ...item,
          dateFormatted: format(new Date(item.date), 'dd/MM/yyyy HH:mm')
        }))

        return formattedData; 
      } catch (error) {
        return [];
      }
    }
  })

  function onChangeOdd(odd: { value: string, id: string }, type: 1 | 2) {
    if (type === 1) {
      setOdd1(odd)
    } else {
      setOdd2(odd)
    }
  }
  
  // const handleCalculate = () => {
    //TODO: Faltando "valor a operar, lucro e resultado"

    useEffect(() => {
      const sum = (1 / parseFloat(odd1.value)) + (1 / parseFloat(odd2.value));

      const Op01 = ((1 / parseFloat(odd1.value)) / sum) * 100;
      const Op02 = ((1 / parseFloat(odd2.value)) / sum) * 100;
  
      setProbability({odd2: Op02, odd1: Op01});
      
      const inv01 = (parseFloat(amountForBet) * Op01) / 100;
      const inv02 = (parseFloat(amountForBet) * Op02) / 100;
  
      setAmountForOperate({ odd2: inv02, odd1: inv01 });
  
      const lucro1 = (inv01 * Number(odd1.value));
      const lucro2 = (inv02 * Number(odd2.value));

      setLucro({ odd1: lucro1, odd2: lucro2 });
    }, [odd1, odd2, amountForBet])

    


    // Update state with the calculated values
    // setTotalInvested('');
    // setValue01('');
    // setValue02('');
    // setValue03('');
  // };

  return (
    <>
      <Modal as={Modal.Dialog} centered show={!!showItemModal} onHide={handleClose}>
        <Modal.Header className="d-flex flex-column justify-content-center bg-light">
          <Modal.Title className="h6 text-center">
            {showItemModal?.team1} - {showItemModal?.team2}
          </Modal.Title>
          Data do evento: {showItemModal?.dateFormatted}
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
                placeholder="INVESTIR 100"
                value={amountForBet}
                onChange={(event) => setAmountForBet(event.target.value)}
              />

              <span className="icon icon-sm">
                <FontAwesomeIcon icon={faEquals as any} />
              </span>

              <Form.Control
                className="bg-success text-white fw-bold custom-input"
                placeholder={`RETORNA R$ ${lucro.odd1.toFixed(2)}`}
                disabled
              />
            </div>
            <div className="text-center my-5">
              <span className="text-with-dash fs-6">RESULTADO FINAL</span>
              <FinalResultItem odd={odd1.value} house="1" profit={probability.odd1.toFixed(2)} value={'R$ '+amountForOperate.odd1.toFixed(2)} />
              <FinalResultItem odd={odd2.value} house="2" profit={probability.odd2.toFixed(2)} value={'R$ '+amountForOperate.odd2.toFixed(2)} />
              <div className="d-flex justify-content-between m-3">
                <FinalResultSubItem label="Apostas" value={`R$ ${amountForBet}`} />
                <FinalResultSubItem label="Voltar" value={`R$ ${((lucro.odd1) - Number(amountForBet)).toFixed(2)}`} />
                <FinalResultSubItem
                  label="Lucro Certo"
                  value={<span className="text-success">{((100 * (lucro.odd1 - Number(amountForBet))) / Number(amountForBet)).toFixed(2)} %</span>}
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
      {tips?.map(tip => (
        <Card className='my-4' key={tip.id}>
        <div className="d-flex justify-content-between p-3 align-items-center bg-light">
          <div className="d-flex justify-content-center align-items-center">
            <Button variant="text">
              <FontAwesomeIcon icon={faPlusCircle as any} />
            </Button>

            <h5>{tip.game} – {tip.local} – {tip.classification}</h5>
          </div>

          <h5>{tip.dateFormatted}</h5>
        </div>
        <Collapse in={true}>
          <div id="example-collapse-text">
            <div className="p-3 bg-light">
              <Row>
                <Col xs={10}>
                  <div>
                    <div>{tip.house1}</div>
                    <div>{tip.house2}</div>
                  </div>
                  <br />
                  <div>
                    <div>{tip.team1}</div>
                    <div>{tip.team2}</div>
                  </div>
                  <br />
                  <div>
                    <div>{tip.description_team1}</div>
                    <div>{tip.description_team2}</div>
                  </div>
                </Col>
                <Col>
                  Odds 01:
                  <Form.Control
                    required type="number"
                    placeholder="Ex: 80"
                    value={odd1?.id === tip.id ? odd1.value : ''}
                    onChange={(e) => onChangeOdd({ value: e.target.value, id: tip.id }, 1)} />
                  Odds 02:
                  <Form.Control
                    required type="number"
                    placeholder="Ex: 80"
                    value={odd2?.id === tip.id ? odd2.value : ''}
                    onChange={(e) => onChangeOdd({ value: e.target.value, id: tip.id }, 2)} />
                </Col>
              </Row>
            </div>
            <div className="d-flex justify-content-between align-items-center bg-white m-1">
              <Button variant="success" disabled className="m-1">
                <i>{tip.profit}% LUCRO GARANTIDO</i>
              </Button>
              <Button
                variant="secondary"
                className="m-1"
                disabled={!(odd1.id === tip.id && odd2.id === tip.id)}
                onClick={() => setShowItemModal(tip)}
              >
                <FontAwesomeIcon icon={faCalculator as any} className="me-2" />{' '}
                Calcular
              </Button>
            </div>
          </div>
        </Collapse>
      </Card>
      ))}
    </>
  );
};

const FinalResultItem = ({ odd, house, profit, value }: any) => {
  return (
    <>
      <div className="d-flex gap-3 m-3">
        <Form.Group>
          <Form.Label>Casa {house}</Form.Label>
          <Form.Control className="bg-info text-white fw-bold" value={odd} />
        </Form.Group>
        <span className="icon icon-sm icon-transform-rotate">
          <FontAwesomeIcon icon={faPlus as any} />
        </span>
        <Form.Group>
          <Form.Label>Apostas</Form.Label>
          <Form.Control className="text-black fw-bold" value={value} />
        </Form.Group>
        <span className="icon icon-sm">
          <FontAwesomeIcon icon={faEquals as any} />
        </span>
        <Form.Group>
          <Form.Label>%</Form.Label>
          <Form.Control
            className="bg-light text-black fw-bold"
            value={profit}
          />
        </Form.Group>
      </div>
    </>
  );
};

const FinalResultSubItem = ({ label, value }: any) => {
  return (
    <>
      <div>
        <div>{label} </div>
        <div className="fw-bold">{value}</div>
      </div>
    </>
  );
};

export default TipsPremium