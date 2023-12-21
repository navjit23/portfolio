function NavigationBar(){
  let links:{name:string, link:string}[] = [
    {name: "Projects", link:'/'},
    {name: "Education", link:'/'},
    {name:'Contact', link:''}

     ]
  return (
    <nav className="shadow-md w-full top-0 left-0 ">


      <div style={{backgroundColor:"rgba(0, 0, 0, 0.671)"}} className=" md:flex  p-4 ">

      <div className=" font-bold text-2xl cursor-pointer flex items-center font-serif
        ">
        <span className=" text-3xl text-gray-400 mr-1 pt2">
            Navjit Singh
        </span>
      </div>
        <ul className=" md:flex md:items-center ml-3">
          {links.map( (link)=>(
          <li className=" text-m text-yellow-200 mr-1 p-2">
          <a href={link.link}>{link.name} </a>
          </li>
          ))
        }

        </ul>


      </div>

    </nav>
  )
}

export default NavigationBar;