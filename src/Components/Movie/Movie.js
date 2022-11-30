const Movie = (props)=>{
    return(
        <div className="card">
            <h5 className="card-title">{props.title}</h5>
            <img src={props.img && props.img} alt="" width='300px'/>
        </div>
    )
}

export default Movie