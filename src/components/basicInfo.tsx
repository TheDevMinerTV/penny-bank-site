import '../App.css'
import Pfp from "./pfp.tsx";
import {ageFromDateOfBirthday} from "./utils.tsx";

function BasicInfo() {


    return (
        <>
            <div className="basicInfo">
                <Pfp></Pfp>
                <div className="infoText">Hai, I'm Penny! I am {ageFromDateOfBirthday(new Date(2001, 10, 18))} years old and currently attending university for computer science. I made this
                    page as a simple landing for my domain. If you would like to see some of what I have done you can
                    checkout my Github page <a href="https://github.com/TanukiPenny">here!</a>
                </div>
            </div>
        </>
    )
}

export default BasicInfo