import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector, } from "react-redux";
import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { LogoutDetails } from "../../Redux/User/UserSlice";
import UserProfile from "./UserProfile";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, name, email, mobile } = useSelector((state) => state.user);
  const handleLogout = async (e) => {
    console.log(localStorage, "its the data");
    localStorage.removeItem("token");
    dispatch(
      LogoutDetails({
        id: "",
        name: "",
        email: "",
        mobile: "",
      })
    );
  };

  return (
    <div>
      <Navbar className="navcontainer" bg="#3bb19b" expand="lg">
        <Container>
          <Navbar.Brand href="#">User Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <div className="ms-auto">
              {localStorage.getItem("token") ? (
                <div>
                  <Navbar.Text>
                    <p className="mt-1">
                      Signed in as :{" "}
                      <span style={{ fontWeight: "bold" }}>{name}</span>
                    </p>
                  </Navbar.Text>

                  <Button
                    variant="outline-danger mx-2 rounded-2"
                    onClick={handleLogout}
                  >
                    LOG OUT
                  </Button>
                  {/* <Button
                    variant="outline-success rounded-0"
                    onClick={() => navigate("/profile")}
                  >
                    PROFILE
                  </Button> */}
                </div>
              ) : (
                <Button
                  variant="outline-primary mx-2 rounded-2"
                  onClick={() => navigate("/login")}
                >
                  LOG IN
                </Button>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      { localStorage.getItem("token") ? <UserProfile/> : ""}
    </div>
  );
}

export default Home;
