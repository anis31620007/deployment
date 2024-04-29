const Err = () => {
  return (
    <div className="flex flex-row-reverse justify-center ">
      <div className="w-1/2 ">
        <img src="./src/assets/oops.png" className="w-full" alt="Oops" />
      </div>
      <div className="flex flex-col text-normal-l dark:text-normal-d mt-20 ">
        <span className="font-bold text-7xl mt-7">Ooops...</span>
        <p className="font-bold text-6xl mt-7">page not found</p>
        <p className="mt-8 mb-7">
          the page you are looking for doesn’t exist or an other error occurred
          , go back to home page{" "}
        </p>
        <button
          className="w-full text-white bg-blue-800 hover:bg-blue-900  focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default Err;
