import Container from "../components/Container";
/*import Navbar from "../components/Navbar";*/
import Succes from "../components/Succes";
import logo from "../assets/logo_light.png";


const Email = () => {
  return (
    <div className="pt-3 px-4 md:px-10 lg:px-14 bg-main-light dark:bg-main-dark w-full h-screen ">
      <Container>
        <div className="  bg-main-light dark:bg-main-dark w-full  ">
        <a href="/">
        <img
          src={logo}
          alt="logo"
          className=" w-[100px] bg-main-light dark:bg-main-dark"
        />
      </a>

          <Succes />
        </div>
      </Container>
    </div>
  );
};

export default Email;
