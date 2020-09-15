import React, {Component} from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
    renderCampsite(campsite) {
        return(
            <div className = "col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    renderComments(comments) {
        if(comments){
            return (
                <div className ="col-md-5 m-1">
                    <h4>Comments</h4>
                    {
                        comments.map((c) => {
                            return(
                                <div>
                                    <p>{c.text}</p>
                                    <p>
                                     - - {c.author},
                                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}
                                    </p>
                                </div>
                            );
                        })
                    }
                </div>
              );
        } 
    return <div></div>;   
    }
    render(){
        //check if object, campsite is truthy
        // are there any properties in the campsite object
        if(this.props.campsite){
            return(
            <div className = "row">
                {this.renderCampsite(this.props.campsite)}
                
                {this.renderComments(this.props.campsite.comments)}
            </div>
         );
        }
        //JSX Only
        return(<div></div>);
    }
}

export default CampsiteInfo;