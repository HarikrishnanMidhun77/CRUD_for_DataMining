import BasicPage from "./pages/home/basic-page";
import ViewStock from "./pages/home/viewStock";
import ShowStock from "./pages/home/showStock";
import UpdateStock from "./pages/home/updateStock";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={(props) => <ViewStock {...props} />} />
        <Route
          path="/createStock"
          exact
          render={(props) => <BasicPage {...props} />}
        />
        <Route
          path="/stock/:id"
          exact
          render={(props) => <ShowStock {...props} />}
        />
        <Route
          path="/updateStock/:id"
          exact
          render={(props) => <UpdateStock {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
