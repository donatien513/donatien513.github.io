import React from 'react';
import { Container, Card, CardBody, Row, Col, Modal, ModalBody, ModalHeader } from 'reactstrap';
import nanoid from 'nanoid';
import { assign, get } from 'lodash';
import { AwesomeButton } from "react-awesome-button";
import TechStackList from '../datas/tech-stack-list';
import lang from '../lang';
import '../styles/icons.sass';


interface SingleStackProps extends React.Props<any> {
  stack: any
}

interface SingleStackState extends React.Props<any> { }


class SingleStack extends React.Component<SingleStackProps, SingleStackState> {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return(
      <>
        <Card className="border-0">
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

const NUMBER_OF_BYTE = 6;
const techStacks = TechStackList.map(stack => {
  return assign(stack, { _key: nanoid(NUMBER_OF_BYTE) });
});

interface TechStackProps { }

interface TechStackState {
  modalOpen: boolean
}

class TechStack extends React.Component<TechStackProps, TechStackState> {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this._toggleModalOpen = this._toggleModalOpen.bind(this);
  }

  private _toggleModalOpen() {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  public render() {
    return(
      <>
        <Container className="mv5">
          <h2 className="tc roboto-condensed">Tech Stack</h2>
          <Row>
            <Col lg="2" xl="3"></Col>
            <Col md="12" lg="8" xl="6">
              <p className="tc gray dib ph4 roboto">
                {lang.techStackChoice}
              </p>
            </Col>
            <Col lg="2" xl="3"></Col>
          </Row>
          <div className="tc roboto">{lang.toolsIUse} :</div>
          <Row>
            {
              techStacks
              .filter(stack => stack.icon)
              .map(stack => 
                <Col className="mv3" xs="6" sm="6" md="4" lg="3" xl="3" key={stack._key}>
                  <SingleStack stack={stack} />
                </Col>
              )
            }
          </Row>
          <div className="h-100 flex items-center justify-center">
            <AwesomeButton
              type="secondary"
              size="medium"
              onPress={this._toggleModalOpen}
            >
              Voir tout
            </AwesomeButton>
          </div>
        </Container>
        <Modal isOpen={this.state.modalOpen} toggle={this._toggleModalOpen} className="modal-dialog-centered modal-lg">
          <ModalHeader toggle={this._toggleModalOpen}>Teck Stack</ModalHeader>
          <ModalBody>
            <small className="db tc roboto gray">{lang.techStackUsed} :</small><br />
            <ul className="ph2">{
              techStacks.map(stack => 
                <li className="dib ph3 pv1 mr2 mb2 ba br-pill bg-light-gray b--moon-gray" key={stack._key}>{stack.name}</li>
              )
            }</ul>
          </ModalBody>
        </Modal>
      </>
    );
  }
};

export default TechStack;
