const counterReducer=(state,action)=>{

    switch(action){
      case "inc":
          return state+1;
      case "dec":
          return state-1;
      default:
                 


    }


}


export default counterReducer;