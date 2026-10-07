import kite from "../../image/kite.png";
import console from "../../image/console.png"
import coin from "../../image/coin.png";
import varsity from "../../image/varsity.png";
import kiteconnect from "../../image/kiteconnect.png";

import googlePlay from "../../image/googlePlay.png";
import appstore from "../../image/appStore.png";
function LeftSection(ImageURL, ProductName, ProductDiscription, tryDemo, LearnMore, Kiteconnectapi) {
    return (
        < div className="container mt-5">
            <div className="row">
                <div className="col-6 p-4">
                    <img src={kite} alt="kite"></img>


                </div>
                <div className="col-6 p-4 mt-5">
                    <h1>Kite</h1>
                    <p>Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>
                    <div>
                        <a href={tryDemo} style={{ color: "#387ed1", fontWeight: "bold", fontSize: "16px inter,serif" }}>Try demo →</a>
                        <a href={LearnMore} style={{ marginLeft: "95px", color: "#387ed1", fontWeight: "bold", fontSize: "16px inter,serif" }}>Learn more →</a>
                    </div>
                    <div className="mt-4" style={{}}>
                        <a href="#"><img src={googlePlay} alt="googleplay" ></img></a>
                        <a href="#"><img src={appstore} alt="appStore" style={{ marginLeft: "50px" }} ></img></a>
                    </div>

                </div>
                <div className="row">
                    <div className="col-6 p-5 mt-5">
                        <h1>console</h1>
                        <p>The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.</p>
                        <div>

                            <a href={LearnMore} style={{ color: "#387ed1", fontWeight: "bold", fontSize: "16px inter,serif" }}>Learn more →</a>
                        </div>


                    </div>

                    <div className="col-6">
                        <img src={console} alt="console"></img>

                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-6 p-4">
                    <img src={coin} alt="coin"></img>


                </div>
                <div className="col-6 p-4 mt-5">
                    <h1>Coin</h1>
                    <p>Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.</p>
                    <div>
                        <a href={tryDemo} style={{ color: "#387ed1", fontWeight: "bold", fontSize: "16px inter,serif" }}>Coin →</a>
                        {/* <a href={LearnMore} style={{ marginLeft: "95px", color: "#387ed1", fontWeight: "bold", fontSize: "16px inter,serif" }}>Learn more →</a> */}
                    </div>
                    <div className="mt-4">
                        <a href="#"><img src={googlePlay} alt="googleplay" ></img></a>
                        <a href="#"><img src={appstore} alt="appStore" style={{ marginLeft: "50px" }} ></img></a>
                    </div>

                </div>

            </div>
            <div className="row">
                <div className="col-6 p-4 mt-5">
                    <h1>Kite Connect API
                    </h1>
                    <p>Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase..</p>
                    <div>

                        <a href={LearnMore} style={{ marginLeft: "95px", color: "#387ed1", fontWeight: "bold", fontSize: "16px inter,serif" }}>Kite Connect  →</a>
                    </div>


                </div>

                <div className="col-6 p-4">
                    <img src={kiteconnect} alt="kiteconnect"></img>

                </div>
            </div>
            <div className="row">
                <div className="col-6 p-4">
                    <img src={varsity} alt="varsity"></img>


                </div>
                <div className="col-6 p-4 mt-5">
                    <h1>varsity</h1>
                    <p>An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.</p>
                    <div>
                        {/* <a href={tryDemo} style={{ color: "#387ed1", fontWeight: "bold", fontSize: "16px inter,serif" }}>varsity →</a> */}
                        {/* <a href={LearnMore} style={{ marginLeft: "95px", color: "#387ed1", fontWeight: "bold", fontSize: "16px inter,serif" }}>Learn more →</a> */}
                    </div>
                    <div className="mt-4" style={{}}>
                        <a href="#"><img src={googlePlay} alt="googleplay" ></img></a>
                        <a href="#"><img src={appstore} alt="appStore" style={{ marginLeft: "50px" }} ></img></a>
                    </div>

                </div>

            </div>
            <p className="text-center mt-5" style={{fontsize:"bold"}}>Want to know more about our technology stack? Check out the <a href="#" style={{color:"#387ed1"}}>Zerodha.tech</a> blog.</p>
        </div>
       

    );
}
export default LeftSection;