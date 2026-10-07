import React from 'react';
function CreateTicket() {
    return (
        <div className='container'>
            <div className='row p-3 mt-5 mb-5 ' style={{ whiteSpace: "nowrap", width: "100%",display:"flex"}} >
                <h4 className='' style={{ marginLeft: "40px" }}>To Create a ticket ,selected a relevent topics</h4>

                <div className='col-4 p-5'>
                    <h4 className='' style={{ whiteSpace: "nowrap", fontSize: "18px" }} ><i class="fa fa-plus-circle"></i>Account Opening</h4>
                    <ul style={{ listStyleType: "disc", padding: "20px", marginLeft: "0" }}>
                        <li><a href="" style={{ color: "#387ed1" }}>Resident individual</a></li>
                        <li><a href="" style={{ color: "#387ed1" }}>Minor</a><br /></li>
                        <li><a href="" style={{ color: "#387ed1" }}>Non Resident Indian (NRI)</a><br /></li>
                        <li><a href="" style={{ color: "#387ed1" }}>Company, Partnership,<br />HUF and LLP</a><br /></li>
                        <li><a href="" style={{ color: "#387ed1" }}>Glossary</a><br /></li>

                    </ul>




                </div>
                <div className='col-4 p-5'>
                    <h4 className='' style={{ whiteSpace: "nowrap", fontSize: "18px" }}><i class="fa fa-user" aria-hidden="true"></i> Your Zerodha Account</h4>
                    <ul style={{ listStyleType: "disc", padding: "20px", marginLeft: "0" }}>
                        <li><a href="" style={{ color: "#387ed1" }}>Your Profile</a></li>
                        <li><a href="" style={{ color: "#387ed1" }}>Account modification</a><br /></li>
                        <li><a href="" style={{ color: "#387ed1" }}>Client Master Report<br />and Depository Participant</a><br /></li>
                        <li><a href="" style={{ color: "#387ed1" }}>Nomination</a><br /></li>
                        <li><a href="" style={{ color: "#387ed1" }}>Transfer and conversion <br />of securities</a><br /></li>

                    </ul>

                </div>
                <div className='col-4 p-5'>
                    <h4 className='' style={{ whiteSpace: "nowrap", fontSize: "18px" }}><i class="fa fa-plus-square-o" aria-hidden="true"></i>Kite</h4>
                    <ul style={{ listStyleType: "disc", padding: "20px", marginLeft: "0" }}>
                        <li><a href="" style={{ color: "#387ed1" }}>IPO</a></li>
                        <li><a href="" style={{ color: "#387ed1" }}>Trading FAQs</a><br /></li>
                        <li><a href="" style={{ color: "#387ed1" }}>Margin Trading Facility<br /> (MTF) and Margins</a><br /></li>
                        <li><a href="" style={{ color: "#387ed1" }}>Alerts snd Nudges
                        </a><br /></li>
                        <li><a href="" style={{ color: "#387ed1" }}>General</a><br /></li>

                    </ul>

                </div>
                <div className='container'>

                    <div className='row p-3'>
                        <div className='col-4 p-5'>
                            <h4 className='' style={{ whiteSpace: "nowrap", fontSize: "18px" }}><i class="fa fa-inr" aria-hidden="true"></i>Founds</h4>
                            <ul style={{ listStyleType: "disc", padding: "20px", marginLeft: "0" }}>
                                <li><a href="" style={{ color: "#387ed1" }}>Add money</a></li>
                                <li><a href="" style={{ color: "#387ed1" }}>Withdraw money</a><br /></li>
                                <li><a href="" style={{ color: "#387ed1" }}>Add bank accounts</a><br /></li>
                                <li><a href="" style={{ color: "#387ed1" }}>eMandates</a><br /></li>
                                {/* <li><a href="" style={{ color: "#387ed1" }}></a><br /></li> */}

                            </ul>


                        </div>

                        <div className='col-4 p-5'>
                            <h4 className='' style={{ whiteSpace: "nowrap", fontSize: "18px" }}><i class="fa fa-check-circle-o" aria-hidden="true"></i>Console</h4>
                            <ul style={{ listStyleType: "disc", padding: "20px", marginLeft: "0" }}>
                                <li><a href="" style={{ color: "#387ed1" }}>Portfolio</a></li>
                                <li><a href="" style={{ color: "#387ed1" }}>Corporate actions</a><br /></li>
                                <li><a href="" style={{ color: "#387ed1" }}>Funds statement</a><br /></li>
                                <li><a href="" style={{ color: "#387ed1" }}>Reports
                                </a><br /></li>
                                <li><a href="" style={{ color: "#387ed1" }}>Profile</a><br /></li>
                                <li><a href="" style={{ color: "#387ed1" }}>Segments</a><br /></li>

                            </ul>



                        </div>

                        <div className='col-4 p-5'>
                            <h4 className='' style={{ whiteSpace: "nowrap", fontSize: "18px", }}><i class="fa fa-money" aria-hidden="true"></i>Coin</h4>
                            <ul style={{ listStyleType: "disc", padding: "20px", marginLeft: "0" }}>
                                <li><a href="" style={{ color: "#387ed1" }}>Mutual funds</a></li>
                                <li><a href="" style={{ color: "#387ed1" }}>National Pension Scheme (NPS)</a><br /></li>
                                <li><a href="" style={{ color: "#387ed1" }}>Fixed Deposit (FD)</a><br /></li>
                                <li><a href="" style={{ color: "#387ed1" }}>Features on Coin</a><br /></li>
                                <li><a href="" style={{ color: "#387ed1" }}>Payments and Orders</a><br /></li>
                                <li><a href="" style={{ color: "#387ed1" }}>General
                                </a><br /></li>

                            </ul>



                        </div>
                    </div>
                </div>




            </div>
        </div>

    );
}
export default CreateTicket;