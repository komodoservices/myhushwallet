import React from 'react'
import {Container, Row, Col} from 'reactstrap';

var footer = {
  backgroundColor: '#f5f5f5'
}

var longP = {
  wordWrap: 'break-word'
}

export default class ZFooter extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (      
      <div style={footer}>
        <br/>
        <Container>      
        <Row>
          <Col md="8">
            <p>MAKE SURE YOU ARE ON <b>WALLET.KOMODO.SERVICES</b></p>

            <p>Keys are validated client-side and do not leave your browser or network. You are responsible for keeping your own keys safe!!!</p>

            <p>Suggestions? <a href="mailto:hello@komodo.services">Contact us</a></p>          

            <p style={longP}>Donations are always welcome!<br/>
              <b>KMD</b>: <a href="https://explorer.komodo.services/addr/donationaddy/#donate">(donation address)</a><br/>
            </p>
          </Col>
          <Col md="4">
            <a href="https://komodo.services/">KomodoServices</a><br/>
            <a href="https://explorer.komodo.services/">Explorer</a><br/>
            <a href="http://config.komodo.services/">Config Generator</a><br/>
            <a href="http://paperwallet.komodo.services">Paperwallet</a><br/>
            <a href="https://github.com/komodoservices">Github</a><br/>
          </Col>
        </Row>
        </Container>
      </div>
    )
  }
}