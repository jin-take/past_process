// import React, { useEffect, useState } from 'react';
// import { RouteComponentProps, useHistory } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
// import AuthContainer from '../../components/AuthContainer';
// import ErrorText from '../../components/ErrorText';
// import { auth } from '../../config/firebase';
// import logging from '../../config/logging';
// import IPageProps from '../../interfaces/page';
// import queryString from 'querystring';
import { Row, Col, CardHeader, CardFooter } from 'reactstrap';
import { PiePlotForm } from '../contents/PiePlotForm';


import { LinePlot } from '../contents/LinePlot';
import { PiePlot } from '../contents/PiePlot';
import { BarPlot } from '../contents/BarPlot';
import { LinePlotExample } from '../contents/LinePlotExample';
import { PiePlotExample } from '../contents/PiePlotExample';
import { BarPlotExample } from '../contents/BarPlotExample';


export const ActivityLogs: React.FC = () => {
    return (
        <div>
            <CardHeader tag="h2" className="text-center bg-dark">
                Past Process
            </CardHeader>
            <br />
            <PiePlotForm />
            <br />
            <Card body className='bg-white text-dark'>
                <br></br>
                <h1 className='text-center bold'>Past Output</h1>
                <Row>
                    <Col
                    className="bg-white"
                    sm="4"
                    xs="6"
                    >
                    <CardBody className='w-20 h-10'>
                        <PiePlot />
                    </CardBody>
                    </Col>
                    <Col
                    className="bg-white"
                    sm="4"
                    xs="6"
                    >
                    <CardBody>
                        <BarPlot />
                    </CardBody>
                    </Col>
                    <Col
                    className="bg-white"
                    sm="4"
                    >
                    <CardBody>
                        <LinePlot />
                    </CardBody>
                    </Col>
                </Row>
            </Card>

            <br /><br />
            <Card  body className='w-3 bg-white text-dark'>
            <h1 className='text-center bold'>Past Input</h1>
                <Row>
                    <Col
                    className="bg-white"
                    sm="4"
                    xs="6"
                    >
                        
                        <CardBody className='w-20 h-10'>
                            <PiePlotExample />
                        </CardBody>
                    </Col>
                    <Col
                    className="bg-white"
                    sm="4"
                    xs="6"
                    >
                    <CardBody>
                        <BarPlotExample />
                    </CardBody>
                    </Col>
                    <Col
                    className="bg-white"
                    sm="4"
                    >
                    <CardBody>
                        <LinePlotExample />
                    </CardBody>
                    </Col>
                </Row>
            </Card>
            <br /><br />

            <CardFooter tag="h5" className="text-center bg-dark">
                <small>
                <br />
                    <p>パスワードを忘れた場合は<Link to="/forgotPassword">こちら</Link></p>
                <br />
                    <p>ログアウトする場合は<Link to="/logout">こちら</Link></p>
                </small>
            </CardFooter>


        </div>
    );
}

export default ActivityLogs;