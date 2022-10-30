import React from "react";

const Catg = () => {
    const data = [
        {
          cateImg: require("../../assets/images/cat-1.webp"),
          cateName: "Apple",
        },
        {
          cateImg: require("../../assets/images/cat-2.webp"),
          cateName: "Samasung",
        },
        {
          cateImg: require("../../assets/images/cat-1.webp"),
          cateName: "Oppo",
        },
        {
          cateImg: require("../../assets/images//cat-2.webp"),
          cateName: "Vivo",
        },
        {
          cateImg: require("../../assets/images/cat-1.webp"),
          cateName: "Redimi",
        },
        {
          cateImg: require("../../assets/images/cat-2.webp"),
          cateName: "Sony",
        },
      ]
    return (
        <>
        <div className="category">
            <div className="chead d_flex">
                <h1>Brandy</h1>
                <h1>Shop</h1>
            </div>
            {data.map((value, index) => {
                return(
                <div className='box f_flex' key={index}>
                    <img src={value.cateImg} alt=''/>
                    <span>{value.cateName}</span>
                </div>
                )
            })}
            <div className="box box2">
                <button>View all Brands</button>
            </div>
        </div>
        </>
    )
}
export default Catg