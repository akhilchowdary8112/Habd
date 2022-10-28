import { toast} from "react-toastify"
const todoreducer=(state=[],action) =>{
   switch(action.type){
    case "Update_Todo":
      toast.success("A todo is updated...",{
        position:toast.POSITION.BOTTOM_RIGHT
      })
      console.log("Hi");
      console.log(state,action.todos.data);
      return state.map((todos)=> todos._id === action.todos.data._id ? action.todos.data:todos )
    case "Get_Todo":
      return action.todos.data
    case "check_Todo":
      toast.success("A todo is completed...",{
        position:toast.POSITION.BOTTOM_RIGHT
      })
      return state.map((todos)=>todos._id === action.todos.data._id ? action.todos.data:todos )

    case "Add_Todo":
      toast.success("A todo is Added...",{
        position:toast.POSITION.BOTTOM_RIGHT
      })
        return [action.todo.data, ...state];

    case "delete_Todo":

      toast.success("A todo is deleted...",{
      position:toast.POSITION.BOTTOM_RIGHT
          })
        return state.filter((todos)=>todos._id !== action.id )
      default:
        return state;


   }
}
export default todoreducer;