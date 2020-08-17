import React from "react";
import {useHistory} from "react-router-dom";

function ButtonBack()

{
    let history = useHistory();
    function handleClick(){
        history.goBack();
    }
  return <button onClick ={handleClick} >Go back</button>;
}

export default ButtonBack;