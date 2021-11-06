import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import AuthContainer from '../../components/AuthContainer';
import { auth } from '../../config/firebase';
import logging from '../../config/logging';
import IPageProps from '../../interfaces/page';
import { Card, CardBody, Container, CardHeader, CardFooter, CardTitle, CardText, Row, Col } from 'reactstrap';

const LogoutPage: React.FunctionComponent<IPageProps> = props => {
    const history = useHistory();

    const Logout = () => {
        auth.signOut()
        .then(() => history.push('/login'))
        .catch(error => logging.error(error));
    }

    return (
        <div>
            <CardHeader tag="h2" className="text-center bg-dark mh-100" >
                Past Process
            </CardHeader>
            
            <br /><br />

            <Row>
                <Col
                className="bg-black"
                md={{
                    offset: 3,
                    size: 6
                }}
                sm="12"
                >
                {/* ログインコンテンツ */}
                    <CardBody>
                        <h2 className="text-dark text-center">ログアウト</h2>
                        <CardTitle tag="h5" className="text-dark text-center">
                            ログアウトをしますか？
                        </CardTitle>

                        <br />
                        <Row>
                            <Col
                            className="bg-white"
                            sm="3"
                            xs="6"
                            >
                            </Col>

                            <Col
                            className="bg-white"
                            sm="3"
                            xs="6"
                            >
                                <Button 
                                    color="danger" 
                                    // className="mr-2" 
                                    onClick={() => history.goBack()}
                                    size="lg"
                                    block
                                >
                                    Cancel
                                </Button>
                            </Col>

                            <Col
                            className="bg-white"
                            sm="3"
                            >
                                <Button 
                                    color="info" 
                                    // className="mr-2" 
                                    onClick={() => Logout()}
                                    size="lg"
                                    block
                                >
                                    Logout
                                </Button>
                            </Col>
                        </Row>
                        
                        
                    </CardBody>
                </Col>
            </Row>

            
        </div>
    );
}

export default LogoutPage;