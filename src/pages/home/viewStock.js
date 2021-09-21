import React, { useState, useEffect } from "react";
import "./home.css";
import { Row, Col, Table, Button } from "reactstrap";
import axios from "../../defaults/axiosConf";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function ViewStock() {
  const [stockObj, setStockObj] = useState(null);
  var rows;
  useEffect(() => {
    axios
      .get("api/stock/getAllStocks")
      .then((res) => {
        setStockObj(res.data);
      })
      .catch((err) => {});
  }, []);
  if (stockObj == null) {
    rows = <Spinner />;
  } else {
    console.log(`stockObj`, stockObj);
    if (Object.keys(stockObj).length > 0) {
      rows = stockObj.map((b, i) => (
        <>
          <tr>
            <th scope="row">{i + 1}</th>
            <td>{b.name}</td>
            <td>{b.latest_price}</td>
            <td>{b.previous_price}</td>
            <td>{b.low}</td>
            <td>{b.high}</td>
            <td>{b.percentage}</td>
            <td>{b.time}</td>
            <td>{b.date}</td>

            <td>
              <Link to={"/stock/" + b._id} className="btn btn-primary">
                View
              </Link>
            </td>
            <td>
              <Link to={"/updateStock/" + b._id} className="btn btn-primary">
                Edit
              </Link>
            </td>
            <td>
              <Button
                outline
                color="danger"
                onClick={() => {
                  Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      axios
                        .post("api/stock/deleteStock", { id: b._id })
                        .then((res) => {
                          console.log("data", res);
                          window.location.reload();
                          Swal.fire(
                            "Deleted!",
                            "Your record has been deleted.",
                            "success"
                          );
                        })
                        .catch((err) => {});
                    }
                  });
                }}
              >
                Delete
              </Button>
              {/* <Link to={"/deleteStock/" + b._id} className="btn btn-primary">
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
      <Row className="pt-4 pb-4 pl-4 pr-4">
        <div className="col-centered">
          <h2
            style={{
              display: "table",
              marginTop: "50px",
              marginBottom: "25px",
              margin: "0 auto",
            }}
          >
            <b>S&P 500</b> STOCKS
          </h2>
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

          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Latest Price</th>
                <th>Previous Price</th>
                <th>Low</th>
                <th>High</th>
                <th>Percentage</th>
                <th>Time</th>
                <th>Date</th>
                <th>View Stock</th>
                <th>Edit Stock</th>
                <th>Delete Stock</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
          <div class="row justify-content-center">
            <Link
              to={"/createStock"}
              className="btn btn-primary"
              style={{ width: "25%", float: "" }}
            >
              Create Stock
            </Link>
          </div>
        </div>
      </Row>
    </>
  );
}
