import * as React from 'react';
import Navbar from '../components/NavBar'


const Home: React.FC<IHomeProps> = () => {

    return (
        <>
            <Navbar />
            <div className="container">
                <h1>HOME</h1>
            </div>
        </>
    )
}

export interface IHomeProps { };

export default Home;