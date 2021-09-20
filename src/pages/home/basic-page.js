import React, { useState, useEffect } from "react";
import "./home.css";
import OptionSelector3 from "../../components/OptionSelector3";
import { Container, Row, Col, Image } from "reactstrap";
import CreateStockForm from "./createStockForm";
import DecForm from "./createStockForm";

export default function BasicPage() {
  const [option, setOption] = useState(1);
  return (
    <>
      <Row className="pt-4">
        <Col sm="12" md="6" lg="6" className="col-centered">
          <div className="col-centered">
            {/* <OptionSelector3
              btn1_value="Encrypt"
              btn2_value="Decrypt"
              getSelectedOption={(op) => {
                console.log("option", op);
                setOption(op);
              }}
            /> */}
            <Row className="pt-4">
              <Col
                sm="12"
                md="6"
                lg="6"
                className="col-centered d-flex justify-content-center"
              >
                {/* {option === 1 ? <CreateStockForm /> : <DecForm />} */}
                {<CreateStockForm />}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
}
