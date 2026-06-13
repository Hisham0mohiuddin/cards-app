import "../styles/Cards.css"
export default function Cards({id,name,imgsrc,index,onclick}) {

    return(
        <div className="card-holder" key = {id} onClick = {onclick}>
            <img src={imgsrc} alt={name} />
            <div>{name}</div>
        </div>

    )
}