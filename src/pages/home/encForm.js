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
export default function EncForm() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [preDesc, setPreDesc] = useState("");
  const [publishedDate, setpublishedDate] = useState("");
  const [keyWord, setKeyWord] = useState("");

  const [description, setDescription] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [designation, setdesignation] = useState("");

  const [aboutme, setAboutme] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  // useEffect(() => {
  //   setRes(res);
  // }, [res]);
  const handlePswd = (p) => {};

  const handleText = (t) => {
    setText(t);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      title: title,
      preDesc: preDesc,
      publishedDate: publishedDate,
      keyWord: keyWord,
      description: description,
      authorName: authorName,
      designation: designation,
      aboutme: aboutme,
      email: email,
      phone: phone,
      gender: gender,
    };

    axios
      .post("api/blog/addBlog", { BlogObj: newBlog })
      .then((res) => console.log(res))
      .catch((err) => {});
    console.log(`title`, title);
  };
  return (
    <div>
      <a href="/allBlogs">View All Blogs</a>
      <a href="/" style={{ paddingLeft: "10px" }}>
        Add new Blog
      </a>
      <h1>Add Blog</h1>
      <Form onSubmit={handleSubmit} className="width-auto">
        <FormGroup>
          <Label for="title">Title</Label>

          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            id="title"
            placeholder="title"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleText">Pre description </Label>

          <Input
            type="textarea"
            value={preDesc}
            onChange={(e) => setPreDesc(e.target.value)}
            name="preDesc"
            id="preDesc"
          />
          <FormFeedback>Please enter valid text</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Published Date </Label>

          <Input
            type="date"
            value={publishedDate}
            onChange={(e) => setpublishedDate(e.target.value)}
            name="publishedDate"
            id="publishedDate"
          />
          <FormFeedback>Please enter valid text</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="title">keyWord</Label>

          <Input
            type="text"
            value={keyWord}
            onChange={(e) => setKeyWord(e.target.value)}
            name="keyWord"
            id="keyWord"
            placeholder="keyWord"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleText">description </Label>

          <Input
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            id="description"
          />
          <FormFeedback>Please enter valid text</FormFeedback>
        </FormGroup>
        <h1>About Author</h1>

        <FormGroup>
          <Label for="title">Author Name</Label>

          <Input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            name="authorName"
            id="authorName"
            placeholder="authorName"
          />
        </FormGroup>
        <FormGroup>
          <Label for="designation">designation</Label>

          <Input
            type="text"
            value={designation}
            onChange={(e) => setdesignation(e.target.value)}
            name="designation"
            id="designation"
            placeholder="designation"
          />
        </FormGroup>

        <FormGroup>
          <Label for="aboutme">About Me </Label>

          <Input
            type="textarea"
            value={aboutme}
            onChange={(e) => setAboutme(e.target.value)}
            name="aboutme"
            id="aboutme"
          />
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>

          <Input
            type="textarea"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">phone</Label>

          <Input
            type="textarea"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
            id="phone"
          />
        </FormGroup>

        <Label for="phone">Gender</Label>
        <OptionSelector3
          btn1_value="Male"
          btn2_value="Female"
          getSelectedOption={(op) => {
            console.log("option", op);
            op === 1 ? setGender("male") : setGender("female");
          }}
        />

        <FormGroup>
          <Input
            style={{
              backgroundColor: "#3e68ff",
              color: "#fff",
              borderRadius: "8px",
            }}
            className="button"
            type="submit"
            value="Submit"
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
