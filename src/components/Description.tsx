function Description(){
  return <div style={{padding:"30px 10px 10px 0px"}} className=" bg-gray-400 h-auto ">
    <div  className="flex ">
    <div className="flex-1 p-8 rounded-2xl ">
      <div className="bg-zinc-300 p-6 rounded-2xl w-fit float-right ">
        <h2 style={{fontSize:"40px", textAlign:"right"}} className="font-bold ">Hi, I'm Navjit..|</h2>
        <p style={{fontSize:"25px", textAlign:"right"}} >A Full-Stack Web Developer, currently based in Winnipeg,MB.
        <br/>I'm passionate about creating interactive front-end application with a solid back-end </p>
      </div>
    </div>

      <div className="flex-none w-auto pr-2"><img style={{width:"200px", borderRadius:'10%', margin:"auto" } }   src="./navjit_singh.jpg" alt="Navjit Singh Profile" /></div>

  </div>
  <div>


    <button className="btn btn-accent mr-1 pr-5 pl-5 shadow-black"><h2 className=" text-xl">Github</h2></button>
    <button className="btn btn-accent shadow-black"><h2 className=" text-xl">LinkedIn</h2></button>


  </div>
  </div>

}
export default Description;