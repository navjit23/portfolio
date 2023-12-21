import classes from './card.module.css';

function Card(props:any){


  return <div className={classes.card}>
    <img className={classes.image} src={props.image} alt={props.title} />
    <div className='flex-1'>
      <h3 className='text-center text-2xl text-slate-500 font-bold '>{props.title}</h3>
      <p className='p-2'>{props.description}</p>
      {props.github !== undefined && (
      <div>
        <button className='btn btn-accent m-1 text-black p-1'>Github</button>
        <button className='btn btn-accent m-1 text-black p-1'>Website</button>
      </div>
    )}
    </div>

  </div>

//   return <div className="card lg:card-side bg-base-100 shadow-xl">
//   <figure><img className={classes.image} src={props.image} alt={props.title}/></figure>
//   <div className="card-body">
//     <h2 className="card-title">{props.title}</h2>
//     <p>{props.description}</p>
//     {props.github !== undefined && (
//       <div>
//         <button className='bg-teal-500 m-1 text-black p-1'>Github</button>
//         <button className='bg-teal-500 m-1 text-black p-1'>Website</button>
//       </div>
//     )}
//   </div>
// </div>
}
export default Card;