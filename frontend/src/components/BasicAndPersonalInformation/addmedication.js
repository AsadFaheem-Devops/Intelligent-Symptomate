import React, { useEffect } from "react";
import "../../styles.css";
import { Button } from "react-bootstrap";
import axios from 'axios';
import { BrowserView, MobileView } from "react-device-detect";
import medicine from "./medicine";
import { Progress } from "antd";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import Header from "../Navbar/header"

import medicineList from "./medicine.js";


export default function AddMedication() {

  var countries = Object.keys(medicine[0])

  const [medcine, setMedcine] = React.useState([]);
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null)
  var history = useHistory();
  var location = useLocation();
  const [msg, setMSG] = React.useState("")
  const [state, setState] = React.useState({
    suggestions: [],
    text: ""
  });
  const [data, setData] = React.useState("");
  const [items, setItems] = React.useState([]);
  const [message,setMessage]=React.useState("")
  
  useEffect(() => {
    if (location.state) {
      console.log(location)
      setUser(location.state.user);
      setToken(location.state.token)
      setMessage(message)
    } else {
      history.push('/')
    }
  }, [location, history])

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      drug: items,
    };
    console.log("---")
    console.log(data)
    console.log("---")
    axios.post('http://localhost:9000/addinfo/addmedication', data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => {
        setMessage("Medicine Added successfully!")

        console.log(res)
        if (res.status === 200) {
          history.push({
            pathname: '/addinfo/addmedication',
            state: {
              user: user,
              token: token,

            },
          });
          setItems([])
        } 
        setItems([])


      })
      .catch(res => setMSG(res.message));
  }
  const added = () =>  {
    return (
      <div>
       {message}
      </div>
    );
  }
  function validateForm() {
    return items.length > 0;
  }
  const [showResults, setShowResults] = React.useState(false)

  const onClick = () => {
    setMessage("Medicine Added Successfully")
    setShowResults(true)
  }


// NEW WORK ON SYMPTOMS SEARCH USING JSON FILE+++++++++++++++++++++____


const onTextChange = (e) => {
  const value = e.target.value;
  let suggestions = [];
  if (value.length > 0) {
    const regex = new RegExp(`^${value}`, "i");
    suggestions = countries.sort().filter((v) => regex.test(v));
    console.log(suggestions);
  }
  setState(() => ({
    suggestions,
    text: value
  }));
  setData(suggestions);
};

function selectedText(value) {
    if(items.find(function(element){
      return value == element
    })){ 
      console.log("Item already in list")
    }
    else{
      console.log("Item not in list")
    setItems([...items,value])
    setMessage("")
    }
  
  setState(() => ({
    text: value,
    suggestions: []
  }));
}

function addItem(value) {

}

function deleteItem(id) {
 console.log("id===>")
 console.log(id)
  const updatedList = items.filter((item,idi) => idi !== id);
  setItems([...updatedList])
  console.log(updatedList)
}


const renderSuggestions = () => {
  let { suggestions } = state;
  if (suggestions.length === 0) {
    return null;
  }
  return (
    <ul style={{marginLeft:"10%", height:"30vh"}}> 
      {suggestions.map((item, index) => (
        <li key={index} onClick={() => selectedText(item)}>
          {item} 
          <Button onClick={addItem} variant="warning" style={{marginLeft:"10%"}}>
        Add
    </Button>
        </li>
      ))}
    </ul>
  );
};

const { text, suggestions } = state;





  return (
    <div>
      <Header user={user} token={token} />

      <div style={{ backgroundColor: "#F8F8F8" }}>
        <BrowserView>
         
          <div
            style={{
              paddingLeft: "12%",
              paddingRight: "12%",
              //paddingTop: "3%",
              paddingBottom: "5%"
            }}
          >
            
            <div
              className="float-container-mobile "
              style={{
                border: "1px solid #DCDCDC",
                backgroundColor: "#fff",
                //padding: "7%"
              }}
            >
              <div classsName="float-child block-example border-bottom border-dark">
                <div id="notebooks" style={{ padding: "1%",margin:"5%" }}>
                
                  <h2 style={{ marginLeft:"17%" }}>Search Medicines</h2>
                  <input
                    id="query"
                    type="text"
                    onChange={onTextChange}
                    value={text}
                  />
                  
                  <div>
                    
                  <form onSubmit={handleSubmit}>
                  <Button
                    onClick={onClick}
                    block
                    style = {{color: "#0c0530", marginLeft:"15%"}}
                    variant="warning"
                    size="lg"
                    type="submit"
                    disabled={!validateForm()}
                  >
                    Add Selected Medications
                </Button>
                
                </form>
                <p  style = {{color: "#0c0530",marginLeft:"22%"}}>
                {message}
</p>



                    {renderSuggestions()}



                    {/* <Button>Suggestions: { suggestions.length}</Button> */}
                  </div>
                  
                </div>
              </div>
              <div classsName="float-child" style={{ paddingTop: "28%" }}>
                <h1>Selected Medications are:</h1>
                <div
                  style={{
                    border: "1px solid #DCDCDC",
                    backgroundColor: "#f8f8f8",
                    padding: "2%"
                  }}
                >

                {/* item mapping */} 

                  {items.map((item,index) => {



                    return (
                      <div
                        className="btn-toolbar"
                        style={{ backgroundColor: "#fff" }}
                      >
                        <div className="left-group">

                          {/* displaying selected disease here */}
                          <p style={{ fontSize: "30px" }}>
                            
                            {item}
                            
                          </p>



                          <div className="right-group">
                            <Button variant="danger" onClick={() => deleteItem(index)} >
                              Delete
                          </Button>
                          </div>



                        </div>


                      </div>
                    );
                  })}
                </div>
              </div>

              

            </div>
          </div>
        </BrowserView>
        <MobileView>
          <div
            style={{
              paddingTop: "5%",
              textAlign: "center"
            }}
          >
            <div
              style={{
                border: "1px solid #DCDCDC",
                backgroundColor: "#fff",
                padding: "7%",
                alignItems: "center"
              }}
            >
              <h5>Add medication</h5>






              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "5%",

                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <form onSubmit={handleSubmit}>
                  <label className="f-label" for="medicine">
                    Add medcine
                </label>

                  <input
                    type="text"
                    className="fname"
                    name="DOB"
                    onChange={(e) => setMedcine(e.target.value)}
                  />
                  <Button
                    block
                    size="lg"
                    type="submit"
                    disabled={!validateForm()}
                  >
                    Add
                </Button>
                <p>{message}</p>
                </form>
              </div>
            </div>



          </div>
        </MobileView>
      </div>
    </div>
  );
}
