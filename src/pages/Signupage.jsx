import logo from "../assets/logo_light.png";
import illustration1 from "../assets/illustration1.png";
import SignUpForm from "../components/SignUpForm";

function Signupage() {
  return (
    <div className="mx-auto pt-3 px-4 md:px-10 lg:px-14 bg-main-light dark:bg-main-dark">
      <a href="/">
        <img
          src={logo}
          alt="logo"
          className="  w-[100px] bg-main-light dark:bg-main-dark"
        />
      </a>
      <div className="flex mx-auto justify-center">
        <img
          src={illustration1}
          alt="illustration1"
          className="hidden sm:block bg-main-light dark:bg-main-dark  w-5/12 max-h-[650px]"
        />
        <SignUpForm />
      </div>
    </div>
  );
}

export default Signupage;
