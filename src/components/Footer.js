
import React from "react";
import moment from "moment-timezone";
import { Row, Col, Card, OverlayTrigger, Tooltip, Image, Button } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faDownload, faRocket } from "@fortawesome/free-solid-svg-icons";
import BS5Logo from "../assets/img/technologies/bootstrap-5-logo.svg";
import ReactLogo from "../assets/img/technologies/react-logo.svg";
import LaravelLogo from "../assets/img/technologies/laravel-logo.svg";
import GitHubButton from 'react-github-btn';
import { Link } from 'react-router-dom';
import { Routes } from "../routes";

export default (props) => {
  const currentYear = moment().get("year");

  return (
    <div>
      <footer className="footer section py-5">
        <Row>
          <Col xs={12} lg={6} className="mb-4 mb-lg-0">
          
          </Col>
          <Col xs={12} lg={6}>
            <ul className="list-inline list-group-flush list-group-borderless text-center text-xl-right mb-0">
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="/top-operations">
                  Inicio
                </Card.Link>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="/statistics">
                  Estatísticas
                </Card.Link>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="/calculator">
                  Calculadora
                </Card.Link>
              </li>
            </ul>
          </Col>
        </Row>
      </footer>
    </div>
  );
};
