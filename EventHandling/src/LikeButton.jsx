import { useState } from "react";

function LikeButton()
{
    // let clicked = () =>{
    //     console.log("Button Clicked");
    // }
    let[isLiked, setIsLiked] = useState(false);
    function toggleLike()
    {
        setIsLiked(!isLiked);
    }
    let likeStyles = {
        color : "red",
    }
    
    return(
        <div>
            {/* <p onClick={toggleLike}>
            {isLiked.toString()}
            <i className="fa-regular fa-heart"></i>
            </p> */}
            <h2>Making Like Buttons</h2>
            <p onClick={toggleLike}>
            {
                isLiked ? <i style={likeStyles} className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
            }
            {/* {isLiked.toString()} */}
            
            </p>
        </div>
    )
}
export default LikeButton;