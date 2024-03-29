
function CardPrice({oldPrice, newPrice})
{
    let oldStyles = {
        textDecoration : "line-through",
    }
    let newStyles = {
        fontWeight :"bold",
    }
    let styles = {
        backgroundColor : "teal",
        height : "25px",
        
        borderBottomLeftRadius : "14px",
        borderBottomRightRadius : "14px",
    }
    return(
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>

        </div>
    )
}
export default CardPrice;