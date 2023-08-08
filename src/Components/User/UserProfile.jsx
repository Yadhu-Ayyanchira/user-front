import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Card,
  Row,
  Col,
  Image,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { UpdateImage } from "../../Api/UserApi";
import { setUserDetails } from "../../Redux/User/UserSlice";

function UserProfile() {
  const { id, name, email, mob, image } = useSelector((state) => state.user);
  const [profilePicture, setProfilePicture] = useState(null);
  const [img, setImg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handlePictureUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setImg(selectedFile);
      setProfilePicture(URL.createObjectURL(selectedFile));
    }
  };

  const updateImage = async (e) => {
    e.preventDefault();
    const response = await UpdateImage(id, img);
    if (response.data.updated) {
      dispatch(
        setUserDetails({
          id: response.data.data._id,
          name: response.data.data.name,
          email: response.data.data.email,
          mob: response.data.data.mob,
          image: response.data.data.image,
        })
      );
      setShowModal(false); // Close the modal after updating
    }
  };

  return (
    // ... Your JSX for the user profile ...
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Row>
            <Col md={4}>
              <Image
                style={{ width: "200px", height: "200px" }}
                src={
                  image
                    ? `/images/${image}`
                    : "https://cdn-icons-png.flaticon.com/512/138/138659.png?w=740&t=st=1691399301~exp=1691399901~hmac=362f105791e4d80a3bb0109f64d0ca7fb46cfed6bd7afafe641b410430cb2973"
                } // Provide a default image URL
                alt="Profile"
                fluid
                rounded
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
              <Button onClick={() => setShowModal(true)} variant="primary">
                Update Profile
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile Picture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handlePictureUpload}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={updateImage}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default UserProfile;
