import './css/contact.css';

const ContactUs = () => {
    return (
        <>
            <h1> Get in Touch</h1>
            <div className="ContactusDiv">
                <div>
                    <h2> CONTACT US</h2>
                    <h2>Indraneel Technologies</h2>
                    <div>Contact Person: <span className='colorRed'>Mr. Umesh Dhamale.</span> </div>
                    <div>Phone: <span className='colorRed'>9145010803</span></div>
                    <div>Email id: <span className='colorRed'>indraneel.technologies@gmail.com</span> </div>
                </div>
                <div>
                    <h2 className='displayHidden'>.</h2>
                    <h2> Location</h2>
                    <div className='colorRed'>Chandraneel Sr. No. 79. Chaitraban. Near Famous Chowk.</div>
                    <div className='colorRed'>New Sangavi Pune 411027. State : Maharashtra. Country : India</div>
                </div>

            </div>
        </>
    );
}

export default ContactUs;