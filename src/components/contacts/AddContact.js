import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addContacts } from "../../Redux/actions/addContacts/addContact_action";
import {v4 as uuid} from 'uuid';
const AddContact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const history = useHistory();
    const dispatch = useDispatch();
    const createContact = (e) => {
        e.preventDefault();
        const items = {
            name: name,
            phone: phone,
            email:email,
            id:uuid()
        }
        dispatch(addContacts(items));
        history.push("/");
        console.log("name:", name, "phone:", phone, "email:", email);
    }
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => createContact(e)}>
          <div className="form-group mb-2">
            <input
                type="text" 
                className="form-control"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}   
            />
          </div>
          <div className="form-group mb-2">
            <input
                type="text" 
                className="form-control"
                placeholder="Enter Your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}   
            />
          </div>
          <div className="form-group mb-2">
            <input
                type="text" 
                className="form-control"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}   
            />
          </div>
          <button className="btn btn-primary" type="submit">
              Create Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
