import * as React from 'react';
import Navbar from '../components/NavBar'


const NYTimes: React.FC<INYTimesProps> = () => {

    return (
        <>
            <Navbar />
            <div className="container">
            <h1 className="mt-5 text-center border border-left-0 border-right-0 page-title">New York Times</h1>
            </div>
        </>
    )
}

export interface INYTimesProps { };

export default NYTimes;