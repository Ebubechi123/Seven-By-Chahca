import "./Button.css"
const Button=({
    children,
    onClick,
    styles,
    className,
    type
})=>{
    return(
        <>
        <button onClick={onClick} style={styles} className={className} type={type}>
            {children}
        </button>
        </>
    )
}


export default Button;