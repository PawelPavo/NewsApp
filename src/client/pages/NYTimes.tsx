import * as React from 'react';
import Navbar from '../components/NavBar'


const NYTimes: React.FC<INYTimesProps> = () => {

    return (
        <>
            <Navbar />
            <div className="container">
                <h1>NY Times</h1>
            </div>
        </>
    )
}

export interface INYTimesProps { };

export default NYTimes;