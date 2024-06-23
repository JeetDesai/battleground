import React, { Component } from "react";
import axios from "axios";
import Loading from "./Loading";

export class MainContent extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      customers: [],
      loading: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getCustomers() {
    this.setState({loading: true});
    axios('https://api.randomuser.me/?results=5')
    .then(response => {
      this.setState({
        customers: [...this.state.customers, ...response.data.results],
        loading: false
      })
    });
  }

  componentDidMount(){
    this.getCustomers();
  }

  getFullName = (cust) => {
    return cust.name.title + " " + cust.name.first + " " + cust.name.last
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getCustomers();
    console.log("Refresh clicked");
  }

  render() {
    return (
      <React.Fragment>
        <h3 className="border-bottom m1 p1">
          <span className="badge bg-secondary m-2">Customers</span>
        </h3>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.loading ? <tr><td><Loading message="I am loading customers"/></td></tr> : this.state.customers.map((cust, index) => {
              return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{this.getFullName(cust)}</td>
                  <td>{cust.phone}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Refresh Customer" className="btn btn-info"/>
        </form>
      </React.Fragment>
    )
  }
}

export default MainContent