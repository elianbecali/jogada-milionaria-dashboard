import React from 'react';
import { Nav, Tab } from '@themesberg/react-bootstrap';

import Collapse from './components/Collapse';

const BET_NAMES = [
  'BETANO',
  'BET365',
  'BETFAIR',
  'PARIMATCH',
  'PINUP',
  '22BET',
  '888SPORT',
  'BETWARRIOR',
  'POCKERSTAR',
  'BETSSON',
  'BETNACIONAL',
  'LEOVEGAS',
];

const BETS = [
  {
    name: 'BETANO',
    title: 'OPER 01 - 12/02/2023 - 11:00 HS',
    bet: [
      {
        casaDeAposta: 'BETSSON',
        odds: 1.92,
        aposta: 'Acima de 3,5 cartões na partida',
        partida: 'LILLE X STRASBOURG',
      },
      {
        casaDeAposta: 'BETFAIR',
        odds: 2.6,
        aposta: 'Abaixo de 3,5 cartões na partida',
        partida: 'LILLE X STRASBOURG',
      },
    ],
    invested: 100,
    refund: 110,
  },
  {
    name: 'BETANO',
    title: 'OPER 01-02 - 91/09/2023 - 16:00 HS',
    bet: [
      {
        casaDeAposta: 'BETSSON',
        odds: 1.92,
        aposta: 'Acima de 3,5 cartões na partida',
        partida: 'LILLE X STRASBOURG',
      },
      {
        casaDeAposta: 'BETFAIR',
        odds: 2.6,
        aposta: 'Abaixo de 3,5 cartões na partida',
        partida: 'LILLE X STRASBOURG',
      },
    ],
    invested: 1234,
    refund: 2345,
  },
  {
    name: 'BETANO',
    title: 'OPER 01-03 - 1/09/2023 - 16:00 HS',
    bet: [
      {
        casaDeAposta: 'BETSSON',
        odds: 1.92,
        aposta: 'Acima de 3,5 cartões na partida',
        partida: 'LILLE X STRASBOURG',
      },
      {
        casaDeAposta: 'BETFAIR',
        odds: 2.6,
        aposta: 'Abaixo de 3,5 cartões na partida',
        partida: 'LILLE X STRASBOURG',
      },
    ],
    invested: 100,
    refund: 130,
  },
  {
    name: 'BET365',
    title: 'OPER 02 - 12/02/2023 - 11:00 HS',
    bet: [
      {
        casaDeAposta: 'PARIMATCH',
        odds: 1.92,
        aposta: 'Acima de 3,5 cartões na partida',
        partida: 'LILLE X STRASBOURG',
      },
      {
        casaDeAposta: 'BETFAIR',
        odds: 2.6,
        aposta: 'Abaixo de 3,5 cartões na partida',
        partida: 'LILLE X STRASBOURG',
      },
    ],
    invested: 1020,
    refund: 1100,
  },
  {
    name: 'BET365',
    title: 'OPER 02-02 - 13/02/2023 - 4:00 HS',
    bet: [
      {
        casaDeAposta: 'PARIMATCH',
        odds: 1.92,
        aposta: 'Acima de 3,5 cartões na partida',
        partida: 'LILLE X STRASBOURG',
      },
      {
        casaDeAposta: 'BETFAIR',
        odds: 2.6,
        aposta: 'Abaixo de 3,5 cartões na partida',
        partida: 'LILLE X STRASBOURG',
      },
    ],
    invested: 300,
    refund: 400,
  },
  {
    name: 'BETFAIR',
    title: 'OPER 03 - 12/02/2023 - 11:00 HS',
    bet: [
      {
        casaDeAposta: 'BETFAIR',
        odds: 1.92,
        aposta: 'Acima de 3,5 cartões na partida',
        partida: 'LILLE X STRASBOURG',
      },
      {
        casaDeAposta: 'PARIMATCH',
        odds: 2.6,
        aposta: 'Abaixo de 3,5 cartões na partida',
        partida: 'LILLE X STRASBOURG',
      },
    ],
    invested: 1211,
    refund: 2255,
  },
  {
    name: 'PARIMATCH',
    title: 'OPER 04 - 12/02/2023 - 11:00 HS',
    bet: [
      {
        casaDeAposta: 'BETFAIR',
        odds: 1.92,
        aposta: 'Acima de 3,5 cartões na partida',
        partida: 'LILLE X STRASBOURG',
      },
      {
        casaDeAposta: 'BETSON',
        odds: 2.6,
        aposta: 'Abaixo de 3,5 cartões na partida',
        partida: 'LILLE X STRASBOURG',
      },
    ],
    invested: 1100,
    refund: 1210,
  },
  {
    name: 'PARIMATCH',
    title: 'OPER 04-02 - 12/02/2023 - 11:00 HS',
    bet: [
      {
        casaDeAposta: 'BETFAIR',
        odds: 1.92,
        aposta: 'Acima de 3,5 cartões na partida',
        partida: 'LILLE X STRASBOURG',
      },
      {
        casaDeAposta: 'BETSON',
        odds: 2.6,
        aposta: 'Abaixo de 3,5 cartões na partida',
        partida: 'LILLE X STRASBOURG',
      },
    ],
    invested: 300,
    refund: 350,
  },
  {
    name: 'PARIMATCH',
    title: 'OPER 04-03 - 12/02/2023 - 11:00 HS',
    bet: [
      {
        casaDeAposta: 'BETFAIR',
        odds: 1.92,
        aposta: 'Acima de 3,5 cartões na partida',
        partida: 'LILLE X STRASBOURG',
      },
      {
        casaDeAposta: 'BETSON',
        odds: 2.6,
        aposta: 'Abaixo de 3,5 cartões na partida',
        partida: 'LILLE X STRASBOURG',
      },
    ],
    invested: 350,
    refund: 450,
  },
  {
    name: 'PARIMATCH',
    title: 'OPER 04-04 - 12/02/2023 - 11:00 HS',
    bet: [
      {
        casaDeAposta: 'BETFAIR',
        odds: 1.92,
        aposta: 'Acima de 3,5 cartões na partida',
        partida: 'LILLE X STRASBOURG',
      },
      {
        casaDeAposta: 'BETSON',
        odds: 2.6,
        aposta: 'Abaixo de 3,5 cartões na partida',
        partida: 'LILLE X STRASBOURG',
      },
    ],
    invested: 450,
    refund: 650,
  },
];

export default () => {
  //
  return (
    <div className='py-5'>
      <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
        <Nav variant='pills'>
          {BET_NAMES.map((bet, index) => (
            <div key={index}>
              <Nav.Item>
                <Nav.Link eventKey={bet} className='bg-secondary'>
                  {bet}
                </Nav.Link>
              </Nav.Item>
            </div>
          ))}
        </Nav>

        {BETS.map((bet) => (
          <Tab.Content key={bet.id}>
            <Tab.Pane eventKey={bet.name}>
              <Collapse data={bet} />
            </Tab.Pane>
          </Tab.Content>
        ))}
      </Tab.Container>
    </div>
  );
};
