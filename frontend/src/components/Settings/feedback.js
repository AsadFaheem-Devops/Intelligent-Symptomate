import React from "react";
import "../../styles.css";
import emailjs from 'emailjs-com';
import Header from "../Navbar/header"
export default function Feedback() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [body, setBody] = React.useState("");

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_osbt6l1', 'template_7j367il', e.target, 'user_KK7rL2TStB1DLGp46kZVd')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }
  function validate() {
    return (
      name.length > 0 &&
      email.length > 0 &&
      body.length > 0)
  }
  return (
    <div>
    <Header />

    <div>

      <form style={{ padding: "35%", paddingTop: "5%", paddingBottom: "5%" }} onSubmit={sendEmail}>

        <div class="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input name="user_name" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your name" onChange={(e) => setName(e.target.value)} />
        </div>


        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input name="user_email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
        </div>


        <div class="form-group">
          <label for="exampleFormControlInput1">Subject</label>
          <input name="subject" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Subject" onChange={(e) => setSubject(e.target.value)} />
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setBody(e.target.value)}></textarea>
        </div>
        <div style={{paddingLeft:"30%"}}>
        <input className="button button3" type="submit" value="Send"  disabled={!validate()} />
        </div>
        
      </form>

    </div>
    </div>
  );
}