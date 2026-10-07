import largestBroker from "../../image/largestBroker.png";
import pressLogos from "../../image/pressLogos.png";
function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-6 col-sm-2'>
                    <img src={largestBroker} alt="Largest Broker" className="img-fluid w-100 mb-5" />
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest Stock Broker in India</h1>
                    <p className='mb-5'>2 million zerodha client contribute to over 15% of all retail orders volume in india daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>future and options</p>
                                </li>
                                <li>
                                    <p>commodity derivatives</p>
                                </li>
                                <li>
                                    <p>currency derivatives</p>
                                </li>
                            </ul>


                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Stock and Ipos</p>
                                </li>
                                <li>
                                    <p>Direct mutuals funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. security</p>
                                </li>
                            </ul>


                        </div>



                    </div>
                    <img src={pressLogos} alt="Press Logos" style={{ width: "90%" }} />


                </div>

            </div>

        </div>
    );
}

export default Awards;