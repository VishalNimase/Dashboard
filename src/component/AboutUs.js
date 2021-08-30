import React from "react";
import LabelIcon from '@material-ui/icons/Label';
import './css/about.css';

const AboutUs = () => {
    return (
        <React.Fragment>
            <h1> About Us</h1>
            <div className="AboutusPageDiv">
                <div>
                    <h2> <LabelIcon color="grey" />  Our Objective </h2>
                    <div>To be a premier Project Solutions Provider company in the field of industrial Refrigeration & Air conditioning.</div>
                </div>
                <div>
                    <h2><LabelIcon />  Our Mission </h2>
                    <div>Achieving excellent innovative solutions leading to the execution of projects with superior latest technology, that are both precise and reliable.</div>
                </div>
            </div>
            <div className="AboutusPageDiv">
                <div>
                    <h2> <LabelIcon />  About Us </h2>
                    <div>We are a Global Projects Company in the field of Industrial Refrigeration & Air conditioning. 
                        Indraneel Technologoes – A name synonymous with excellence and professionalism for over 25 years. We have completed over 250 installations – from concept to commissioning, from single-process units to complete and integrated turnkey plants.
                         A vast customer base in diverse industries like- Engineering, Refrigeration, air conditioning, Chemical, Fertilizer, Automobile, Rubber, Plastic, Metal working, 
                         Food processing, Pharmaceuticals, Electrical/Electronics & Defence Sector, spread over India and many countries, speak of customer satisfaction. Cosmic has supplied maximum number of test facility projects to refrigeration & air conditioning industry.</div>
                </div>
                <div>
                    <h2><LabelIcon />  Our Expertise </h2>
                    <div>At IT, we understand the dynamics of each customer requirement and the variety of demands on its air conditioning / refrigeration system. We help you with innovative design that makes the system more efficient, cost-effective and economical in long run, saving substantially on your power and maintenance cost.
                    Industrial Refrigeration & Air conditioning is a lot about designing ‘solutions’ to specific requirement rather than trying to fit available product to the requirement. In other words, what the user of industrial Refrigeration & Air conditioning needs is a ‘customized cooling solution’.
                    </div>
                </div>
            </div>
        </ React.Fragment>
    );
}

export default AboutUs;