import React from "react";


const Annu = () => {
    const mystyle = {
        width: '130%',
        height: '340px'
    }
    const mystyle1 = {
        width: '100%',
        height: '340px'
    }
    return (
        <div>
            <section className="annouc background">
                <div className="container d_flex">
                    <div className="img">
                        <img src={require('../../assets/banner-1.webp')} width='100%' height='100%' alt='' style={mystyle}/>
                    </div>
                    <div className="img">
                        <img src={require('../../assets/banner-2.webp')} width='100%' height='100%' alt='' style={mystyle1}/>
                    </div>
                </div>

            </section>
        </div>
    )
}
export default Annu