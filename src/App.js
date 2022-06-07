import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import List from "./List";
import Create from "./Create";
class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
      {/* <List/> */}
      <Create/>
      </div>
    )
  }
}
export default App;
