import React from 'react';
import { Container, Card, CardBody, Row, Col, Modal, ModalBody, ModalHeader } from 'reactstrap';
import nanoid from 'nanoid';
import { assign, get } from 'lodash';
import { AwesomeButton } from "react-awesome-button";
import TechStackList from '../datas/tech-stack-list';
import '../styles/icons.sass';


interface Stack extends React.Props<any> {
  stack: any
}

interface TechStackState {
  modalOpen: boolean
}

class SingleStack extends React.Component<Stack, any> {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <>
        <Card className="shadow-hover">
          <CardBody>
            <div className="dib w-100 tc animated fadeIn">
              <div className="animated zoomIn">
                { this.props.stack.icon }
              </div>
            </div>
          </CardBody>
        </Card>

      </>
    )
  }
}

const techStacks = TechStackList.map(stack => {
  return assign(stack, { _key: nanoid(6) });
});

class TechStack extends React.Component<any, TechStackState> {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.toggleModalOpen = this.toggleModalOpen.bind(this);
  }

  toggleModalOpen() {
    console.log(this.state)
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  render() {
    return(
      <>
        <Container className="mv5">
          <h2 className="tc roboto-condensed">Tech Stack</h2>
          <Row>
            <Col lg="2" xl="3"></Col>
            <Col md="12" lg="8" xl="6">
              <p className="tc gray dib ph4 roboto">
                J'utilise les outils qui allient performance et simplicité.
                Il est primordiale de faire le bon choix pour être productif, ainsi, avoir de meilleur resultat.
              </p>
            </Col>
            <Col lg="2" xl="3"></Col>
          </Row>
          <div className="tc roboto">Voici les technologies que j'utilise principalement :</div>
          <Row>
            {
              techStacks
              .filter(stack => stack.icon)
              .map(stack => 
                <Col className="mv3" xs="6" sm="6" md="4" lg="3" xl="2" key={stack._key}>
                  <SingleStack stack={stack} />
                </Col>
              )
            }
            <Col className="mv3" xs="6" sm="6" md="4" lg="3" xl="2">
              <div className="h-100 flex items-center justify-center">
                <AwesomeButton
                  type="secondary"
                  size="medium"
                  onPress={this.toggleModalOpen}
                >
                  Voir tout
                </AwesomeButton>
              </div>
            </Col>
          </Row>
        </Container>
        <Modal isOpen={this.state.modalOpen} toggle={this.toggleModalOpen} className="modal-dialog-centered modal-lg">
          <ModalHeader toggle={this.toggleModalOpen}><h2 className="tc roboto-condensed">Teck Stack</h2></ModalHeader>
          <ModalBody>
            <small className="db tc roboto gray">Voici la liste des outils que j'ai utilisé :</small><br />
            <ul className="ph2">{
              techStacks.map(stack => 
                <li className="dib ph3 pv1 mr2 mb2 ba br-pill bg-light-gray b--moon-gray">{stack.name}</li>
              )
            }</ul>
          </ModalBody>
        </Modal>
      </>
    )
  }
};

export default TechStack;