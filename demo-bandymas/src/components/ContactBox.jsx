
export default function ContactBox(props){
  console.log(props);
  
  return (
    <div className="contact-card">
      <img src={props.imgUrl}/>
      <h3>{props.name}</h3>
      <p>phone : {props.phone}</p>
      <p>email : {props.email}</p>
  </div>
  )
}