import zerodhaFundhouse from "../../image/zerodhaFundhouse.png";
import sensibull from "../../image/sensibull.png";
import goldenpi from "../../image/goldenpi.png";
import streak from "../../image/streak.png";
import smallcase from "../../image/smallcase.png";
import ditto from "../../image/ditto.png";
import "../../index.css";
function Universe() {
    return (
        <div className="container">
            <div className="row mt-5 p-5 text-center">
                <h1>The Zerodha Universe</h1>
                <p className="p-3">Extend your trading and investment experience even further with our partner platforms</p>

                <div className="col-4 p-3">
                    <img src={zerodhaFundhouse} alt="zerodhaFundhouse" style={{ width: "200px", height: "auto" }}></img>
                    <p className="p-3 text-small text-muted">Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.

                    </p>

                </div>
                <div className="col-4 p-3">
                    <img src={sensibull} alt="sensibull"></img>
                    <p className="p-3 text-small text-muted">Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>


                </div>
                <div className="col-4 p-3">
                    <img src={goldenpi} alt="goldenpi"></img>
                    <p className="p-2 text-small text-muted">Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.


                    </p>


                </div>
                <div className="col-4 p-3">
                    <img src={streak} alt="streak" style={{ width: "200px", height: "auto" }}></img>
                    <p className="p-3 text-small text-muted">Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.

                    </p>

                </div>
                <div className="col-4 p-3">
                    <img src={smallcase} alt="smallcase"></img>
                    <p className="p-3 text-small text-muted">Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>


                </div>
                <div className="col-4 p-3">
                    <img src={ditto} alt="ditto" style={{ width: "150px", height: "auto" }}></img>
                    <p className="p-3 text-small text-muted">Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.


                    </p>


                </div>
                <div style={{display:"flex",justifyContent:"center"}}>
                <button className="signup-btn" >sign up for free</button>

                </div>
                
                
                
            </div>
        </div>
    );
}
export default Universe;