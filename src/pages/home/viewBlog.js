import React, { useState, useEffect } from "react";
import "./home.css";
import { Row, Col, Table } from "reactstrap";
import axios from "../../defaults/axiosConf";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

export default function ViewBlog() {
  const [blogObj, setBlogObj] = useState(null);
  var rows;
  useEffect(() => {
    axios
      .get("api/blog/getAllBlogs")
      .then((res) => {
        setBlogObj(res.data);
      })
      .catch((err) => {});
  }, []);
  if (blogObj == null) {
    rows = <Spinner />;
  } else {
    console.log(`blogObj`, blogObj);
    if (Object.keys(blogObj).length > 0) {
      rows = blogObj.map((b, i) => (
        <>
          <tr>
            <th scope="row">{i + 1}</th>

            <td>{b.title}</td>
            <td>{b.preDesc}</td>
            <td>{b.publishedDate}</td>
            <td>{b.keyWord}</td>
            <td>{b.authorName}</td>

            <td>
              <Link to={"/blog/" + b._id} className="btn btn-primary">
                View
              </Link>
            </td>
            <td>
              <Link to={"/editBlog/" + b._id} className="btn btn-primary">
                Edit
              </Link>
            </td>
            <td>
              <button
                onClick={() => {
                  axios
                    .post("api/blog/deleteBlog", { id: b._id })
                    .then((res) => {
                      console.log("data", res);
                      window.location.reload();
                    })
                    .catch((err) => {});
                }}
              >
                Delete
              </button>
              {/* <Link to={"/deleteBlog/" + b._id} className="btn btn-primary">
                Delete
              </Link> */}
            </td>
          </tr>
        </>
      ));
    }
  }

  return (
    <>
      <Row className="pt-4">
        <div className="col-centered">
          {/* <Col sm="12" md="6" lg="6" className="col-centered">
          <div className="col-centered">
           
            <Row className="pt-4">
              <Col
                sm="12"
                md="6"
                lg="6"
                className="col-centered d-flex justify-content-center"
              >
             
                {<EncForm />}
              </Col>
            </Row>
          </div>
        </Col> */}

          <Table>
            <thead>
              <tr>
                <th>Blog ID</th>
                <th>Title</th>
                <th>Predescription</th>
                <th>Publish Date</th>
                <th>Keyword</th>
                <th>Author</th>
                <th>View Blog</th>
                <th>Edit Blog</th>
                <th>Delete Blog</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </div>
      </Row>
    </>
  );
}
