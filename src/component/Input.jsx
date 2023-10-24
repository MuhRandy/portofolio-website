const Input = ({type = "text", name, placeholder}) => {
    return ( 
        <input
            type={type}
            name={name}
            className="border border-black p-1"
            placeholder={placeholder}
          />
     );
}
 
export default Input;