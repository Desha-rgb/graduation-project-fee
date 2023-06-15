import React from "react";
import TemperatureGraph from "./TemperatureGraph";
import Clock from "./Clock";
import VolumePlayer from "./VolumePlayer";

const Features = () => {
  return (
    <div>
      <div>
        <div style={{ marginBottom: "95px" }}>
          <TemperatureGraph />
        </div>
        <div style={{ display: "flex", marginTop: "90px" }}>
          <div style={{ flex: "1", marginLeft: "130px" }}>
            <Clock />
          </div>
          <div style={{ display: "flex", flex: "1", marginLeft: "90px" }}>
            <VolumePlayer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

// import React from "react";
// import TemperatureGraph from "./TemperatureGraph";
// import Clock from "./Clock";
// import VolumePlayer from "./VolumePlayer";

// const Features = () => {
//   return (
//     <div>
//       <div>
//         <div style={{ marginBottom: "95px" }}>
//           <TemperatureGraph />
//         </div>
//         <div style={{ display: "flex" }}>
//           <div style={{ flex: "1", marginLeft: "130px" }}>
//             <Clock />
//           </div>
//           <div style={{ display: "flex", flex: "1", marginLeft: "90px" }}>
//             <VolumePlayer />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;
