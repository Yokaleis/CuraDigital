import { Link } from "react-router-dom"

export function ButtonPrimary({text}) {
    return (
        <button type="button" className="bg-primary text-white font-medium py-2 px-4 rounded-md">{text}</button>
    )
}

export function ButtonSecondary({text}) {
    return (
        <button type="button" className="bg-primary bg-opacity-20 text-primary border border-primary font-medium py-2 px-4 rounded-md">{text}</button>
    )
}

export function ButtonCancel({text, link}) {
    return (
        <Link to={link}>
        <button type="button" className="bg-status-cancelado bg-opacity-20 text-black font-medium py-2 px-4 rounded-md">{text}</button>
        </Link>
    )
}
export function ButtonDisabled({text}) {
    return (
        <button type="button" className="bg-status-cancelado bg-opacity-20 text-status-cancelado font-medium py-2 px-4 rounded-md">{text}</button>
    )
}
export function ButtonWhithIcon({icon, text}) {
    return (
        <button type="button" className="flex items-center gap-3 bg-primary bg-opacity-20 text-primary border border-primary font-medium py-2 px-4 rounded-md">{icon}{text}</button>
    )
}