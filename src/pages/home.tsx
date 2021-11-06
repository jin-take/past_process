import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Container } from 'reactstrap';
import IPageProps from '../interfaces/page';

import { LinePlot } from './contents/LinePlot';
import { PiePlot } from './contents/PiePlot';
import { BarPlot } from './contents/BarPlot';
// import { Chart } from './contents/ApexChart';

import ActivityLogs from "./dashboard/ActivityLogs"

const HomePage: React.FunctionComponent<IPageProps> = props => {
    return (
        <div>
            <div>
                <ActivityLogs />
            </div>

            <div className="App">
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
        </div>
    );
}

export default HomePage;