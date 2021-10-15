import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { deleteContact } from "../../Redux/actions/addContacts/addContact_action";
import { useDispatch } from "react-redux";


const Contact = ({ contacts, selectAll }) => {
  const dispatch = useDispatch();
  const { name, phone, email, id } = contacts;
  return (
    <>
      <td>
        <div className="custom-control custom-checkbox">
          <input checked={selectAll} type="checkbox" className="custom-control-input" />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <th>
        <Avatar name={name} size="40" round={true} className="me-2" />
        {name}
      </th>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="action">
        <Link to={`/contacts/edit/${id}`}>
          <span className="material-icons me-2">edit</span>
        </Link>
        
          <span className="material-icons" onClick={() => dispatch(deleteContact(id))}>remove_circle</span>
        
      </td>
    </>
  );
};

export default Contact;
