import React from 'react';
import Typed from 'react-typed';
import axios from 'axios';
import { AwesomeButton } from 'react-awesome-button';
import ReCAPTCHA from 'react-google-recaptcha';
import Reward from 'react-rewards';
import { Row, Container, Col, Input, Form, Spinner, UncontrolledAlert } from 'reactstrap';

axios.defaults.headers.post['Access-Control-Allow-Origin'] ='*';

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
  reward: Reward;
  recaptchaRef: React.RefObject<ReCAPTCHA> = React.createRef();

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
    $event.persist();
    this.setState({
      sending: false,
      sent: true,
      error: false,
      email: "",
      message: ""
    });
    try {
      this.setState({
        sending: true,
        sent: false,
        error: false,
      });
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
      this.setState({
        sending: false,
        sent: true,
        error: false,
        email: "",
        message: ""
      });
      this.reward.rewardMe();
      this.recaptchaRef.current.reset();
      $event.target.reset()
    } catch (err) {
      this.setState({
        sending: false,
        sent: false,
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
                <Input onChange={e => this.setState({ email: e.target.value })} type="text" className="w-100 shadow mv2" placeholder="Votre adresse email" />
                <Input onChange={e => this.setState({ message: e.target.value })} type="textarea" className="w-100 shadow mv2" placeholder="Votre message" />
                <div className="tc">
                  <div className="centered dib mv4">
                    <ReCAPTCHA
                      ref={this.recaptchaRef}
                      size="normal"
                      className="center"
                      sitekey="6Lcfub0UAAAAALkCAkuZnKhUzBYiVpExjUDH-sDJ"
                      onChange={this.recaptchaChange}
                    />
                  </div>
                  <Reward ref={ref => { this.reward = ref }} type="confetti" >
                    <AwesomeButton type="secondary">
                      { this.state.sending ? <Spinner size="sm" color="secondary" /> : "Envoyer" }
                    </AwesomeButton>
                  </Reward>
                </div>
                <div className="mv4">
                  {this.state.error &&
                    <UncontrolledAlert color="danger">
                      Votre message n'a pas pu être envoyé
                    </UncontrolledAlert>
                  }
                  {this.state.sent &&
                    <UncontrolledAlert color="success">
                      Votre message m'a bien été envoyé.
                    </UncontrolledAlert>
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
