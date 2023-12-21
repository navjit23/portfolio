function ContactMe(){
  return <form className="w-2/3 m-auto bg-neutral-700 p-3 mt-3 mb-5 rounded-xl" action="">

  <div className="relative z-0 w-full mb-6 group">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-zinc-100 focus:outline-none focus:ring-0 focus:border-white peer" placeholder="* Email" required />
      {/* <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-green-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label> */}
  </div>

  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder="First Name" />
        {/* <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label> */}
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder="* Last Name " required />
        {/* <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label> */}
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder="Phone Number "  />
        {/* <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label> */}
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder="Company "  />
        {/* <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company </label> */}
    </div>
  </div>
  <div className="relative z-0 w-full mb-6 group">
  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Your message</label>
<textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-100 bg-gray-500 rounded-lg border border-gray-300 focus:ring-white focus:border-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white" placeholder="Leave a comment..."></textarea>
  </div>

  <button type="submit" className="btn btn-outline btn-accent">Submit</button>

  {/* <div className="relative z-0 w-full mb-6 group" ><input type="email" name="email" /> <label htmlFor="email">Email</label></div>


  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="grid md:grid-cols-2 md:gap-6" ><input type="text" name="fname" /> <label htmlFor="fname">First Name</label></div>
    <div className="grid md:grid-cols-2 md:gap-6" ><input type="text" name="lname" /> <label htmlFor="lname">Last Name</label></div>
  </div>

  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group"><input type="text" name="company" /> <label htmlFor="company">Company Name</label></div>
    <div className="relative z-0 w-full mb-6 group"><input type="number" name="phone" /> <label htmlFor="phone">Phone Number</label></div>
  </div>

  <div className="relative z-0 w-full mb-6 group"><textarea name="comment"  cols={50} rows={10}></textarea></div> */}



  </form>
}
export default ContactMe;