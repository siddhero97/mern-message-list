import React, {Component} from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";
import {connect} from "react-redux";
import {v1} from "uuid";
import {addMessage} from "../actions/messageActions";
import PropTypes from "prop-types";
// import ItemModal from "./components/ItemModal";
class MessageModal extends Component {
state = {
    modal: false,
    name: ''
};
toggle = () => {
    this.setState({
        modal: !this.state.modal
    })
};

onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
};

onSubmit = e => {
  e.preventDefault();
  const newMessage = {
        id: v1(),
        subject: this.state.subject,
      message: this.state.message
  };

  // Add Message
    this.props.addMessage(newMessage);

    //Close modal
    this.toggle();
};
render() {
    return(
        <div>
            <Button
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={this.toggle}
            >Add Message</Button>
            <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
            >
            <ModalHeader toggle={this.toggle}>Add to Message List</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.onSubmit} >
                    <FormGroup>
                        <Label for="subject">Subject</Label>
                        <Input
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="Add subject item"
                            onChange = {this.onChange}
                        />
                        <Label for="message">Message</Label>
                        <Input
                            type="text"
                            name="message"
                            id="message"
                            placeholder="Add message item"
                            onChange = {this.onChange}
                        />
                        <Button
                            color="dark"
                            style={{marginTop: "2reem"}}
                            block
                        >Add Message </Button>
                    </FormGroup>
                </Form>
                 </ModalBody>
           </Modal>
        </div>
    )
}
}

MessageModal.propType = {
    addMessage: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    message: state.message
});
export default connect(mapStateToProps, {addMessage})(MessageModal);