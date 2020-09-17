import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { groupedOptions, formatGroupLabel, colourStyles } from '../data/data';
import { Control, LocalForm, Field, Errors } from 'react-redux-form'

const required = (val) => val && val.length
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0.9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {

    constructor(props) {
        super(props);
        
        console.log(this.props.defaultValues.firstName);        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        console.log("Current State is" + JSON.stringify(values));
        alert("Current State is" + JSON.stringify(values));
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
    
                <div className="row row-content">
                    <div className="col-12">
                        <h3> Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road <br/>
                            Clear Water Bay, Kowloon <br/>
                            HONG KONG <br/>
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto: confusion @food.net ">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel: +85212345678 ">
                                <i className="fa fa-phone mr-2"></i>Call
                            </a>
                            <a role="button" className="btn btn-info" href="/#">
                                <i className="fa fa-skype mr-2"></i>Skype
                            </a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net">
                                <i className="fa fa-envelope-o mr-2"></i>Email
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" className="form-control" id="firstname" name="firstname" 
                                        placeholder="First Name"
                                        defaultValue={this.props.defaultValues.firstName}
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }} 
                                    />
                                    <Errors className="errors" model=".firstname" show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" className="form-control" name="lastname" placeholder="Last Name" 
                                        defaultValue={this.props.defaultValues.lastName}
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }} 
                                    />
                                    <Errors className="errors" model=".lastname" show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" className="form-control" placeholder="Tel. Number" 
                                        validators={{
                                            required, minLength: minLength(8), maxLength: maxLength(14), isNumber
                                        }} 
                                    />
                                    <Errors className="errors" model=".telnum" show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 8 characters',
                                            maxLength: 'Must be 14 characters or less',
                                            isNumber: 'Only numbers accepted'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" className="form-control" id="email" name="email" placeholder="Email" 
                                        validators={{
                                            required, validEmail
                                        }} 
                                    />
                                    <Errors className="errors" model=".email" show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Must be a valid email'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree" className="form-check-input" /> {' '} 
                                            <strong>May we contact you?</strong> 
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".contactType" name="contactType" className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="language" md={2}>Answer Language</Label>
                                <Col md={10}>
                                    <Field 
                                        component={Select}
                                        model=".language"
                                        name="language" 
                                        isMulti 
                                        isSearchable
                                        isClearable={false} 
                                        closeMenuOnSelect={false}
                                        formatGroupLabel={formatGroupLabel}
                                        styles={colourStyles}
                                        placeholder='Select a language'
                                        defaultValue={[ groupedOptions[1].options[0], groupedOptions[0].options[0]]}
                                        options={groupedOptions}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message" rows="12" className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }

}
export default Contact;