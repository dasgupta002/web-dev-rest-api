import React, { useState }from 'react';
import { Navbar, Form, Nav, FormControl, Button, Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [mathshowHide, setmathShowHide] = useState('false');
  const [mathSearch, setMathSearch] = useState('');
  const [math, setMath] = useState([]);
  const [showTrivia, setShowTrivia] = useState([]);

  const handlemathChanges = ({ target }) => {
    setMathSearch(target.value);
  }

    const mathAPISearch = async (e) => {
    e.preventDefault();
    var mathnumber = +mathSearch;
    const responsemath = await fetch(
	    `http://numbersapi.com/${mathnumber}/math?json`
	  );
	  const datamath = await responsemath.json();
	  setMath(datamath);
    const responsetrivia = await fetch(
	    `http://numbersapi.com/${mathnumber}/trivia?json`
	  );
	  const datatrivia = await responsetrivia.json();
    setShowTrivia(datatrivia);
    setmathShowHide('true');
  };

  const [yearshowHide, setyearShowHide] = useState('false');
  const [yearSearch, setYearSearch] = useState('');
  const [year, setYear] = useState([]);

  const handleyearChanges = ({ target }) => {
    setYearSearch(target.value);
  }

  const yearAPISearch = async (e) => {
    e.preventDefault();
    var year = yearSearch.toString();
    const responseyear = await fetch(
      `http://numbersapi.com/${year}/year?json`
    );
    const datayear = await responseyear.json();
    setYear(datayear);
    setyearShowHide('true');
  }

  return (
    <div className = "app-wrapper">
     <Navbar expand = "lg" variant = "dark" bg = "dark">
        <Navbar.Brand>Numbers API</Navbar.Brand>
        <Navbar.Toggle aria-controls = "basic-navbar-nav" />
        <Navbar.Collapse id = "basic-navbar-nav">
        <Nav className = "mr-auto">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Documentation</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type = "text" placeholder = "Search" className = "mr-sm-2" />
          <Button variant = "outline-success">Search</Button>
          </Form>
          </Navbar.Collapse>
      </Navbar>
      <div className = "decoration-wrapper">
        <div className = "container">
          <div className = "col-md-12 m-5">
           <div className = "card">
            <div className = "card-header">
              <Form onSubmit = { mathAPISearch }>
              <FormControl type = "number" placeholder = "Search" value = { mathSearch } onChange = { handlemathChanges }/>
              <Button variant = "danger" type = "submit" className = "mt-2">Find Magic In Numbers</Button>
              </Form>
            </div>
            { mathshowHide === 'false' ? null : (<div className = "card-body">
              <Tabs defaultActiveKey = "math" id="uncontrolled-tab-example">
                <Tab eventKey = "math" title = "Math">
                  <p className = "mt-4">{ math.text }</p>
                </Tab>
                <Tab eventKey = "trivia" title = "Trivia">
                  <p className = "mt-4">{ showTrivia.text }</p>
                </Tab>
              </Tabs>
             </div>
            )}
           </div>
          </div>
          <div className = "col-md-12 m-5">
            <div className = "card h-100">
              <div className = "card-header">
                <Form onSubmit = { yearAPISearch }>
                <FormControl type = "number" placeholder = "Search" value = { yearSearch } onChange = { handleyearChanges }/>
                <Button variant = "danger" type = "submit" className = "mt-2">Find Magic In Years</Button>
                </Form>
              </div>
              { yearshowHide === 'false' ? null : (<div className = "card-body">
                { year.text }
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default App;