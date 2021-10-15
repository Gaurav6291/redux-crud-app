import { SelectAll } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  clearAllContacts,
  deleteAll,
  selectAllContacts,
} from "../../Redux/actions/addContacts/addContact_action";
import "../../styles/App.scss";
import Contact from "./Contact";
const Contacts = () => {
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);
  const contacts = useSelector((state) => state.contact.contacts);
  const selectedContacts = useSelector(
    (state) => state.contact.selectedContacts
  );
  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllContacts(contacts.map((contact) => contact.id)));
    } else {
      dispatch(clearAllContacts());
    }
  }, [selectAll]);
  return (
    <div>
      {selectedContacts.length > 0 ? (
        <button className="btn btn-danger mb-3" onClick={() => dispatch(deleteAll())}>Delete All</button>
      ) : null}
      <table className="table shadow table-striped">
        <thead className="bg-danger text-white">
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  type="checkbox"
                  className="custom-control-input"
                  value={selectAll}
                  onClick={() => setSelectAll(!selectAll)}
                />
                <label
                  htmlFor="selectAll"
                  className="custom-control-label"
                ></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contacts, index) => {
            return (
              <tr key={index}>
                <Contact contacts={contacts} selectAll={selectAll} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
