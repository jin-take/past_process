import React from 'react';
import IPageProps from '../interfaces/page';


import ActivityLogs from "./dashboard/ActivityLogs";

const HomePage: React.FunctionComponent<IPageProps> = props => {
    return (
        <ActivityLogs />
    );
}

export default HomePage;