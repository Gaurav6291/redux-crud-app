import Contacts from "./components/contacts/Contacts";
import Navbar from "./components/navbar/Navbar";
import "./styles/App.scss";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from "./components/contacts/AddContact";
import EditContacts from "./components/contacts/EditContacts";

function App() {
  return (
    <Provider store={store}>
      <Router>
      <h1 className="text-primary">
        <Navbar />
        <div className="container">
          <div className="py-3">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contacts/add" component={AddContact} />
              <Route exact path="/contacts/edit/:id" component={EditContacts} />
            </Switch>
          </div>
        </div>
      </h1>
      </Router>
    </Provider>
  );
}

export default App;
