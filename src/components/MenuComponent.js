import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

    function RenderMenuItem({ dish, onClick }) {
        return(
            <Card onClick={() => onClick(dish.id)}>
                <CardImg className="vw-100" src={dish.image} alt={dish.name} />
                <CardImgOverlay className="mx-auto">
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }

    const Menu = (props) => {
        //List of items
        const menu = props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1 mx-auto">
                    <RenderMenuItem dish={dish} onClick={props.onClick} />
                </div>
            )
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }


export default Menu;