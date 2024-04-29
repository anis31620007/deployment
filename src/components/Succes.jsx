const Succes = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <a>
        <img src="./src/assets/mm.png" className="h-96  "></img>
      </a>
      <span className="text-2xl text-normal-l dark:text-normal-d">
        Please check your email to create a new password
      </span>

      <span className="text-normal-l  dark:text-normal-d pt-5 ">
        Can’t get email?{" "}
        <a href="#" className="text-blue-600">
          Resubmit
        </a>
      </span>
    </div>
  );
};

export default Succes;
