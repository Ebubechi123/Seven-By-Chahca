import Button from "../Button/Button"
import Input from "./Input"
import "./Input.css"

const Form =()=>{
    return(
     
     <form onSubmit={(e)=>{
        e.preventDefault()
    }}>
          <div className="form-input">
        <div className="root">
        <Input required  placeholder={"Enter e-mail"} type={"email"} />
       <Button>Go</Button>
        </div>
    </div>
     
    </form>
    )
}


export default Form;