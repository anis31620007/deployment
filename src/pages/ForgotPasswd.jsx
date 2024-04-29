import logo from "../assets/logo_light.png";
import illustration1 from "../assets/illustration1.png";
import ForgotPasswdForm from "../components/ForgotPasswdForm";

function ForgotPasswd() {
  return (
    <div className="mx-auto pt-3 px-4 md:px-10 lg:px-14 bg-main-light dark:bg-main-dark">
      <a href="/">
        <img
          src={logo}
          alt="logo"
          className=" w-[100px] bg-main-light dark:bg-main-dark"
        />
      </a>
      <div className="flex mx-auto justify-center">
        <img
          src={illustration1}
          alt="illustration1"
          className="hidden sm:block bg-main-light dark:bg-main-dark max-h-[534px] max-w-[469px] mt-40"
        />
        <ForgotPasswdForm />
      </div>
    </div>
  );
}

export default ForgotPasswd;
