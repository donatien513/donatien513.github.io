import React from 'react';
import Typed from 'react-typed';
import axios from 'axios';
import { AwesomeButton } from "react-awesome-button";
import ReCAPTCHA from "react-google-recaptcha";
import { Row, Container, Col, Input, Form, Spinner, Alert } from 'reactstrap';

interface EmailMeProps { };

interface EmailMeState {
  email: string,
  message: string,
  sending: boolean,
  sent: boolean,
  error: boolean
};

class EmailMe extends React.Component<EmailMeProps, EmailMeState> {
  recaptchaResponse: string = "";

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      message: "",
      sending: false,
      sent: false,
      error: false
    };
    this.send = this.send.bind(this);
    this.recaptchaChange = this.recaptchaChange.bind(this);
  }

  async send($event) {
    $event.preventDefault();
    try {
      this.setState({ sending: true });
      await axios({
        method: 'POST',
        headers: {
          'x-recaptcha-response': this.recaptchaResponse
        },
        data: {
          sender: this.state.email,
          message: this.state.message
        },
        url: 'https://contact-me-flow.donatien513.now.sh/send',
      });
      this.setState({ sending: false, sent: true });
    } catch (err) {
      this.setState({
        sending: false,
        error: true
      });
    }
  }

  recaptchaChange(key) {
    this.recaptchaResponse = key;
  }

  public render() {
    return(
      <>
        <Container className="mv5">
          <h2 className="tc roboto-condensed">Me contacter</h2>
          <Row>
            <Col lg="4" xl="4"></Col>
            <Col lg="4" xl="4">
              <div className="tc roboto solid mb4">
                Vous pouvez m'ecrire sur : <a className="blue" href="mailto:donatiennambinintsoa@gmail.com">donatiennambinintsoa@gmail.com</a>&nbsp;
                ou directement avec le formulaire ci-dessous:
              </div>
              <Form onSubmit={this.send}>
                <Input onChange={(e) => this.setState({ email: e.target.value })} type="text" className="w-100 shadow mv2" placeholder="Votre adresse email" />
                <Input onChange={(e) => this.setState({ message: e.target.value })} type="textarea" className="w-100 shadow mv2" placeholder="Votre message" />
                <div className="tc">
                  <div className="centered dib mv4">
                    <ReCAPTCHA
                      size="normal"
                      className="center"
                      sitekey="6Lcfub0UAAAAALkCAkuZnKhUzBYiVpExjUDH-sDJ"
                      onChange={this.recaptchaChange}
                    />
                  </div>
                  <AwesomeButton type="secondary">
                    { this.state.sending ? <Spinner size="sm" color="secondary" /> : "Envoyer" }
                  </AwesomeButton>
                </div>
                <div className="mv4">
                  {this.state.error &&
                    <Alert color="danger">
                      Votre message n'a pas pu être envoyé
                    </Alert>
                  }
                </div>
              </Form>
            </Col>
            <Col lg="4" xl="4"></Col>
          </Row>
        </Container>
      </>
    );
  }
};

export default EmailMe;
