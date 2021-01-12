import React, { Component } from 'react'
import { Card, Button, Form } from "react-bootstrap"
import ProductData from '../data/data.json';

export default class ProductCard extends Component {
    constructor(props){
        super(props);
		
        this.state ={
            size: "32 см",
            price: ProductData.pizza[this.props.id].price32,
			gram: ProductData.pizza[this.props.id].gram32
        };
    }

    changeSize(){
        if(this.state.size === "32 см"){
            this.setState({
                size: "42 см",
                price: ProductData.pizza[this.props.id].price42,
				gram: ProductData.pizza[this.props.id].gram42
            });
        }
        else {
            this.setState({
                size: "32 см",
                price: ProductData.pizza[this.props.id].price32,
				gram: ProductData.pizza[this.props.id].gram32
            }); 
        }
    }
	
    render() {
        return (
            <Card>
                <Card.Img variant="top" src={ProductData.pizza[this.props.id].img} />
                <Card.Body>
                    <Card.Title>{ProductData.pizza[this.props.id].title}</Card.Title>
                    <Card.Text>{ProductData.pizza[this.props.id].desc}</Card.Text>
                    <Button variant="primary" style={{ float: "right"}}>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-handbag-fill" viewBox="0 0 16 16">
							<path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 0 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.361a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.356a2.5 2.5 0 0 0 2.472-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z"/>
						</svg> {this.state.price}
					</Button>
					<Form>
                        <Form.Check
                            type="switch"
                            id={ProductData.pizza[this.props.id].id}
                            label={this.state.size}
                            onChange={() => {
                                this.changeSize();
                            }}
                        />
                    </Form>
					<Card.Text>{this.state.gram}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}