import { Link } from "react-router-dom";

function ForgotPasswdForm() {
  return (
    <section className="bg-main-light dark:bg-main-dark">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full p-6 bg-main-light rounded-lg md:mt-0 sm:max-w-md dark:bg-main-dark sm:p-8">
          <h2 className="mb-1 text-5xl font-bold text-gray-900 dark:text-white">
            Forget your password?
          </h2>
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your recovery email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <Link to="/mail">
            <button
              type="submit"
              className="w-full text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800 mt-4"
            >
              Reset password
            </button>
            
            
            </Link>
            
          </form>
        </div>
      </div>
    </section>
  );
}

export default ForgotPasswdForm;
