import React from 'react';
function Hero() {
    return (
        <section className='container-fluid' id="supportHero">
            <div className='p-4  ' id="supportWrapper">
                <h4 >Support Portal</h4>
                <div className='underlinee'><a href="" style={{ color: "white",marginRight:"70px" }}>Track Ticket</a></div>
            </div>
            <div className=' row p-2 '>
                < div className=' col-6 p-5  '>
                    <h1 className='fs-4 '>search for an answer or browser help topics to create a ticket</h1>
                    <input placeholder='Eg: How do I open my account, How do I activate F&O...' style={{ fontSize: "14px" }}></input>
                    <div className='links'>
                        <a href="">1. Track account opening</a><br />
                        <a href="">2. Track segment activation</a><br />
                        <a href="">3. Intraday margins</a><br />
                        <a href="">4. Kite user manual</a><br />
                        <a href="">5. Learn how to create a ticket</a><br />
                    </div>
                </div>

                <div className='col-6 p-5 'style={{paddingLeft:"80px"}} >
                    <h1 className='fs-4'>Featured</h1>
                    <div className='linkss'>
                        <a href="">1. Current takeover and Delisting -january 2024</a><br />
                        <a href="">2. latest Intraday leverages -MIS & CO</a><br />
                    </div>
                </div>
            </div>





        </section>

    );
} export default Hero;