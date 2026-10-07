import ecosystem from "../../image/ecosystem.png";

function Stats() {
    return (
        <div className='container p-5  mt-5'>
            <div className='row p-5'>

                <div className='col-6 p-5 mb-3'>
                    <h1 className='fs-2 mb-5'>Truest With Confidence</h1>
                    <h2 className='fs-4'>Customer first always</h2>
                    <p className='text-muted'>That why 1.3+ crore customers trust Zerodha with 3.5+ lakh crores worth of equity investments.</p>
                    <h2 className='fs-4'>No spams or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>

                <div className='col-lg-6 col-sm-2 '>
                    <img src={ecosystem} alt="ecosystem" className="img-fluid w-100" />
                    <div className='text-center'>
                        <a href='#' className='mx-5' style={{ textDecoration: "none" }}>Explore Our Products<i className="fa-solid fa-arrow-right-long ms-2"></i></a>
                        <a href='#' className='mr-5' style={{ textDecoration: "none" }}>Try Kite Demo<i className="fa-solid fa-arrow-right-long ms-2"></i></a>
                    </div>










                </div>

            </div>

        </div >
    );
}

export default Stats;