const Sett = () => {
  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <form className=" space-y-4 md:space-y-6">
        <div className="flex flex-row justify-between items-center">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-normal-l dark:text-normal-d "
            >
              Full Name :{" "}
            </label>
            <input
              type="name"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="xxxxxxx"
              required=""
            />
             <button type="submit" className=" mt-2 text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800">change name</button>
          </div>

          <div>
            <img src="./src/assets/account.png"></img>
            <button type="submit" className=" mt-2 text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800">change </button>
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-normal-l   dark:text-normal-d"
          >
            Your email :
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
            placeholder="xxxxxx@esi.dz"
            required=""
            disabled
          />
        </div>

        <span className="text-normal-l dark:text-normal-d font-semibold mt-5">
          change password{" "}
        </span>

        <div className="flex flex-row justify-start">
          <div className="mr-14">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-normal-l dark:text-normal-d"
            >
              Current password{" "}
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-sm font-medium text-normal-l dark:text-normal-d"
            >
              New password
            </label>
            <input
              type="confirm-password"
              name="confirm-password"
              id="confirm-password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
        </div>
        <button type="submit" className=" mt-2 text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800">change password</button>
      </form>
      <button className=" mt-2 text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800"><a href="/mainpage">return to the main page</a></button>
    </div>
  );
};

export default Sett;
