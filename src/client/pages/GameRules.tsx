import * as React from 'react';
import Navbar from '../components/NavBar'
import { Link } from 'react-router-dom';

const GameRules: React.FC<IGameRulesProps> = () => {

    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="mt-5 text-center border border-left-0 border-right-0 page-title text-monospace">The Pathfinder Game Rules</h1>
                <div className="row text-monospace d-flex justify-content-center mt-5">
                    <div className="col">
                        <Link to="/pathfinder" style={{ textDecoration: 'none' }}>
                            <button className="btn btn-outline-secondary btn-block w-50 mx-auto">BACK TO GAME</button>
                        </Link>
                    </div>
                </div>
                <div className="row text-monospace mt-5">
                    <div className="col-6 text-center">
                        <h5 className="mb-5">The objective:</h5>
                        <p className="text-left">The objective of the game is very simple. Find the path to the top by clicking the squares. </p>
                        <p className="text-left">One tip I can give you is...don't click on the wrong squares, unless you have a great memory. </p>
                    </div>
                    <div className="col-6 text-center">
                        <h5 className="mb-5">The rules:</h5>
                        <p className="text-left">To start the game, find a ( &uarr; ) which marks the first correct square.</p>
                        <p className="text-left">Each correct square is touching one another either by a corner or a side - forming a path.</p>
                        <p className="text-left">Now, you must find the path to the top by correctly guessing the next square in the row above.</p>
                        <p className="text-left">The correct squares will change color to <span className="text-success">GREEN</span>, while incorrect squares will flash <span className="text-danger">RED</span>.</p>
                        <p className="text-left">... one more thing</p>
                        <p className="text-left">Every time you click the incorrect square, the path will reset, so I hope you are lucky and have outstanding memory.</p>

                    </div>
                </div>
                <h5 className="mt-5 text-center border border-left-0 border-right-0 text-monospace">Enjoy and may luck be ever in your favor!</h5>
            </div>
        </>
    )
}

export interface IGameRulesProps { };

export default GameRules;