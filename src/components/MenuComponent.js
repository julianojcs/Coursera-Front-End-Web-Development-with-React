import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Menu extends Component {

    componentDidMount() {
        console.log('Menu Components componentDidMount is invoked');
    }


    render() {

        //List of items
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1 mx-auto">
                    <Card onClick={() => this.props.onClick(dish.id)}>
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
            </div>
        );
    }
}

export default Menu;