
import Card from "./Card.jsx";
function CardTab()
{
    let styles = {
        display : "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItem:"center",
    };
    return(
        <div style={styles}>
           
            <Card title="Books" idx={0} />
            <Card title="Laptop" idx={1} />
            <Card title= "Television" idx={2} />
            <Card title="Watch" idx={3} />
        </div>
    )
}
export default CardTab;