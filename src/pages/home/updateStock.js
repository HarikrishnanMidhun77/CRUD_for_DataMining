import React, { useState, useEffect } from "react";
import {
  Button,
  FormFeedback,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  FormText,
} from "reactstrap";
import OptionSelector3 from "../../components/OptionSelector3";
import axios from "../../defaults/axiosConf";
import { useParams } from "react-router-dom";

export default function EditStock() {
  const [stockObj, setStockObj] = useState("");
  const [name, setName] = useState("");
  const [latestPrice, setLatestPrice] = useState("");
  const [previousPrice, setPreviousPrice] = useState("");
  const [low, setLow] = useState("");

  const [high, setHigh] = useState("");
  const [percentage, setPercentage] = useState("");
  const [time, setTime] = useState("");

  const [date, setDate] = useState("");

  // useEffect(() => {
  //   setRes(res);
  // }, [res]);
  const params = useParams();
  console.log(`params`, params);
  useEffect(() => {
    axios
      .post("api/stock/getStock", { id: params.id })
      .then((res) => {
        console.log("data", res);
        setStockObj(res.data[0]);
        var b = res.data[0];
        setName(b.name);
        setLatestPrice(b.latest_price);
        setPreviousPrice(b.previous_price);
        setLow(b.low);
        setHigh(b.high);
        setPercentage(b.percentage);
        setTime(b.time);
        setDate(b.date);
      })
      .catch((err) => {});
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStock = {
      name: name,
      latest_price: latestPrice,
      previous_price: previousPrice,
      low: low,
      high: high,
      percentage: percentage,
      time: time,
      date: date,
    };
    console.log(`newStock`, newStock);
    axios
      .post("api/stock/editStock", { id: params.id, StockObj: newStock })
      .then((res) => {
        console.log(res);
        window.location.href = "/";
      })
      .catch((err) => {});
    console.log(`name`, name);
  };
  return (
    <div>
      <Row className="pt-4">
        <Col
          sm="12"
          md="6"
          lg="6"
          className="col-centered d-flex justify-content-center"
        >
          <Form onSubmit={handleSubmit} className="width-auto">
            <a href="/">View All Stocks</a>
            <h1>Add Stock</h1>
            <FormGroup>
              <Label for="name">Name</Label>

              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                id="name"
                placeholder="name"
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleText">Latest Price </Label>

              <Input
                type="text"
                value={latestPrice}
                onChange={(e) => setLatestPrice(e.target.value)}
                name="latestPrice"
                id="latestPrice"
              />
              <FormFeedback>Please enter valid text</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Previous Price </Label>

              <Input
                type="text"
                value={previousPrice}
                onChange={(e) => setPreviousPrice(e.target.value)}
                name="previousPrice"
                id="previousPrice"
              />
              <FormFeedback>Please enter valid text</FormFeedback>
            </FormGroup>

            <FormGroup>
              <Label for="low">Low</Label>

              <Input
                type="text"
                value={low}
                onChange={(e) => setLow(e.target.value)}
                name="low"
                id="low"
                placeholder="low"
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleText">High </Label>

              <Input
                type="text"
                value={high}
                onChange={(e) => setHigh(e.target.value)}
                name="high"
                id="high"
              />
              <FormFeedback>Please enter valid text</FormFeedback>
            </FormGroup>

            <FormGroup>
              <Label for="percentage">Percentage</Label>

              <Input
                type="text"
                value={percentage}
                onChange={(e) => setPercentage(e.target.value)}
                name="percentage"
                id="percentage"
                placeholder="percentage"
              />
            </FormGroup>
            <FormGroup>
              <Label for="time">Time</Label>
              <Input
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                name="time"
                id="time"
                placeholder="time"
              />
            </FormGroup>

            <FormGroup>
              <Label for="date">Date</Label>

              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                name="date"
                id="date"
              />
            </FormGroup>

            <FormGroup>
              <Input
                style={{
                  backgroundColor: "#3e68ff",
                  color: "#fff",
                  borderRadius: "8px",
                }}
                className="button"
                type="submit"
                value="Update"
                name="submit"
                id="submit"
                placeholder="submit"
              />
            </FormGroup>
          </Form>
        </Col>
      </Row>
      {/* <Label for="exampleText">Encrypted Text</Label>
      <Input type="textarea" value={res} disabled={true} name="res" id="res" /> */}
    </div>
  );
}
