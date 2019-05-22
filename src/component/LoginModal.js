import React from 'react';
import { Flex } from 'rebass';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
} from '@material-ui/core';

class LoginModal extends React.Component {
  render() {
    const { isOpen } = this.props;
    return (
      <Flex>
        <Dialog open={isOpen} onClose={this.props.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.props.handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </Flex>
    );
  }
}
export default LoginModal;
