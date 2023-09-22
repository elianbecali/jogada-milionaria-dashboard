import React from 'react';
import {
  Card,
} from '@themesberg/react-bootstrap';


import { api } from '../services/api';
import { useQuery } from 'react-query';
import { format } from 'date-fns';

const topOperations = [
  {
    title: 'BETANO & BETFAIR',
    state: 'SP',
    createdAt: '24/02/2023 13:12',
    value: '47,17',
  },
  {
    title: 'PIN-UP & BETANO',
    state: 'SP',
    createdAt: '25/02/2023 14:30',
    value: '32,45',
  },
  {
    title: 'LEOVEGAS & FAVBET',
    state: 'MG',
    createdAt: '26/02/2023 09:55',
    value: '55,78',
  },
  {
    title: 'FAVBET & PARIMATCH',
    state: 'RO',
    createdAt: '27/02/2023 18:20',
    value: '12,34',
  },
  {
    title: 'PARIMATCH & BETANO',
    state: 'SP',
    createdAt: '28/02/2023 11:10',
    value: '67,89',
  },
];

export interface TopOperation {
  id: string
  game: string
  local: string
  classification: string
  house1: string
  house2: string
  team1: string
  team2: string
  description_team1: string
  description_team2: string
  profit: number
  is_top: boolean
  date: string
  created_at: string
  updated_at: string
}


export default () => {

  async function fetchTopOperations() {
    try {
      const response = await api.get<TopOperation[]>('/tips', { params: { topOperations: true } })

      return response.data;
    } catch (error) {
      return []
    }
  }

  const { data } = useQuery('top-operations', { 
    queryFn: fetchTopOperations,
   })

  return (
    <>
      <div className='py-4'>
        <h5>Top Operações</h5>
        <Card border='light' className='shadow-sm hover'>
          {data?.map((op, index) => (
            <Card.Body key={index}>
              <div className='d-flex align-items-center justify-content-between border-bottom border-light pb-3'>
                <div>
                  <div className='d-flex'>
                    <span className='p-3 mx-3 bg bg-danger'>SP</span>
                    <div>
                      <h6>{op.house1.toLocaleUpperCase()} & {op.house2.toLocaleUpperCase()}</h6>
                      <div className='small card-stats'>{format(new Date(op.date), 'dd/MM/yyyy HH:mm')}</div>
                    </div>
                  </div>
                </div>
                <div>
                  <Card.Link
                    href='#'
                    className='text-primary fw-bold text-success'
                  >
                    + {op.profit}%
                  </Card.Link>
                </div>
              </div>
            </Card.Body>
          ))}
        </Card>
      </div>
    </>
  );
};
