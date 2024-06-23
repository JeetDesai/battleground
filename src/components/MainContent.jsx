import React, { Component } from "react";

export class MainContent extends Component {
  state = {
    pageTitle: "Customers Click", 
    clickCount: 0,
    customers: [
      {id: 1, name: "Josh", phone: "234-123-512"},
      {id: 2, name: "Matt", phone: "353-123-512"},
      {id: 3, name: "Jenny", phone: "823-777-413"},
      {id: 4, name: "Tracy", phone: "723-923-274"}
    ]
  };
  render() {
    return (
      <React.Fragment>
        <h3 className="border-bottom m1 p1">
          {this.state.pageTitle}
          <span className="badge bg-secondary m-2">{this.state.clickCount}</span>
          <button className="btn btn-info" onClick={this.refreshClick}>Refresh</button>
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
            {this.state.customers.map((cust) => {
              return (
                <tr key={cust.id}>
                  <td>{cust.id}</td>
                  <td>{cust.name}</td>
                  <td>{cust.phone}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </React.Fragment>
    )
  }

  refreshClick = () => {
    this.setState({
      clickCount: this.state.clickCount + 1
    })
    console.log("Refresh clicked");
  }
}

export default MainContent