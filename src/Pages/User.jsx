import React, { useState, useEffect } from "react";
import { ListGroupItemHeading, Spinner, Table ,Row ,Col} from "reactstrap";
import axios from "axios";

import Layout from '../Components/Layout'
import UsersData from "../Components/UsersData";


const User = () => {
    let initialState = {
        data: undefined,
        error: undefined,
        loading: false,
      };
    
      const [datas, setDatas] = useState(initialState);
      useEffect(() => {
        setDatas((oldData) => ({
          ...oldData,
          loading: true,
          error: undefined,
          data: undefined,
        }));
    
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then(({ data }) => {
            setDatas((oldData) => ({
              ...oldData,
              data: data,
              loading: false,
              error: undefined,
            }));
          })
          .catch((err) => {
            setDatas({ data: undefined, loading: false, error: err.toString() });
          });
      }, []);
  return (
    <Layout>
      <Row style={{padding:'20px 0'}}>
        <Col><div>
      {datas.error && <h5 color="red">Error occured ....</h5>}
      {datas.loading && <Spinner />}
      {datas.data && (
        <Table dark>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>email</th>
              <th>companyName</th>
              <th>See</th>
            </tr>
          </thead>
             <UsersData data={datas.data}></UsersData>
        </Table>
      )}
    </div></Col>
      </Row>
    </Layout>
  );
};

export default User;
