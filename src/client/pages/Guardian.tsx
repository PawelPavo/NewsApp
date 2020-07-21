import * as React from 'react';
import Navbar from '../components/NavBar'


const Guardian: React.FC<IGuardianProps> = () => {

    return (
        <>
            <Navbar />
            <div className="container">
            <h1 className="mt-5 text-center border border-left-0 border-right-0 page-title">Guardian</h1>

            </div>
        </>
    )
}

export interface IGuardianProps { };

export default Guardian;