import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ isOpen: true })}>
          Open modal
        </button>
        {this.state.isOpen && (
          <div className='modal'>
            <dvi className='modal-body'>
              <h1>Modal title</h1>
              <p>I am awesome modal!</p>
              <button onClick={() => this.setState({ isOpen: false })}>
                Close modal
              </button>
            </dvi>
          </div>
        )}
      </React.Fragment>
    )
  }
}
