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
        <Input placeholder={"Enter e-mail"} type={"text"} />
       <Button>Go</Button>
        </div>
    </div>
     
    </form>
    )
}


export default Form;