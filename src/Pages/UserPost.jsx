
import { useParams } from "react-router-dom";
import Layout from "../Components/Layout";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {Card ,CardTitle  ,CardText, Row, Col} from 'reactstrap'



const UserPost = () => {
  const { id } = useParams();
  const [cause, setCause] = useState([]);

  const getData= async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
    setCause(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <Row>
       {
        cause && cause.map((item)=>{
            return <Col xs={3}><Card
            body
            className="my-2"
            style={{
              width: '18rem'
            }}
          >
            <CardTitle tag="h5">
             {item.title}
            </CardTitle>
            <CardText>
           {item.body}
            </CardText>
          </Card></Col>
        })
       }</Row>
    </Layout>
  );
};

export default UserPost;
