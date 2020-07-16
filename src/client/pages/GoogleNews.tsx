import * as React from 'react';
import Navbar from '../components/NavBar'


const GoogleNews: React.FC<IGoogleNewsProps> = () => {

    return (
        <>
            <Navbar />
            <div className="container">
                <h1>Google News</h1>
            </div>
        </>
    )
}

export interface IGoogleNewsProps { };

export default GoogleNews;