import logo from './../assets/logo_light.png';
import illustration1 from './../assets/illustration1.png';
import ChangePasswdForm from './../components/ChangePasswdForm';

function ChangePasswd() {
    return (
        <div className="mx-auto px-4 py-8 bg-main-light dark:bg-main-dark">
            <img src={logo} alt="logo" className="top-5 left-5 bg-main-light dark:bg-main-dark"/>
            <div className="flex mx-auto justify-center">
                <img src={illustration1} alt="illustration1" className="hidden sm:block bg-main-light dark:bg-main-dark max-h-[534px] max-w-[469px] mt-40"/>
                <ChangePasswdForm />
            </div>
        </div>
    );
}

export default ChangePasswd;