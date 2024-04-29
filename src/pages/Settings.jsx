import Container from "../components/Container";
import Navbardeux from "../components/Navbardeux";
import Sett from "../components/Sett";

const Settings = () => {
  return (
    <div className="px-14  bg-main-light dark:bg-main-dark w-full h-screen">
      <Container>
        <div>
          <Navbardeux />
          <Sett />
        </div>
      </Container>
    </div>
  );
};

export default Settings;
