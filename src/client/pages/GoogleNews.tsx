import * as React from 'react';
import Navbar from '../components/NavBar'


const GoogleNews: React.FC<IGoogleNewsProps> = () => {

    return (
        <>
            <Navbar />
            <div className="container">
            <h1 className="mt-5 text-center border border-left-0 border-right-0 page-title">Google News</h1>

            </div>
        </>
    )
}

export interface IGoogleNewsProps { };

export default GoogleNews;