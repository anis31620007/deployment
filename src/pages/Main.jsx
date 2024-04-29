import { useNavigate } from "react-router-dom";
import logoLight from "./../assets/logo_light.png";

import illustration1 from "./../assets/illustration1.png";
import illustration2 from "./../assets/illustration2.png";
import illustration3 from "./../assets/illustration3.png";
import illustration4 from "./../assets/illustration4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
/*

import { useNavigate } from "react-router-dom";*/

const Container = ({ children }) => (
  <div className="container mx-auto px-4">{children}</div>
);

Container.propTypes = { children: PropTypes.node.isRequired };
/*const navigate = useNavigate();

const handleLoginClick = () => {
    navigate("/Login");
};
*/
/*const navigate = useNavigate();

const handleLoginClick = () => {
  navigate("/login");
};*/

const Main = () => (
  <div className="bg-main-light dark:bg-main-dark w-full overflow-hidden">
    {/* Start Header */}
    <header className="flex justify-between items-center py-3 px-4 md:px-10 lg:px-14">
      <img src={logoLight} alt="logo" className="w-[100px]" />
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faMoon} size="lg" color="#fff" />
        <a href="/login" className="hidden md:block dark:text-normal-d">
          Login
        </a>
        {/*<button
          type="button"
          className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          href="/Signup"
        >
          <a href="/Signup">Sign up</a>
</button>*/}
        <Link to="/Signup">
          <button class="overflow-hidden  w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
            Sign up
            <span class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
            <span class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
            <span class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
            <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
              Join us!
            </span>
          </button>
        </Link>
      </div>
    </header>
    {/* End Header */}
    {/* Start Hero */}
    <Container>
      <div
        className="flex justify-center items-center"
        style={{ height: "calc(100vh - 86px)" }}
      >
        <div className="text-center mt-[-20px]">
          <h1 className="text-[40px] md:text-[50px] lg:text-[80px] font-bold text-headings-l dark:text-headings-d ">
            Bring Your Ideas to Life
          </h1>
          <p className="text-xl md:text-2xl text-lighter-l dark:text-lighter-d mt-4 mb-10 px-2 md:px-4 font-regular">
            Explore boundless creativity with our interactive software tailored
            for students and educators at École Nationale Supérieure
            d&apos;Informatique (ESI). By integrating proven techniques like
            brainstorming and brain-writing.
            <span className="hidden md:inline">
              our platform fosters innovation, guiding ideas from inception to
              fruition, elevating our community.&quot;
            </span>
          </p>
          <div className="flex flex-1 items-center gap-[20px] justify-center mx-auto">
            <div className="hidden md:flex items-center justify-center   ">
              <label
                htmlFor="input-group-1"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              ></label>
              <div className="relative my-auto">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@esi.dz"
                  
                />
              </div>
            </div>
            <Link to="/mainpage">
              <button class="overflow-hidden  w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
                Get started
                <span class="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
                <span class="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
                <span class="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
                <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                  Join us!
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
    {/* End Hero */}
    {/* Start first section */}
    <Container>
      <div className="flex flex-col gap-[30px] text-center lg:flex-row lg:gap-[0px] lg:text-left items-center justify-between pt-[110px] pb-[110px] ">
        <div className="flex-1">
          <h2 className="text-[30px] md:text-[40px] lg:text-[50px] font-bold text-headings-l dark:text-headings-d">
            Brainstorming
          </h2>
          <p className="text-xl md:text-2xl text-normal-l dark:text-normal-d mt-4 mb-10   font-regular">
            Our platform fosters a collaborative environment for brainstorming,
            a technique aimed at generating innovative ideas and solutions
            collectively. Here, participants engage in open sharing of thoughts,
            free from criticism, with the goal of generating a diverse array of
            ideas. Emphasizing creativity, our platform encourages exploration
            of all possibilities before proceeding to evaluate and refine the
            ideas generated.
          </p>
          {/*
            <button
            type="button"
            className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-4  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Learn More
            <FontAwesomeIcon icon={faArrowRight} size="lg" className="ml-2" />
          </button>


*/}

          <button class="flex items-center bg-blue-500  gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3">
            Learn more
            {/*

<svg
              class="w-5 h-5"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <path
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
*/}
            <FontAwesomeIcon icon={faArrowRight} size="lg" className="ml-2" />
          </button>
        </div>

        <img src={illustration1} alt="illustration" className="w-100px" />
      </div>
    </Container>
    {/* End first section */}
    {/* Start second section */}
    <Container>
      <div className="flex flex-col-reverse gap-[30px] lg:gap-[0px]  text-center lg:flex-row  lg:text-left items-center justify-between pt-[110px] pb-[110px] ">
        <img src={illustration2} alt="illustration" className="w-100px" />
        <div className="flex-1">
          <h2 className="text-[30px] md:text-[40px] lg:text-[50px] font-bold text-headings-l dark:text-headings-d">
            Brain-writing
          </h2>
          <p className="text-xl md:text-2xl text-normal-l dark:text-normal-d mt-4 mb-10 font-regular">
            Introducing Brainwriting, a distinctive feature of our platform,
            where participants engage in a dynamic brainstorming technique.
            Here, individuals jot down their ideas on paper or digital platforms
            independently, fostering a wealth of diverse insights. Subsequently,
            these ideas are circulated among participants for collaborative
            development and refinement, enhancing creativity and innovation.
          </p>{" "}
          {/*

<button
type="button"
className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-4  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
>
Learn More
<FontAwesomeIcon icon={faArrowRight} size="lg" className="ml-2" />
</button>
*/}
          <button class="flex items-center bg-blue-500  gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3">
            Learn more
            {/*

<svg
              class="w-5 h-5"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <path
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
*/}
            <FontAwesomeIcon icon={faArrowRight} size="lg" className="ml-2" />
          </button>
        </div>
      </div>
    </Container>

    {/* End second section */}
    {/* Start third section */}
    <Container>
      <div className="flex flex-col text-center gap-[30px] lg:gap-[0px] lg:flex-row lg:text-left items-center justify-between pt-[110px] pb-[110px] ">
        <div className="flex-1">
          <h2 className="text-[30px] md:text-[40px] lg:text-[50px] font-bold text-headings-l dark:text-headings-d">
            Empowering Collaboration
          </h2>
          <p className="text-xl md:text-2xl text-normal-l mt-4 mb-10 dark:text-normal-d  font-regular">
            ESI Brain facilitates collaboration through intuitive tools and
            seamless communication channels, enabling teams to work efficiently
            and exchange ideas effortlessly. With shared workspaces and
            integrated chat features, collaboration has never been easier.
          </p>
          {/*
            <button
            type="button"
            className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-4  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Learn More
            <FontAwesomeIcon icon={faArrowRight} size="lg" className="ml-2" />
          </button>


*/}
          <button class="flex items-center bg-blue-500  gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3">
            Learn more
            {/*

<svg
              class="w-5 h-5"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <path
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
*/}
            <FontAwesomeIcon icon={faArrowRight} size="lg" className="ml-2" />
          </button>
        </div>

        <img src={illustration3} alt="illustration" className="w-100px" />
      </div>
    </Container>
    {/* End third section */}
    {/* Start fourth section */}
    <Container>
      <div className="flex flex-col-reverse gap-[30px] lg:gap-[0px] text-center lg:flex-row lg:text-left items-center justify-between pt-[110px] pb-[130px] ">
        <img src={illustration4} alt="illustration" className="w-100px" />
        <div className="flex-1">
          <h2 className="text-[30px] md:text-[40px] lg:text-[50px] font-bold text-headings-l dark:text-normal-d">
            Unlocking Creativity
          </h2>
          <p className="text-xl md:text-2xl text-normal-l mt-4 mb-10   font-regular dark:text-normal-d">
            Unlocking Creativity with ESI Brain. Our platform empowers users to
            unleash their creativity through intuitive tools and seamless
            collaboration. From brainstorming to idea refinement, ESI Brain
            facilitates a dynamic ideation process where innovation
            thrives.&quot;
          </p>
          <button class="flex items-center bg-blue-500  gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3">
            Learn more
            {/*

<svg
              class="w-5 h-5"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <path
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
*/}
            <FontAwesomeIcon icon={faArrowRight} size="lg" className="ml-2" />
          </button>
        </div>
      </div>
    </Container>
    {/* Start fourth section */}
    {/* Start footer */}
    {/* We can add our names on the footer */}
    <footer className="bg-main-dark dark:bg-main-light w-full mt-[40px] py-2">
      <Container>
        <div className="flex flex-row gap-5 md:gap-10 items-center justify-center">
          <img src={logoLight} alt="logo" className="w-[60px] md:w-[80px] " />
          <p className="text-center text-lighter-d dark:text-lighter-l">
            Designed and built with all the love in the world by ESI students
          </p>
        </div>
      </Container>
    </footer>
    {/* End footer */}
  </div>
);

export default Main;
