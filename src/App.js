import React from "react";
import Sidepanel from "./Sidepanel.js";
import Taskbox from "./Taskbox.js";

function App() {
  return (
    <div className='full-height'>
      <div className="row full-height">
        <div className="col-3 p-5 bg-primary text-light">
          <h4>Tasks</h4>
          <hr></hr>
          <Sidepanel />
        </div>
        <div className="col-9 p-5">
          <Taskbox />
        </div>
      </div>
    </div>
  );
}

export default App;
