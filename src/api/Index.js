const url="https://hedb.herokuapp.com/api"
export const setHeader=()=>{
    const header={
       headers:{
        "x_auth_token":localStorage.getItem("token")

       } 
    }
    return header;
   

}
export default url