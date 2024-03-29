
function printHello(){
    console.log("HELLO Mehar");
}

function Bye()
{
    console.log("Bye... Mehar");
}

function HandleMouseOver(){
    console.log("this is mouse over clicked!!");
}

function HandleDoubleClick(){
    console.log("You Double Clicked here!!!!")
}

export default function Button()
{
    return(
        <div>
            <button onClick={printHello}>Click me !!</button>

            <p onClick={Bye}>This is Paragraph click here !!</p>

            <h5 onMouseOver={HandleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quidem facilis, atque voluptate error quam totam officiis aperiam id provident pariatur inventore nesciunt fugiat sapiente consequuntur beatae unde tenetur harum!
            Soluta cum architecto doloremque officia atque sit, sed aliquam consectetur iste. Minus repellat animi architecto atque quisquam recusandae sunt, est doloremque, ab dolores reprehenderit. A officia ea in quos deserunt.
            Vero est quas in aliquam accusamus dolor debitis odit quis cum officiis veniam, minima sunt neque voluptatum ad harum doloribus eos tempora consequatur quos a nisi! Tempora maxime repudiandae aperiam.
            Beatae vero esse amet eveniet, quaerat vitae officiis fugiat atque consectetur pariatur ex hic, sapiente nemo deserunt dolorum
            soluta non error et officia, provident maiores rem. Voluptates laudantium deleniti illum!</h5>

            <button onDoubleClick={HandleDoubleClick}>Double Click Here</button>
        </div>
    )
}