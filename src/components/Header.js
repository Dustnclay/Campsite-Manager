import React from 'react'
import {Jumbotron, Col, Row} from 'reactstrap'
import {Link} from 'react-router-dom'


function Header () {
    return(
        <div>
            <Jumbotron >
                    <h1 className="display-3 d-flex justify-content-center">Campsite Manager</h1>

                <Row>
                    <Col >
                        <Link to="/survey"className="d-flex justify-content-center border border-primary p-2 m-4 bg-light">
                            Take A Survey
                        </Link>   
                    </Col>
                    <Col >
                        <Link to="/manager"className="d-flex justify-content-center border border-primary p-2 m-4 bg-light" >
                            View The Site Data
                        </Link>                        
                    </Col>
                </Row>
            </Jumbotron>

            


        </div>
    )
}

export default Header