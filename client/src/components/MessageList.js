import React, {Component} from "react";
import {Container, ListGroup,ListGroupItem, Button} from "reactstrap";
import {v1} from "uuid";
import {connect} from "react-redux";
import {getMessages, deleteMessage} from "../actions/messageActions"
import PropTypes from 'prop-types';
class MessageList extends Component {

    componentDidMount() {
        this.props.getMessages();
    }
    onDeleteClick = (id) => {
        this.props.deleteMessage(id)
    };

    render() {
        const {messages} = this.props.message;
        console.log("messages ", messages);
        return(
            <Container>

                <ListGroup>
                        {messages.map(({_id, subject, message}) => (
                                <ListGroupItem>
                                    <Button
                                    className="remove-btn float-right fade-enter fade-exit"
                                    color="danger"
                                    size="medium"
                                    onClick={this.onDeleteClick.bind(this, _id)}>
                                    &times;
                                    </Button>

                                    {"Subject : \t"+ subject + "\tMessage : "+ message}
                                </ListGroupItem>
                            ))}
                </ListGroup>
            </Container>
        )
    }
}

MessageList.propType = {
    getMessages: PropTypes.func.isRequired,
    message: PropTypes.object.isRequired,
    deleteMessage: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
    message: state.message
});
export default connect(mapStateToProps, {getMessages, deleteMessage})(MessageList)