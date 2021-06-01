import React,{useEffect} from "react";
import "../Login.css";
import axios from 'axios';


export default function View() {

    const [patients,setPatients]=React.useState([]);

      useEffect(()=>{
        
          
            axios.get("http://localhost:9000/users/admin/viewusers")
            .then((res,i)=>{
                const patient=res.data;
                setPatients(patient)
    
            });
            
          
      }) 
    
    return <div> <div style={{ backgroundColor: "#F8F8F8" }}>
      <div
        style={{
          paddingLeft: "12%",
          paddingRight: "12%",
          paddingTop: "5%",
          paddingBottom: "5%"
        }}
      >
        <div
          style={{
            border: "1px solid #DCDCDC",
            backgroundColor: "#fff",
            padding: "7%"
          }}
        >
          <h1>View Users</h1>
          <ul>
              {patients.map(person => <li>{person.username}</li>)}
          </ul>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left"
            }}
          >
          
          </div>
        </div>
      </div>
    </div>
    </div>;
  }
  