import * as React from 'react';
import Navbar from '../components/NavBar'


const Guardian: React.FC<IGuardianProps> = () => {

    return (
        <>
            <Navbar />
            <div className="container">
                <h1>Guardian</h1>
            </div>
        </>
    )
}

export interface IGuardianProps { };

export default Guardian;