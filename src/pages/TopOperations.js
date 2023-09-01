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
  Card,
  Image,
  ListGroup,
  ProgressBar,
  Col,
  Row,
  Button,
  Dropdown,
} from '@themesberg/react-bootstrap';
import {
  faAngleDown,
  faAngleUp,
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

import {
  CounterWidget,
  CircleChartWidget,
  BarChartWidget,
  TeamMembersWidget,
  ProgressTrackWidget,
  RankingWidget,
  SalesValueWidget,
  SalesValueWidgetPhone,
  AcquisitionWidget,
} from '../components/Widgets';

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

export default () => {
  return (
    <>
      <div className='py-4'>
        <h5>Top Operações</h5>
        <Card border='light' className='shadow-sm hover'>
          {topOperations.map((op, index) => (
            <Card.Body key={index}>
              <div className='d-flex align-items-center justify-content-between border-bottom border-light pb-3'>
                <div>
                  <div className='d-flex'>
                    <span className='p-3 mx-3 bg bg-danger'>{op.state}</span>
                    <div>
                      <h6>{op.title}</h6>
                      <div className='small card-stats'>{op.createdAt}</div>
                    </div>
                  </div>
                </div>
                <div>
                  <Card.Link
                    href='#'
                    className='text-primary fw-bold text-success'
                  >
                    + {op.value}%
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
