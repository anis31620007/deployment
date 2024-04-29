import { Link } from "react-router-dom";


const Navbardeux = () => {
  return (
    <div className="flex flex-row justify-between items-center">

      <Link to="/mainpage">
      <button
        class="cursor-pointer duration-200 hover:scale-125 active:scale-100"
        title="Go Back"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          class="stroke-blue-300"
        >
          <path
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="1.5"
            d="M11 6L5 12M5 12L11 18M5 12H19"
          ></path>
        </svg>
      </button>
      
      
      </Link>
      
      <h1 className="text-normal-l dark:text-normal-d font-bold text-6xl ">
        Settings
      </h1>
      <Link to="/">
      <img src="./src/assets/logo.png" className="w-28 "></img>
      
      </Link>
      
    </div>
  );
};

export default Navbardeux;
