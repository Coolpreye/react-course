import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    state = {  }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    dateConvertet (dateString) {
        let d = new Date(dateString);
        return d.toDateString();
    }

    renderComments(dish) {
        if (dish != null) {
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        { dish.comments.map(comment => {
                            return (
                                <li className="mb-2">
                                    <p>{comment.comment}</p>
                                    <span>-- {comment.author}, {this.dateConvertet(comment.date)}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    render() { 
        return ( 
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selectedDish)}
                </div>
            </div>
         );
    }
}
 
export default DishDetail;