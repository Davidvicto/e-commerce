import React from 'react'
import Dcard from './Dcard'

const Discount = () => {
    return(
        <>
           <section className='disocunt background newarrivals'>
           <div className="container">
                <div className="heading d_flex">
                    <div className="heading-left row f_flex">
                    <img src='https://img.icons8.com/windows/32/fa314a/gift.png' />
                        <h2>Big Discount</h2>
                        </div>
                        <div className="heading-right row">
                            <span>view all</span>
                            <i className="fa fa-caret-right"></i>
                    </div>
                </div>
                <Dcard />
                </div>
           </section>
    </>
    )
}
export default Discount