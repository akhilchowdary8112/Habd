import { toast} from "react-toastify"
import jwtDecode from "jwt-decode"
const intialstate={
    token:localStorage.getItem("token"),
    name:"",
    email:"",
    password:"",
    _id:""
}
const authreducer=(state=intialstate,action)=>{
    switch(action.type){
        case"user_load":
        case"signIn_Todo":
        case "signUp_Todo":

              const user=jwtDecode(action.token)
              toast("welcome...",{
                position:toast.POSITION.BOTTOM_RIGHT
              })
              return{
                ...intialstate,
                token:action.token,
                name:user.name,
                email:user.email,
                _id:user._id
              }
              
        case"sign_Out":
        toast("goodBye...",{
          position:toast.POSITION.BOTTOM_RIGHT
        })
              localStorage.removeItem("token")
              return{
    token:null,
    name:null,
    email:null,
    password:null,
    _id:null
              }

              default:
                return state

    }

}
export default authreducer