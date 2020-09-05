import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    //List of details
    renderComments(comments) {
        const details = comments.map((detail) => {
            return (
                <li key={detail.id}>
                    <div>{detail.comment}
                        <p className="blockquote-footer">{detail.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(detail.date)))}</p>
                    </div>
                </li>
            )
        })
        return (details)
    }
    renderDish(dish) {
        if (dish != null) {
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1 mx-auto">
                            <Card className="mx-auto">
                                <CardImg className="vw-100" src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                            
                        </div>
                        <div className="col-12 col-md-5 m-1 mx-auto">
                            <div>
                                <h4>Comments</h4>
                                <ul className="list-unstyled">
                                    {this.renderComments(dish.comments)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    render() {
        return (
            this.renderDish(this.props.dish)
        )
    }
}

export default DishDetail;