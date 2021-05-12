import { Component } from 'react'

export default class ErrorBoundary extends Component{
  constructor(props) {
    super(props)
    this.state = {
      errorThrown: false
    }
  }

  static getDerivedStateFromError(error){
    // TODO: use error object
    return {errorThrown: true}
  }

  componentDidCatch(error, errorInfo) {
    console.error(error)
  }

  render() {
    const {errorThrown} = this.state
    const {children} = this.props
    return errorThrown ? <div>An error occurred</div> : children
  }
}
