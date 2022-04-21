import React from "react";


const Actorcard = ({data}) => {
  return (
    <div>
      <div class="card" style={{width: "18rem"}}>
        <div class="card-body">
          <p class="card-text">
           {data.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Actorcard;
