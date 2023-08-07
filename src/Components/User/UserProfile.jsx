import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function UserProfile() {
  const { name, email, mob } = useSelector((state) => state.user);
  const [profilePicture, setProfilePicture] = useState(null);

  const handlePictureUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setProfilePicture(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Image
          style={{width:'200px',height:'200px'}}
            src={profilePicture || "/default-profile-picture.jpg"} // Provide a default image URL
            alt="Profile"
            fluid
            rounded
          />
          <input
            type="file"
            accept="image/*"
            onChange={handlePictureUpload}
            className="mt-3"
          />
        </Col>
        <Col md={8}>
          <h2>{name}</h2>
          <p>Email: {email}</p>
          <p>Mobile: {mob}</p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Button variant="primary">Update Profile</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default UserProfile;
