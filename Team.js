import React from 'react';
// import profile from '../../image/1775122042693.webp';
function Team() {
    return (
        <div className='conatiner'>
            <div className='row p-5 mt-5 border-top'>
                <h1 className=' text-center'>People</h1>
            </div>

            <div className='row p-5 text-muted' style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
                <div className='col-6 p-5 text-center'>
                    <img src="/1775122042693.webp" style={{ position: "relative", left: "60px", borderRadius: "80%", width: "320px", height: "320px", objectFit: "cover", display: "block", marginLeft: "100px" }} />
                    <h4 className='mt-4' style={{ position: "relative", Left: "60px" }}>Golu Sharma</h4>
                    <h5>Founder,CEO</h5>


                </div>
                <div className='col-6 p-4'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p> Playing basketball is his zen.</p>

                    <p>Connect on <a href="#" style={{ color: "#387ed1" }}>Homepage</a> /<a href="#" style={{ color: "#387ed1" }}>TradingQnA </a> /<a href="#" style={{ color: "#387ed1" }}>Twitter</a></p>

                </div>

            </div>
        </div>
    );
}
export default Team;