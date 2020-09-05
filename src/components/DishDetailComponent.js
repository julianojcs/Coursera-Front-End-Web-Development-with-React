import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    componentDidMount() {
        console.log('DishDetail Components componentDidMount is invoked');
    }

    componentDidUpdate() {
        console.log('DishDetail Components componentDidUpdate is invoked');
    }

    renderDish(dish) {
        return(
            <div className="col-12 col-md-5 m-1 mx-auto">
                <Card className="mx-auto">
                    <CardImg className="vw-100" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    //List of details
    renderComments(comments) {
        if (comments != null) {
            return(
                <div className="col-12 col-md-5 m-1 mx-auto">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p className="blockquote-footer">{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    render() {

        console.log('DishDetail Components render invoked');
        if (this.props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        {this.renderDish(this.props.dish)}
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }
}

export default DishDetail;