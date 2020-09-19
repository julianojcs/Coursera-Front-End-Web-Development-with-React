import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form'
import Rating from 'react-rating';
import { Loading} from './LoadingComponent';

const required = (val) => val && val.length
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

    function RenderDish({dish}) {
        return(
            <div className="col-12 col-md-5 m-1 mx-auto">
                <Card className="mx-auto">
                    <CardImg src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    //List of details
    function RenderComments({comments, addComment, dishId}) {
        if (comments != null) {
            return(
                <div className="col-12 col-md-5 m-1 mx-auto">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return (
                                <li key={comment.id} className="my-3">
                                    <p className="m-0">{comment.comment}</p>
                                    <p className="m-0">
                                        <Rating 
                                            className="text-warning"
                                            initialRating={comment.rating} 
                                            readonly 
                                            emptySymbol="fa fa-star-o" 
                                            fullSymbol="fa fa-star"
                                        />
                                    </p>
                                    <p className="blockquote-footer m-0">{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                            );
                        })}
                    </ul>
                    <CommentForm dishId={dishId} addComment={addComment} />
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    class CommentForm extends Component {

        constructor(props) {
            super(props);
    
            this.handleSubmit = this.handleSubmit.bind(this);
            this.toggleModal = this.toggleModal.bind(this)

            this.state = {
                isModalOpen: false
            };
        }
    
        toggleModal() {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        }
    
        handleSubmit(values){
            this.toggleModal();
            this.props.addComment(this.props.dishId, values.rating, values.author, values.comment); 
            // console.log("Current State is" + JSON.stringify(values));
            // alert("Current State is" + JSON.stringify(values));
        }
    
        render() {
            return (
                <>
                    <Button outline onClick={this.toggleModal} size="sm">
                        <span className="fa fa-pencil"></span> Submit Comment
                    </Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Col>
                                        <Label htmlFor="rating">Rating</Label>
                                        <Control.select model=".rating" className="form-control" id="rating" name="rating" validators={{required }} defaultValue={""}>
                                                <option value={""}></option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option value={4}>4</option>
                                                <option value={5}>5</option>
                                        </Control.select>
                                        <Errors className="errors" model=".rating" show="touched"
                                            messages={{
                                                required: 'Required'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col>
                                        <Label htmlFor="author">Your Name</Label>
                                        <Control.text model=".author" className="form-control" id="author" name="author" 
                                                placeholder="Your Name"
                                                validators={{
                                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                                }} 
                                        />
                                        <Errors className="errors" model=".author" show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col>
                                        <Label htmlFor="comment">Comment</Label>
                                        <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control" />
                                    </Col>
                                </Row>
                                <Button type="submit" className="bg-primary" size="sm">Submit</Button>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </>
            );
        }
    }

    const DishDetail = (props) => {
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if(props.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            {/* <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem> */}
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments}
                        addComment={props.addComment}
                        dishId={props.dish.id} />
                    </div>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

export default DishDetail;