import CryptHome from "./pages/home/crypt-home";
import ViewBlog from "./pages/home/viewBlog";
import ShowBlog from "./pages/home/showBlog";
import EditBlog from "./pages/home/editBlog";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={(props) => <CryptHome {...props} />} />
        <Route
          path="/allBlogs"
          exact
          render={(props) => <ViewBlog {...props} />}
        />
        <Route
          path="/blog/:id"
          exact
          render={(props) => <ShowBlog {...props} />}
        />
        <Route
          path="/editBlog/:id"
          exact
          render={(props) => <EditBlog {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
