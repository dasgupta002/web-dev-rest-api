import React, { useState } from 'react'
import NewsFeed from '../components/news'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export default function SearchFragment() {

    const [search, setSearch] = useState("");
    const [pass, setPass] = useState("");

    const handleChanges = (event) => {
      event.preventDefault(); 
      setPass(search);
    }

    return (
        <div>
          <Container>
            <Row style = {{ paddingTop: 40 }}>
             <Col md = {1} xs = {12}>
               <h4>Newzz</h4>  
             </Col> 
             <Col md = {11} xs = {12}>   
              <Form onSubmit = { handleChanges }> 
              <Form.Row>
                <Col md = {8} xs = {12}>
                  <Form.Control type = "text" placeholder="Search your news!" onChange = { ({ target }) => setSearch(target.value) }/>
                </Col>
                <Col md = {4} xs = {12}>  
                  <Button type = "submit" onSubmit = { handleChanges }>Search</Button>
                </Col>
              </Form.Row>
              </Form>
             </Col> 
            </Row>
            <Row style = {{ paddingTop: 40 }}>
              <Col md = {10} xs = {12}><NewsFeed query = { pass }></NewsFeed></Col>
            </Row>
          </Container>            
        </div>
    )
}