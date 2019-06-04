import React from 'react'

const NavBar = (props) => {
    return (
        <div>

            <nav className="navbar navbar-default navbar-fixed-top indigo">
                <ul>
                    <li className="brand-logo center">Test Your Memory with Cartoons</li>
                    <li className="brand-logo right">Score: {props.score}</li>
                </ul>
            </nav>
            <div className="">
                <h5>Click on the cartoons, but never the same one twice.</h5>
                
                <h5>Click on all 12 to win!</h5>
            </div>


        </div>
    )
}

export default NavBar;