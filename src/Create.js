import React from "react";
import Home from "./Home";
class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      username: "",
      email: "",
      message: "",
    };
  }
  changeId = (event) => {
    this.setState({ id: event.target.value });
  };
  changeName = (event) => {
    this.setState({ name: event.target.value });
  };
  changeUserName = (event) => {
    this.setState({ username: event.target.value });
  };
  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  createProduct = (event) => {
    event.preventDefault();
      let productData = {
          id : this.state.id,
          name: this.state.name,
          username: this.state.username,
          email: this.state.email
      };

      Home.createProduct(productData).then((response)=>{
          console.log('response===>',response)
      })
  }

  render() {
    return (
      <div>
        <h2>{this.state.message != "" ? this.state.message : ""}</h2>
        <div className="container">
          <div className="row">
            <div className="card-body">
              <div className="card col-md-6 offset-md-3 offset-md-3">
                <form>
                  <div className="form-group">
                    <label>Product id</label>
                    <input
                      placeholder="Id"
                      name="id"
                      className="form-control"
                      value={this.state.id}
                      onChange={(event) => this.changeId(event)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Product Name</label>
                    <input
                      placeholder="Name"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={(event) => this.changeName(event)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      placeholder="Username"
                      name="username"
                      className="form-control"
                      value={this.state.username}
                      onChange={(event) => this.changeUserName(event)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      placeholder="Email"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={(event) => this.changeEmail(event)}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={(event) => this.createProduct(event)}
                  >
                    Create
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Create;
