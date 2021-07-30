const Input =({
    type,
    onChange,
    className,
    placeholder
})=>{
    return(
        <input placeholder={placeholder} onChange={onChange} className={className} type={type} />
    )
}


export default Input