import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Container } from 'reactstrap';
import IPageProps from '../interfaces/page';

import { LinePlot } from './contents/LinePlot';
import { PiePlot } from './contents/PiePlot';
import { PiePlotForm } from './contents/PiePlotForm';
import { BarPlot } from './contents/BarPlot';
// import { Chart } from './contents/ApexChart';


const HomePage: React.FunctionComponent<IPageProps> = props => {
    return (
        <div className="App">
            <PiePlotForm />
            <Container>
                <div className='bg-white text-dark'>
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
                </div>
                <Card className='bg-black text-white'>
                    <CardBody>
                        <p>
                            パスワードの変更の場合 <Link to="/changePassword">here</Link>.
                        </p>
                        <p>
                            ログアウトは<Link to='/logout'>こちらをクリックしてください</Link>
                        </p>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
}

export default HomePage;
