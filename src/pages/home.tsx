import React from 'react';
import { Link } from 'react-router-dom';
// import { Card, CardBody, Container } from 'reactstrap';
import IPageProps from '../interfaces/page';

// import { LinePlot } from './contents/LinePlot';
// import { PiePlot } from './contents/PiePlot';
// import { BarPlot } from './contents/BarPlot';
// import { Chart } from './contents/ApexChart';

import ActivityLogs from "./dashboard/ActivityLogs";

const HomePage: React.FunctionComponent<IPageProps> = props => {
    return (
        <ActivityLogs />
    );
}

export default HomePage;