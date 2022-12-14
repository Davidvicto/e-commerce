import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo1.png'

const Search=({ cartItem })=>{
    window.addEventListener('scroll', function(){
        const search=document.querySelector('.search')
        search.classList.toggle('active', window.scrolly >100)
    })
    const mystyle = {
        margin:'13px'
    }
    return(
        <>
        <section className='search'>
            <div className='container c_flex'>
                <div className='logo width'>
                    <img src={logo} alt=''/>
                </div>

                <div className='search-box f_flex'>
                <i className='fa fa-search' style={mystyle}></i>
                <input type='text' placeholder='Search and hit enter....'/>
                <span>All Category</span>
                </div>

                <div className='icon f_flex width'>
                <i className='fa fa-user icon-circle'></i>
                <div className='cart'>
                    <Link to='/cart'>
                    <i className='fa fa-shopping-bag icon-circle'></i>
                    <span>{cartItem.length === 0 ? "" : cartItem.lenght}</span>
                    </Link>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}
export default Search;