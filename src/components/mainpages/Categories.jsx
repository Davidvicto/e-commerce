import React from "react";



const Categories = () =>{
    const data = [{
        cateImg:require('../../assets/images/cate1.png'),
        cateName:'Fashion',
    },
    {
        cateImg: require('../../assets/images/cate2.png'),
        cateName: "Electronic",
      },
      {
        cateImg: require('../../assets/images/cate3.png'),
        cateName: "Cars",
      },
      {
        cateImg: require('../../assets/images/cate4.png'),
        cateName: "Home & Garden",
      },
      {
        cateImg: require('../../assets/images/cate5.png'),
        cateName: "Gifts",
      },
      {
        cateImg: require('../../assets/images/cate6.png'),
        cateName: "Music",
      },
      {
        cateImg: require('../../assets/images/cate7.png'),
        cateName: "Health & Beauty",
      },
      {
        cateImg: require('../../assets/images/cate8.png'),
        cateName: "Pets",
      },
      {
        cateImg: require('../../assets/images/cate9.png'),
        cateName: "Baby Toys",
      },
      {
        cateImg: require('../../assets/images/cate10.png'),
        cateName: "Groceries",
      },
      {
        cateImg: require('../../assets/images/cate11.png'),
        cateName: "Books",
      },
    ]

    return (
        <>
            <div className="category">
                {
                  data.map((value, index)=>{
                    return(
                  <div className='box f_flex' key={index}>
                    <img src={value.cateImg} alt=''/>
                    <span>{value.cateName}</span>
                  </div>
                  )
                  })
                }
               
            </div>
        </>

    );
}
export default Categories;