
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';



const Navber = () => {
 
    const link=<>
    <li><NavLink to={"/"}>Home</NavLink></li>
   <li><NavLink to={"/skills"}>Skills</NavLink></li>
    <li><NavLink to={"/experience"}>Experience</NavLink></li>
    <li><NavLink to={"/projects"}>Projects</NavLink></li>
    <li><NavLink to={"/resume"}>Resume</NavLink></li>
    <li><NavLink to={"/contact"}>Contact</NavLink></li>
    

  </>
    return (

    <div className="navbar  bg-white ">
    <div className="navbar-center ">
      <div className="dropdown ">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box ">
       {link}
        </ul>
      </div>
      
      <div>
      <img className='lg:w-[400px] md:w-96 w-64 pt-2 lg:ml-14 ' src="https://i.ibb.co/MfCcSmj/Black-White-Simple-Initial-B-Letter-Logo-3.png" alt="" />
      </div>
      {/* <a className="text-gray-600 normal-case font-bold mt-5 ml-1 md:ml-3 lg:ml-3 lg:text-sm md:text-sm text-[10px] ">Electronics</a> */}
    </div>
    <div className="navbar-center hidden lg:flex ">
      <ul className="menu menu-horizontal font-semibold ml-[490px]  px-1">
       {link}
      </ul>
    </div>
    <div className="lg:flex md:flex gap-3 navbar-end">
    {/* <p className=''>{user?.displayName}</p>
      <div>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          {user? <div className="w-14 rounded-full">
          
            <img src={user?.photoURL}/>
         
          </div>:<div className="w-14  rounded-full">
            <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"/>
          </div>}
        </label>
      </div>
     <div>
      {
        user?<Link onClick={logout} >  <button className="btn btn-outline font-medium cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-rose-500 hover:text-white ">Log Out</button></Link> :
        <Link to={"/login"}>  <button className="btn btn-outline cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-green-600 hover:text-white  ">Log in</button></Link>
   
      }

    
     </div> */}
  
    </div>
  </div>
  
    );
};

export default Navber;