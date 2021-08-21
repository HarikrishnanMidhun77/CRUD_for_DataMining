import React, { useState, useEffect } from "react";
import "./home.css";
import { Row, Col, Table } from "reactstrap";
import axios from "../../defaults/axiosConf";
import Spinner from "./Spinner";
import { useParams } from "react-router-dom";

export default function ShowBlog() {
  const [blogObj, setBlogObj] = useState(null);
  var rows;
  const params = useParams();
  console.log(`params`, params);
  useEffect(() => {
    axios
      .post("api/blog/getBlog", { id: params.id })
      .then((res) => {
        console.log("data", res);
        setBlogObj(res.data[0]);
      })
      .catch((err) => {});
  }, []);
  if (blogObj == null) {
    rows = <Spinner />;
  } else {
    console.log(`blogObj`, blogObj);
    if (Object.keys(blogObj).length > 0) {
      rows = (
        <>
          <h1>{blogObj.title}</h1>
          <h6>Published : {blogObj.publishedDate}</h6>
          <h6>Keyword : {blogObj.Keyword}</h6>
          <h6>ID : {blogObj._id}</h6>

          <p>{blogObj.preDesc}</p>
          <p>{blogObj.description}</p>

          <h1>About the author</h1>
          <h6>Name : {blogObj.authorName}</h6>
          <h6>Designation : {blogObj.designation}</h6>
          <h6>Email : {blogObj.email}</h6>
          <h6>Phone : {blogObj.phone}</h6>
          <h6>gender : {blogObj.gender}</h6>
          <h6>about me : {blogObj.aboutme}</h6>
        </>
      );
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

          {rows}
        </div>
      </Row>
    </>
  );
}
