import React from 'react';
import { Nav, Tab } from '@themesberg/react-bootstrap';

import Collapse from './components/Collapse';

// const BET_NAMES = [
// 'BETANO',
// 'BET365',
// 'BETFAIR',
// 'PARIMATCH',
// 'PINUP',
// '22BET',
// '888SPORT',
// 'BETWARRIOR',
// 'POCKERSTAR',
// 'BETSSON',
// 'BETNACIONAL',
//  'LEOVEGAS',
// ];

const BETS = [
  {
    name: 'BETANO',
    value: '10,09',
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
    name: 'BET365',
    value: '10',
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
    name: 'BETFAIR',
    value: '9,09',
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
    value: '10,09',
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
];

export default () => {
  return (
    <div className='py-4'>
      <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
        <Nav variant='pills' className=''>
          {BETS.map((bet) => (
            <>
              <Nav.Item>
                <Nav.Link eventKey={bet.name} className='bg-secondary'>
                  {bet.name}
                </Nav.Link>
              </Nav.Item>
            </>
          ))}
        </Nav>
        {BETS.map((bet) => (
          <Tab.Content>
            <Tab.Pane eventKey={bet.name}>
              <Collapse data={bet} />
            </Tab.Pane>
          </Tab.Content>
        ))}
      </Tab.Container>
    </div>
  );
};
