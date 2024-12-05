import { useState } from "react";
import "./Card.css";


const Card = (props) => {


    const [readmore,setReadmore] = useState(false); 
    const Info = readmore ? props.info : props.info.substring(0,200)+ "..." ;



    function readmoreHandler () {
        setReadmore(!readmore);
    }

    return (
        <div className="w-[400px] m-4 rounded-xl rohit">
            <div className="p-4 rounded-md">
                <img src={props.image} className=" aspect-square object-cover rounded-lg"></img>
                <h2 className="mt-4 text-green-600 font-bold text-2xl"> &#8377;{props.price}</h2>
                <h2 className="text-black-600 font-bold text-2xl">{props.name} </h2>
                <div className="text-lg">
                    {Info}
                    <span onClick={readmoreHandler} className="text-blue-500 font-semibold text-lg cursor-pointer">
                        {
                            readmore ? `show less` : `Read more`
                        }
                    </span>
                </div>

                <button className="px-20 py-1 bg-[#b4161b21] border-red-500 border  rounded-lg font-semibold text-lg mx-10 mt-8 hover:bg-red-500 hover:text-white "  onClick={()=>{props.removeTours(props.id)}}>
                    Not Interested
                </button>
            </div>
        </div>
    );
}

export default Card;