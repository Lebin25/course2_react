import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };


    }

    renderDish(dish) {

        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name}</CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderComments(comments) {

        const cmts = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>
                        -- {comment.author} , &nbsp; {new Intl.DateTimeFormat('en-US', { month: "long", day: "numeric", year: "numeric" }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })

        if (comments == null) {
            return <div></div>
        } else return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmts}
                </ul>
            </div>
        )
    }


    render() {
        const dish = this.props.dish

        if (dish == null) {
            return <div></div>;
        }

        const dishItem = this.renderDish(dish);
        const dishComment = this.renderComments(dish.comments);

        return (
            <div className='container'>
                <div className='row'>
                    {dishItem}
                    {dishComment}
                </div>
            </div>
        )
    }

}

export default DishDetail;