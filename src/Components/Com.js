import Back from "./img/facedown.jpg";

const Com = (props) =>{
    function configureCom(props){
        if(props.cards.length === 0) return null;
        if(props.position === "dealer") return dealer(props);
        return otherCom(props);
    }

    function dealer(props){
        if(props.show){
            return(
                <div className="dealer com">
                    <div className="hand">
                        {props.cards.map((card) => (
                            <img className="card" src={card.image} alt={card.code} />
                        ))}
                    </div>
                    <p className="total">Total: {props.total}</p>
                </div>
            )
        }else{
            return(
                <div className="dealer com">
                    <div className="hand">
                        <img className="card" src={props.cards[0].image} alt={props.cards[0].code} />
                        <img className="card" src={Back} alt="facedown" key="facedown" />
                    </div>
                </div>
            )
        }
    }

    function otherCom(props){
        return(
            <div className={`${props.position} com`}>
                <div className="hand">
                    {props.cards.map((card) => (
                        <img className="card" src={card.image} alt={card.code}/>
                    ))}
                </div>
            </div>
        )
    }

    return(configureCom(props));
}
export default Com;