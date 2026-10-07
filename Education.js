import education from "../../image/education.png";
function Education() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-6 col-sm-2'>
                    <img src={education} alt="education" style={{ width: "70%" }} />
                </div>
                <div className='col-6 sm-2'>
                    <h1 className='mb-3'>Free and Open Market Education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='#' className='mx-5' style={{ textDecoration: "none" }}>Versity <i className="fa-solid fa-arrow-right-long ms-2"></i></a>
                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='#' className='mx-5' style={{ textDecoration: "none" }}>TradingQ&A <i className="fa-solid fa-arrow-right-long ms-2"></i></a>
                </div>
            </div>
        </div >


    );
}
export default Education;