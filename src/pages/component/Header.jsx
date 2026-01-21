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