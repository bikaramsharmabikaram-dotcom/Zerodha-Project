import React from 'react';
function Pricing() {
    return (
        <div className='container'>
            <div className='row '>
                <div className='col-4'>
                    <h1 className='mb-3'>Unbeatable Pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='#' className='mx-5' style={{ textDecoration: "none" }}>See pricing <i className="fa-solid fa-arrow-right-long ms-2"></i></a></div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col-6 p-4 border'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery and <br />Direct Mutual Funds</p>
                        </div>

                        <div className='col-6 p-4 border'>
                            <h1 className='mb-3'>₹20</h1>
                            <p>Enterday and F&O</p>
                        </div>

                    </div>





                </div>
            </div>

        </div>
    );
}

export default Pricing;