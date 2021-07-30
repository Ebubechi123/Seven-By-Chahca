const Input =({
    type,
    onChange,
    className,
    placeholder,
    required
})=>{
    return(
        <input required={required} placeholder={placeholder} onChange={onChange} className={className} type={type} />
    )
}


export default Input