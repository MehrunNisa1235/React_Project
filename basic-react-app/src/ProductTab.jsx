// import Product from "./Product.jsx";
// import ProductTab from './ProductTab';

// // function ProductTab(){
// //     return(
// //         <>
// //             {/* <Product />
// //             <Product />
// //             <Product /> */}

// //             {/* when we use props */}
// //             <Product title="mobile" price={30000} color="black" />
// //             <Product title="laptop" price="50000" color="grey" />
// //             <Product title="dress"  color="white" />
// //         </>
       
// //     )
// // }

// //passing arrays and objects  to props 
// function ProductTab(){
//     let fruits = [<li>"apple"</li>, <li>"mango"</li>, <li>"papaya"</li>];
//     // let features = {a: "mehar", b: "alisha", c: "muskan"};
//     return(
//         <>
//             {/* <Product />
//             <Product />
//             <Product /> */}

//             {/* when we use props */}
//             <Product title="mobile" price={30000} color="black" Fruits={fruits} />
//             {/* <Product title="laptop" price="50000" color="grey" Fruits={["lichi","mango","guava"]} /> */}

//             {/* Array Render */}
//             <Product title="laptop" price="50000" color="grey" Fruits={fruits} />
//             <Product title="dress"  color="white" />
//         </>
       
//     )
// }
// export default ProductTab;


//passing array to props 
// import Product from './Product.jsx';
// function ProductTab()
// {
//     let features = ["apple","mango","papaya"];
//     // let options2 = {a:"mehar", b:"alisha", c:"muskan"};
//     return(
//         <>
//            <Product title = "mobile" price = "2000" color="black"  features= {features}  />
//            <Product title = "charger" price = {100} features={["mehar","alisha","mehrun"]}/>
           
//         </>
//     )
// }
// export default ProductTab;


//Rendering Array
// import Product from './Product.jsx';
// function ProductTab()
// {
//     let features = [<li>"hyderabad"</li>, <li>"Patna"</li>, <li>"Kolkata</li>];
//     return(
//         <>
//            <Product title = "mobile" price = "2000" features= {features}  />
//            <Product title = "charger" price = {100} />
           
//         </>
//     )
// }
// export default ProductTab;

//conditionals
import Product from './Product.jsx';
function ProductTab()
{
   
    return(
        <>
           <Product title = "mobile" price = "6000" />
           <Product title = "charger" price = {1000}  />
           <Product title = "laptop" price = {50000} />
           
        </>
    )
}
export default ProductTab;
