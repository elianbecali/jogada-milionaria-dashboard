import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import { Card, Collapse, Button, Row, Col } from '@themesberg/react-bootstrap';

// BETFAIR
// 2,88
// ACIMA DE 3,5 CARTÕES NA PARTIDA

// REAL MADRID X AL-HILAL

// FAVBET
// 1,78
// ACIMA DE 3,5 CARTÕES NA PARTIDA

// REAL MADRID X AL-HILAL

export default ({ data }) => {
  console.log('data :', data);
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <div className='d-flex justify-content-between p-3'>
        <b>{data.title}</b>
        <Button
          variant='success'
          onClick={() => setOpen(!open)}
          aria-controls='example-collapse-text'
          aria-expanded={open}
        >
          Lucro: +{data.value}%
        </Button>
      </div>
      <Collapse in={open}>
        <div id='example-collapse-text' className='p-3 bg-light'>
          <>
            {data.bet?.map((b, index) => (
              <div key={index}>
                <b>{b.casaDeAposta}</b>
                <div>{b.odss}</div>
                <div>{b.aposta}</div>
                <div>{b.partida}</div>
                <br />
              </div>
            ))}
          </>
          <Row>
            <Col className='d-flex flex-column justify-content-center align-items-center'>
              <b>INVESTIDO</b>
              <div>{data.invested}</div>
            </Col>
            <div
              style={{
                backgroundColor: '#333',
                width: '.1px',
                height: '100px',
              }}
            />
            <Col className='d-flex flex-column justify-content-center align-items-center'>
              <b>RETORNOS</b>
              <div>{data.refund}</div>
            </Col>
          </Row>
        </div>
      </Collapse>
    </Card>
  );
};
