import React, { useEffect, useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { Button, FormGroup, Input, Spinner, Card, CardBody, Container } from 'reactstrap';
import AuthContainer from '../../components/AuthContainer';
import ErrorText from '../../components/ErrorText';
import { auth } from '../../config/firebase';
import logging from '../../config/logging';
import IPageProps from '../../interfaces/page';
import queryString from 'querystring';

import { LinePlot } from '../contents/LinePlot';
import { PiePlot } from '../contents/PiePlot';
import { BarPlot } from '../contents/BarPlot';

export const ActivityLogs: React.FC = () => {
    return (
        // <p>'Hello, World!';</p>
        <Card className='bg-white text-dark'>
            <CardBody className='w-20 h-10'>
                <PiePlot />
            </CardBody>
            <CardBody>
                <BarPlot />
            </CardBody>
            <CardBody>
                <LinePlot />
            </CardBody>
        </Card>
    );
}

export default ActivityLogs;