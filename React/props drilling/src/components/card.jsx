const Card = (props)=>{
    console.log(props)
    return (
        <div className="card">
            <img src={props.img} alt="" />
            <h1>I am {props.name}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error asperiores accusamus voluptatem tenetur magni modi corrupti omnis dolorem itaque deleniti.</p>
            <button>Click</button>
        </div>
    )
}

export default Card