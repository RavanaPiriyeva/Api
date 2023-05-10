
import { useParams } from "react-router-dom";
import Layout from "../Components/Layout";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardTitle, CardText, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, } from 'reactstrap'

const UserPost = () => {
  const { id } = useParams();
  const [cause, setCause] = useState([]);
  const [editId, setEditId] = useState();
  const [modalEdit, setModalEdit] = useState(false);
  const [modalCreate, setModalCreate] = useState(false);
  const [data, setData] = useState({
    title: "",
    body: "",
  });
  const [newData, setNewData] = useState({
    title: "",
    body: "",
  });
  const toggleCreate = () => setModalCreate(!modalCreate);
  const toggleEdit = () => setModalEdit(!modalEdit);

  const getData = async () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((res) => {
        setCause(res.data)
        console.log(id)
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, [id]);

  const remove = (i) => {

    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${i}`)
      .then(() => {
        getData()
        console.log(i)
      })
      .catch((error) => console.log(error));
  }

  const add = () => {
    setModalCreate(!modalCreate);
    let newPost = {
      title: newData.title,
      body: newData.body,
    };

    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, newPost)
      .then(() => getData())
      .catch((error) => console.log(error));

  }

  const edit = (i) => {
    setEditId(i);
    setModalEdit(!modalEdit);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setData({ title: res.data.title, body: res.data.body }))
      .catch((error) => console.log(error));

  }

  const changeData = (name, value) => {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const save = () => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${editId}`, data)
      .then(() => getData())
      .catch((error) => console.log(error));

    setModalEdit(!modalEdit);
  };
  return (
    <Layout>
      <div style={{ textAlign: 'end', padding: 20 }}> <Button color="success" onClick={() => add()} ><i class="fa-solid fa-plus"></i> Create</Button></div>
      <Row>
        {
          cause && cause.map((item) => {
            return <Col xs={3} style={{ padding: 10, position: "relative" }}>
              <Card body className="my-2" style={{ width: '18rem', height: '100%',paddingBottom:30 ,backgroundColor:'#00000012' }} >
                <CardTitle tag="h5">
                  {item.title}
                </CardTitle>
                <CardText>
                  {item.body}
                </CardText>
                <div style={{ position: "absolute", bottom: 10, left: 10 }}>
                  <Button color="secondary" style={{ margin: '0 10px 0 0' }} onClick={() => edit(item.id)} ><i class="fa-solid fa-pen-to-square"></i> Edit</Button>
                  <Button color="danger" onClick={() => remove(item.id)} ><i class="fa-solid fa-trash"></i> Delete</Button>
                </div>
              </Card>

            </Col>
          })
        }</Row>

      <Modal isOpen={modalCreate} toggle={toggleCreate}>
        <ModalHeader toggle={toggleCreate}>Create Post</ModalHeader>
        <ModalBody>
          <Input onChange={(e) => setNewData("title", e.target.value)} value={newData.title} style={{ margin: '10px 0' }} />
          <Input type="textarea" rows="5" onChange={(e) => setNewData("body", e.target.value)} value={newData.body} style={{ margin: '10px 0' }} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={add}>  Add Data </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalEdit} toggle={toggleEdit}>
        <ModalHeader toggle={toggleEdit}>Create Post</ModalHeader>
        <ModalBody>
          <Input onChange={(e) => changeData("title", e.target.value)} value={data.title} style={{ margin: '10px 0' }} />
          <Input type="textarea" rows="5" onChange={(e) => changeData("body", e.target.value)} value={data.body} style={{ margin: '10px 0' }} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={save}> Save </Button>
        </ModalFooter>
      </Modal>

    </Layout>
  );
};

export default UserPost;
