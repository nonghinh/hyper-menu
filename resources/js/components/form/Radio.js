function Radio({name, value, options, onChange}){
    const handleChange = (current) => {
        if (value == current) return;
        onChange(current);
    }
    return <>
        {options.map((item, index) => <div className="form-check" key={index}>
            <input className="form-check-input" type="radio" name={name} id={`radio_${name}_${item.value}`} checked={value == item.value} onChange={()=>handleChange(item.value)} />
            <label className="form-check-label" htmlFor={`radio_${name}_${item.value}`}>
                {item.label}
            </label>
        </div>)}
    </>
}

export default Radio;