import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import { Control, LocalForm, Field, Errors } from 'react-redux-form'

const required = (val) => val && val.length
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const rated = (val) => /^[1-5]{1}$/.test(val);

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values){
        console.log("Current State is" + JSON.stringify(values));
        alert("Current State is" + JSON.stringify(values));
        this.toggleModal();
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
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)} className="mx-3 mb-neg-rem-1">
                            <Row className="form-group">
                                <Label htmlFor="username">Rating</Label>
                                <Control.select model=".rating" className="form-control" name="rating" validators={{required }} defaultValue={""}>
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
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="password">Your Name</Label>
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
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message">Comment</Label>
                                <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control" />
                            </Row>
                            <Row className="form-group">
                                <Button type="submit" className="bg-primary" size="sm">Submit</Button>
                            </Row>                            
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default CommentForm;