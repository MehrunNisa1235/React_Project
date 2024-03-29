import CardPrice from "./CardPrice";
function Card({title, idx})
{
    let oldPrices = ["10,500","30,000","45,500","46,800"];
    let newPrices = ["8,689", "28,999", "42,689","42,789"];
    let description = [["Agni ki Jwala","Jeet Aapki Shiv Khera"],["Dell Laptop", "Hp Fast Laptop"], ["LED Television", "Zebronics"], ["Noise WaterProff Watch","Boult High Performance"]]
    return(
        <div className="Card">
            <h3>{title}</h3>
            <h5>{description[idx][0]}</h5>
            <h5>{description[idx][1]}</h5>
            {/* <CardPrice oldPrice = "123" newPrice="345" /> */}
            <CardPrice oldPrice ={oldPrices[idx]} newPrice={newPrices[idx]} />

        </div>
    )
}
export default Card;