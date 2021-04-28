import React from 'react'
import {Jumbotron, Col, Row} from 'reactstrap'
import {Link} from 'react-router-dom'


function Header () {
    return(
        <div>
            <Jumbotron >
                    <h1  className="display-3">Campsite Manager</h1>

                <Row>
                    <Col sm={{ size: 'auto', offset: 0 }}>
                        <Link to="/survey">
                            Survey
                        </Link>   
                    </Col>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <Link to="/manager" >
                            Manager
                        </Link>                        
                    </Col>
                </Row>
            </Jumbotron>

            


        </div>
    )
}

export default Header