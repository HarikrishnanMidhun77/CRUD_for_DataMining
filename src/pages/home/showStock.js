import React, { useState, useEffect } from "react";
import "./home.css";
import { Row, Col, Table } from "reactstrap";
import axios from "../../defaults/axiosConf";
import Spinner from "./Spinner";
import { useParams } from "react-router-dom";

export default function ShowStock() {
  const [stockObj, setStockObj] = useState(null);
  var rows;
  const params = useParams();
  console.log(`params`, params);
  useEffect(() => {
    axios
      .post("api/stock/getStock", { id: params.id })
      .then((res) => {
        console.log("data", res);
        setStockObj(res.data[0]);
      })
      .catch((err) => {});
  }, []);
  if (stockObj == null) {
    rows = <Spinner />;
  } else {
    console.log(`stockObj`, stockObj);
    if (Object.keys(stockObj).length > 0) {
      rows = (
        <>
          <h1>{stockObj.name}</h1>
          <h6>Latest Price : {stockObj.latest_price}</h6>
          <h6>Previous Price : {stockObj.previous_price}</h6>
          <h6>Low : {stockObj.low}</h6>
          <h6>High : {stockObj.high}</h6>
          <h6>Percentage : {stockObj.percentage}</h6>
          <h6>Time : {stockObj.time}</h6>
          <h6>Date : {stockObj.date}</h6>
        </>
      );
    }
  }

  return (
    <>
      <Row className="pt-4">
        <div className="col-centered">
          <a href="/">View All Stocks</a>
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
