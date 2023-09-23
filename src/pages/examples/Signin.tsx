
import React from "react";
import toast, { Toaster } from 'react-hot-toast';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Button, Container, InputGroup } from '@themesberg/react-bootstrap';
import { useMutation } from 'react-query';


import BgImage from "../../assets/img/illustrations/signin.svg";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import { Routes } from "../../routes";


const SignIn = () => {
  const { updateUser } = useAuth();

  async function postLogin(email: string) {
    const response = await api.post('/sales/login', { email });

    return response?.data;
  }

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: postLogin,
    onSuccess(data) {
      setTimeout(() => {
        updateUser(data)
        window.location.pathname = Routes.TopOperations.path
      }, 2000);
    },
  })

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const email = (event.target as any).email.value;

    toast.promise(
      mutateAsync(email),
      {
         loading: 'Verificando seu email...',
         success: <b>Login realizado com sucesso!</b>,
         error: (err) => <b>{err?.response?.data?.message}</b>,
       }
     );
  }

  return (
    <main>
      <Toaster />

      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Logue na nossa plataforma</h3>
                </div>
                <Form className="mt-4" onSubmit={handleSubmit}>
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Seu Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope as any} />
                      </InputGroup.Text>
                      <Form.Control autoFocus name="email" required type="email" placeholder="exemplo@gmail.com" />
                    </InputGroup>
                  </Form.Group>
                  
                  <Button variant="primary" type="submit" className="w-100" disabled={isLoading}>
                    {isLoading ? 'Carregando...' : 'Login'}
                  </Button>
                </Form>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default SignIn