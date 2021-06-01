// import React from "react";
// import { BrowserView, MobileView } from "react-device-detect";
// import { Button } from "react-bootstrap";

// import { useReactToPrint } from 'react-to-print';

// import { ComponentToPrint } from './ComponentToPrint';

// import "antd/dist/antd.css";

// import "../../styles.css";

// function ViewReports() {

//   const componentRef = useRef("Dummy");
  
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   });
//   // return <div>1-Reports list 2- delete button 3- print button</div>;
//   return (
//     <div style={{ backgroundColor: "#F8F8F8" }}>
//       <BrowserView>
//         <div
//           style={{
//             paddingLeft: "12%",
//             paddingRight: "12%",
//             paddingTop: "5%",
//             paddingBottom: "5%"
//           }}
//         >
//           <div
//             className="float-container"
//             style={{
//               display: "block",
//               marginLeft: "auto",
//               marginRight: "auto",
//               border: "1px solid #DCDCDC",
//               backgroundColor: "#fff",
//               paddingBottom: "25%"
//             }}
//           >
//             <h1>Your reports?</h1>

//             <div style={{ paddingLeft: "30%" }} className="float-child"></div>
//             <div>
//               <div
//                 style={{
//                   border: "1px solid #DCDCDC",
//                   backgroundColor: "#fff",
//                   textAlign: "Left",
//                   padding: "3%"
//                 }}
//               >
//                  {/* <ComponentToPrint ref={componentRef} /> */}
      
//                 <div className="btn-toolbar">
//                   <div className="left-group">
//                     <Button href="" variant="danger">
//                       Delete
//                     </Button>
//                   </div>
//                   <div className="right-group">
//                     <Button
//                       href=""
//                       variant="warning"
//                       onClick={handlePrint}
//                     >
//                       Print
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </BrowserView>

//       <MobileView>
//         <div>
//           <div
//             style={{
//               border: "1px solid #DCDCDC",
//               backgroundColor: "#fff",
//               padding: "3%"
//             }}
//           >
//             <h1>View your reports</h1>
//             <div
//               className="float-container option-search-styles"
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 marginLeft: "10%"
//               }}
//             ></div>
//             <div
//               style={{
//                 // border: "1px solid #DCDCDC",
//                 backgroundColor: "#fff",
//                 textAlign: "right",
//                 padding: "3%"
//               }}
//             >
//               <div className="btn-toolbar">
//                 <div className="left-group">
//                   <Button href="" variant="danger">
//                     Delete
//                   </Button>
//                 </div>
//                 <div className="right-group">
//                   <Button href="" variant="warning">
//                     Print
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </MobileView>
//     </div>
//   );
// }
// export default ViewReports;
import Reacr from "react";
import Header from "../Navbar/header"
import Report from "../Reports/report"
export default function ViewReports() {
    return (
        <div>
        <Header />
        <Report />
    
        <div>Hellow Worldss</div>
        </div>
    )
}