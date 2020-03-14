import React, { createContext, Component } from 'react'
import { withRouter } from 'react-router-dom'
import SERVICE from './services/index'
export const MyContext = createContext()

class MyProvider extends Component {
    state = {
      create: false,
      update: false,
      formContact: {
        name: '',
        phone: '',
        email: '',
        reason: '',
        message: ''
        },
        isEspanol: false
    }

    handleContactInput = e => {
        const { formContact } = this.state
        const { name, value } = e.target
        formContact[name] = value
        this.setState({ formContact })
    }

    handleContactSubmit = async e => {
    e.preventDefault()
    const form = this.state.formContact
    this.setState({ formContact: { name: '', phone: '', email: '', reason: '', message: '' } })
    return await SERVICE.CONTACT(form)
    }

    handleEspanolInput = e => {
      this.setState({ isEspanol: true })
    }
    
render() {
    const {
      state,
        handleContactInput,
        handleContactSubmit,
        handleEspanolInput
    } = this
    return (
      <MyContext.Provider
        value={{
          state,
            handleContactInput,
            handleContactSubmit,
            handleEspanolInput
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default withRouter(MyProvider)