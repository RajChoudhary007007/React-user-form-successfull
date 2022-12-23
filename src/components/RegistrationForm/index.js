// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    userFirstName: '',
    userLastName: '',
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmitted: false,
  }

  ValidFirstName = () => {
    const {userFirstName} = this.state

    return userFirstName !== ''
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.ValidFirstName()

    this.setState({showFirstNameError: !isValidFirstName})
  }

  renderFirstName = () => {
    const {userFirstName, showFirstNameError} = this.state
    const className = showFirstNameError
      ? 'user-input error-field'
      : 'user-input'

    return (
      <>
        <label className="label" htmlFor="first">
          First Name
        </label>
        <input
          className={className}
          type="text"
          id="first"
          value={userFirstName}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
          placeholder="First Name"
        />
      </>
    )
  }

  validLastName = () => {
    const {userLastName} = this.state

    return userLastName !== ''
  }

  onBlurLastName = () => {
    const isValidLastName = this.validLastName()

    this.setState({showLastNameError: !isValidLastName})
  }

  renderLastName = () => {
    const {userLastName, showLastNameError} = this.state
    const className = showLastNameError
      ? 'user-input error-field'
      : 'user-input'

    return (
      <>
        <label className="label" htmlFor="last">
          Last Name
        </label>
        <input
          className={className}
          type="text"
          id="last"
          value={userLastName}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
          placeholder="Last Name"
        />
      </>
    )
  }

  onSubmitData = event => {
    event.preventDefault()
    const isValidFirstName = this.ValidFirstName()
    const isValidLastName = this.validLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidFirstName,
        isFormSubmitted: false,
      })
    }
  }

  getLoginForm = () => {
    const {showFirstNameError, showLastNameError} = this.state

    return (
      <form className="form" onSubmit={this.onSubmitData}>
        {this.renderFirstName()}
        {showFirstNameError && <p className="error-message">Required</p>}

        {this.renderLastName()}
        {showLastNameError && <p className="error-message">Required</p>}

        <button className="button" type="submit">
          submit
        </button>
      </form>
    )
  }

  onChangeFirstName = event => {
    this.setState({userFirstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({userLastName: event.target.value})
  }

  getSuccessForm = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Registration</h1>
        {isFormSubmitted ? this.getSuccessForm() : this.getLoginForm()}
      </div>
    )
  }
}
export default RegistrationForm
