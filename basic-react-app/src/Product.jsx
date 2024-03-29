import "./Product.css"
//import ProductTab from "./ProductTab";
// function Product(){
//     return(
//         <div className="Product">
//             <h3>This is our Product</h3>
//             <h5>Our Product Description</h5>
//         </div>
//     )
// }


// function Product(props){
//     // console.log(props);
//     return(
//         <div className="Product">
//             <h3>{props.title}</h3>
//             <h5>Our Product Description</h5>
//         </div>
//     )
// }


//in place of props we can also write this
// function Product({title,price,color}){
//     // console.log(props);
//     return(
//         <div className="Product">
//             <h3>Title: {title}</h3>
//             <h5>Price:{price}</h5>
//             <h6>Color: {color}</h6>
            
//         </div>
//     )
// }

//passing arrays and objects 
// function Product({title,price=1,color,Fruits}){
//     // console.log(props);
//     return(
//         <div className="Product">
//             <h3>Title: {title}</h3>
//             <h5>Price:{price}</h5>
//             <h6>Color: {color}</h6>
//             <p>Fruits:{Fruits}</p>
//         </div>
//     )
// }

//render array
// function Product({ title,price,features}){
//     return(
//         <>
//           <h3>Passing Array to Props</h3>
//           <div className="Product">
//             <h3>Title: {title}</h3>
//             <h2>Price : {price}</h2>
//             <p>{features}</p>
            
//           </div>
//         </>
//     );
// }


// export default Product;


//conditionals
// function Product({title,price,color})
// {
//   // if(price > 3000)
//   // {
//   //   return(
//   //     <>
//   //       <h3>Conditionals</h3>
//   //       <div className="Product">
//   //         <h4>Title : {title}</h4>
//   //         <h4>Price : {price}</h4>
//   //         <h4>Color : {color}</h4>
//   //         <p>Discount 5%</p>

//   //       </div>
//   //     </>
//   //   )
//   // }
//   // else
//   // {
//   //   return(
//   //     <>
//   //       <h3>Conditionals</h3>
//   //       <div className="Product">
//   //         <h4>Title : {title}</h4>
//   //         <h4>Price : {price}</h4>
//   //         <h4>Color : {color}</h4>

//   //       </div>
//   //     </>
//   //   )
//   // }

//   //using ternary operator
//   // let isDiscount = price > 3000 ? "Discount of 5%" : " ";
//   // return(
//   //   <div className="Product">
//   //         <h4>Title : {title}</h4>
//   //         <h4>Price : {price}</h4>
          
//   //         <p>{isDiscount}</p>

//   //       </div>
//   // )
  
//   //we can also write this way
  // return(
  //   <div className="Product">
  //         <h4>Title : {title}</h4>
  //         <h4>Price : {price}</h4>
          
  //         {/* <p>{price > 3000 ? "Discount of 8%" : " "}</p>  */}
  //         {/* <p>{price > 3000 ? "Discount of 8%" : " "}</p> it create extra node for those variable who is not greater then 3000 so reduce it we can use */}
  //         {price > 3000 ? <p>Discount of 8%</p> : <a href=" ">Get Discount</a>}

  //       </div>
  // )
    
//}
// export default Product;

//dynamic component styles :- 
function Product({title,price})
{
  // let productStyle = {backgroundColor : "coral"}
  // return(
  //   // <div className="Product" style = {productStyle} >
  //   <div className="Product" >
  //         <h4>Title : {title}</h4>
  //         <h4 style = {productStyle}>Price : {price}</h4>
  //         {price > 3000 ? <p>Discount of 5 % </p> : null}
          
          

  //       </div>
  // )

  //we can also style this 

  // let productStyle = {backgroundColor :  price > 3000 ? "coral" : " "};
  // return(
  //   <div className="Product" style = {productStyle} >
   
  //         <h4>Title : {title}</h4>
  //         <h4>Price : {price}</h4>
  //         {price > 3000 ? <p>Discount of 5 % </p> : null}
          
          

  //   </div>
  // )

  //we can also style this
  let isDiscount = price > 3000;
  let productStyle = {backgroundColor :  isDiscount ? "coral" : " "};
  return(
    <div className="Product" style = {productStyle} >
   
          <h4>Title : {title}</h4>
          <h4>Price : {price}</h4>
          {isDiscount && <p>Discount of 5 % </p>}
          
          

    </div>
  )
}
 export default Product;