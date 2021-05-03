import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function NewsFragment({ feed }) {
    return(
      <div>
        {feed.map((news) => {
            return(
                <div>
                  <Card style = {{marginTop: 33, marginBottom: 33}}>
                    <Card.Img variant = "top" src = { news.urlToImage } style = {{ height: 400 }}></Card.Img>
                    <Card.Body>
                      <Card.Title>{ news.title }</Card.Title>
                      <Card.Subtitle>{ news.author }</Card.Subtitle>
                      <Card.Text>
                        { news.description }            
                      </Card.Text>
                      <Button variant = "danger"><a href = { news.url } style = {{ color: "white"}}>Learn More</a></Button>
                    </Card.Body>
                  </Card>
                </div>
            );
        })}     
      </div>       
    )
}