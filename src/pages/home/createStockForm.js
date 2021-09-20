import React, { useState, useEffect } from "react";
import {
  Button,
  FormFeedback,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import OptionSelector3 from "../../components/OptionSelector3";
import { ecncryptText } from "../../functions/encrypt";
import axios from "../../defaults/axiosConf";
export default function CreateStockForm(props) {
  const [text, setText] = useState("");
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
  const handlePswd = (p) => {};

  const handleText = (t) => {
    setText(t);
  };

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

    axios
      .post("api/stock/addStock", { StockObj: newStock })
      .then((res) => {
        console.log(res);
        window.location.href = "/";
        // props.history.push("/");
      })
      .catch((err) => {});
    console.log(`name`, name);
  };
  return (
    <div>
      <a href="/">View All Stocks</a>
      <h1>Add Stock</h1>
      <Form onSubmit={handleSubmit} className="width-auto">
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
            placeholder="latestPrice"
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
            placeholder="previousPrice"
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
            placeholder="high"
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
            type="time"
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
            value="Create"
            name="submit"
            id="submit"
            placeholder="submit"
          />
        </FormGroup>
      </Form>
      {/* <Label for="exampleText">Encrypted Text</Label>
      <Input type="textarea" value={res} disabled={true} name="res" id="res" /> */}
    </div>
  );
}
