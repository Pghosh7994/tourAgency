import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import StatusApprove from "./StatusApprove";
const StatusController = () => {
  const [myOrder, setMyOrder] = useState();
  useEffect(() => {
    const url = "https://radiant-depths-78322.herokuapp.com/orders";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
  }, []);

  return (
    <Container>
      <h1 className="mt-5 text-success">Manage All Orders</h1>
      <Row xs={1} md={2} className="g-5 mt-3">
        {myOrder?.map((order) => (
          <StatusApprove key={order._id} order={order}></StatusApprove>
        ))}
      </Row>
    </Container>
  );
};

export default StatusController;
