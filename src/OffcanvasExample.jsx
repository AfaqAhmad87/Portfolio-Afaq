import Container from "react-bootstrap/Container";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import "./index.css";

function OffcanvasExample() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleToggleOffcanvas = () => setShowOffcanvas((prev) => !prev);

  const handleNavItemClick = () => {
    // Close the Offcanvas when a nav item is clicked
    setShowOffcanvas(false);
  };
  const home = useNavigate();
  const about = useNavigate();
  const skills = useNavigate();
  const edu = useNavigate();
  return (
    <section className="lg:w-[80%] sm:w-[100%] lg:m-auto ">
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="  mb-3">
          <Container fluid>
            <a id="text">Afaq.</a>
            <Navbar.Toggle
              onClick={handleToggleOffcanvas}
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="bg-[#39bda7]  "
            />
            <Navbar.Offcanvas
              show={showOffcanvas}
              onHide={handleCloseOffcanvas}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className=" text-[white] bg-[#080505]"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <a id="text">Afaq.</a>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  className="justify-content-end flex-grow-1 pe-3 gap-4"
                  onClick={handleNavItemClick}
                >
                  <Nav.Link
                    onClick={() => home("/")}
                    className="text-slate-200 hover:text-teal-400"
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => about("ABOUTME")}
                    className="text-slate-200 hover:text-teal-400"
                  >
                    About ME
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => skills("SKILLS")}
                    className="text-slate-200 hover:text-teal-400"
                  >
                    Skills
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => edu("education")}
                    className="text-slate-200 hover:text-teal-400 "
                  >
                    Education
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      {/* {["sm"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className=" mb-3 w-[100%] m-auto pt-2 bg-black"
          id="navbar"
        >
          <Container fluid>
            <a id="text">Afaq.</a>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="bg-[#39bda7]  "
            />
            <Navbar.Offcanvas
              className="bg-black  border-red-600"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Body className="">
                <Nav
                  className="justify-content-end flex-grow-1 pe-3 gap-9"
                  id="text2 "
                >
                  <Nav.Link
                    onClick={() => home("/")}
                    className="text-slate-200 hover:text-teal-400"
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => about("ABOUTME")}
                    className="text-slate-200 hover:text-teal-400"
                  >
                    About ME
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => skills("SKILLS")}
                    className="text-slate-200 hover:text-teal-400"
                  >
                    Skills
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => edu("education")}
                    className="text-slate-200 hover:text-teal-400 "
                  >
                    Education
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))} */}
    </section>
  );
}

export default OffcanvasExample;
