/*import Email from "./pages/Email";
import Settings from "./pages/Settings";
import Erreur from "./pages/Erreur";
import Main from "./pages/Main";
import Signupage from "./pages/Signupage";
import LogIn from "./pages/LogIn";
import ForgotPasswd from "./pages/ForgotPasswd";
import ChangePasswd from "./pages/ChangePasswd";*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import LogIn from "./pages/LogIn";
import Signupage from "./pages/Signupage";
import ForgotPasswd from "./pages/ForgotPasswd";
import Email from "./pages/Email";
import PageMain from "./pages/PageMain";
import Settings from "./pages/Settings";
import ModalCreateStormProject from "./components/ModalCreateStormProject ";
import PopupButton from "./pages/PopupButton";
import ModalCreateWriteProject from "./components/ModalCreateWriteProject";
import BarList from "./components/BarList";
import StormingList from "./components/StormingList";
import StormingPart1 from "./pages/StormingPart1";
import WhiteBoard from "./pages/WhiteBoard";


/*
<BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/Signup" element={<Signupage />} />
          <Route path="/forgot" element={ <ForgotPasswd/>} />
          <Route path="/mail" element={ <Email/>} />
          <Route path="/mainpage" element={ <PageMain/>} />
          <Route path="/settings" element={ <Settings/>} />

          
        </Routes>
      </BrowserRouter>
      SignUpForm
*/
const App = () => {
  return (
    <>

    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/Signup" element={<Signupage />} />
        <Route path="/forgot" element={<ForgotPasswd />} />
        <Route path="/mail" element={<Email />} />
        <Route path="/mainpage" element={<PageMain />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/stormingpart1" element={<StormingPart1/>} />
      </Routes>
    </BrowserRouter>


  
      



      
    </>
  );
};

export default App;
