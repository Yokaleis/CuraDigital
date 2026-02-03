import { Link } from "react-router-dom";
import { IconArrowHeader } from "../../components/Icons/iconsSVG";

export function Header(props) {


    let { text, name } = props;
    return (
        <>
            <div className="h-[7vh] md:h-[10vh] border-b border-secondary-100 mb-10 flex items-center">
                <h1 className="font-bold text-3xl">{text}{name}</h1>
            </div>
        </>
    )
}

export function HeaderCaption(props) {
    let { text } = props;

    return (
        <div><span>{text}</span></div>

    )
}

export function HeaderSecondary(props) {


    let { text, link } = props;
    return (
        <>
            <div className="gap-4 h-[7vh] md:h-[10vh] border-b border-secondary-100 mb-10 flex items-center">
               <Link to={link}><IconArrowHeader/> </Link><h1 className="font-bold text-3xl">{text}</h1>
            </div>
        </>
)}