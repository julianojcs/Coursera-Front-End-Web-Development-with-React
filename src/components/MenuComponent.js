import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent';

class Menu extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
        console.log('Menu Components constructor is invoked');
    }

    componentDidMount() {
        console.log('Menu Components componentDidMount is invoked');
    }

    onDishSelect(dish){
        this.setState({ selectedDish: dish })
    }

    render() {

        //List of items
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1 mx-auto">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg className="vw-100" src={dish.image} alt={dish.name} />
                        <CardImgOverlay className="mx-auto">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });

        console.log('Menu Components render is invoked');

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <DishDetail dish={this.state.selectedDish} />
            </div>
        );
    }
}

export default Menu;