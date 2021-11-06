import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Container } from 'reactstrap';
import IPageProps from '../interfaces/page';

import { LinePlot } from './contents/LinePlot';
import { PiePlot } from './contents/PiePlot';
import { BarPlot } from './contents/BarPlot';
// import { Chart } from './contents/ApexChart';


const HomePage: React.FunctionComponent<IPageProps> = props => {
    return (
        <div className="App">
            <Container>
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
                    {/* <CardBody>
                        <ApexChart />
                    </CardBody> */}
                </Card>
            </Container>
            <div className='text-center text-dark'>
                <br/>
                <p>
                    パスワードの変更の場合 <Link to="/changePassword">here</Link>.
                </p>
                <p>
                    ログアウトは<Link to='/logout'>こちらをクリックしてください</Link>
                </p>
            </div>
        </div>
    );
}

export default HomePage;