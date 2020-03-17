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
        email: '',
        phone: '',
        reason: '',
        message: ''
        },
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
    this.setState({ formContact: { name: '', email: '', phone: '', reason: '', message: '' } })
    return await SERVICE.CONTACT(form)
    }


    
render() {
    const {
      state,
        handleContactInput,
        handleContactSubmit
    } = this
    return (
      <MyContext.Provider
        value={{
          state,
            handleContactInput,
            handleContactSubmit
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default withRouter(MyProvider)