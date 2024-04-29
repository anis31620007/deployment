import logo from "../assets/logo_light.png";

const Navbar = () => {
  return (
    <div className='text-normal-l pt-3 px-4 md:px-10 lg:px-14 flex items-start '>
         <a href="/">
        <img
          src={logo}
          alt="logo"
          className=" w-[100px] bg-main-light dark:bg-main-dark"
        />
      </a>
      
    </div>
  )
}

export default Navbar
