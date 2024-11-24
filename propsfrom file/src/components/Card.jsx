export default function Card(props){
  return (
    <section className="container">
      <div className="row">
        <div>
          <div>
            <img src={"src" + props.logo.slice(1)} alt="" />
          </div>
          <div>
            <p>{props.company}</p>
            <h3>{props.position}</h3>
            <p><span>{props.postedAt}</span> <span>{props.contract}</span> <span>{props.location}</span></p>
          </div>
        </div>

      </div>
    </section>
  )
}