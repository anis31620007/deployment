import Container from "../components/Container";
import Err from "../components/Err";
import Navbar from "../components/Navbar";

const Erreur = () => {
  return (
    <div className="px-14  bg-main-light dark:bg-main-dark w-full h-screen ">
      <Container>
        <div className="w-full">
          <Navbar />
          <Err />
        </div>
      </Container>
    </div>
  );
};

export default Erreur;
