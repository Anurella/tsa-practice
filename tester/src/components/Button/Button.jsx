import "./Button.css"

export default function Button ({text, onClick}) {
    return (
        <button className="button" onClick={onClick}>
            {text}
        </button>
    )
}