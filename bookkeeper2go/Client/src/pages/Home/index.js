import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => {

    return(

        <div className='home'>
            
            <h1>GOT A BOOKEEPER?</h1>
            <h2>I CAN TAKE CARE OF THAT.</h2>
            <p>With 25 years of experience from payroll, full charge bookkeeping,
                tax preparation and quick books training. No more stress let us
                take care of the rest.
            </p>
            <Link as='link' to='/aboutme'><button className='learn' >Learn More</button></Link>
            </div>
    
    )
}


export default Home;