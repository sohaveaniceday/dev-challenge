import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import axios from 'axios'

import { BrowserRouter as Browser } from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}

    this.handleSupplier = this.handleSupplier.bind(this)
    this.handleProduct = this.handleProduct.bind(this)
  }

  componentDidMount() {
    axios
      .get('/api/suppliers')
      .then(res => this.setState({ suppliers: res.data }))
  }

  handleSupplier(e) {
    let result = {}
    let products = {}
    let selection = e.target
    let data = { ...this.state.data, result, products, supplier: selection.value }
    this.setState({ data }, () => {
      this.updateResults()
    })
    axios.get(`/api/products`).then(res => {
      let products = res.data.filter(product => {
        return product.supplier._id === selection.value
      })
      this.setState({ products: products })
    })
  }

  handleProduct(e) {
    let selection = e.target
    let data = { ...this.state.data, product: selection.value }
    this.setState({ data }, () => {
      this.updateResults()
    })
  }

  updateResults() {
    if (this.state.data.product && this.state.data.supplier) {
      let productResult = this.state.products.filter(product => {
        return (
          product.name === this.state.data.product &&
          product.supplier._id === this.state.data.supplier
        )
      })
      if (productResult.length !== 0) {
        let result = {
          ...this.state.result,
          product: productResult[0].name,
          supplier: productResult[0].supplier.name,
          price: productResult[0].price,
          id: productResult[0]._id
        }
        this.setState({ result })
      } else {
        let result = {}
        this.setState({ result })
      }
    }
  }

  render() {
    return (
      <Browser>
        <main>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-12 main">
                <h1 className="page-header">Product pricing</h1>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="selSupplier">Supplier</label>
                    <select
                      className="form-control"
                      id="selSupplier"
                      onChange={this.handleSupplier}
                      name="supplier"
                    >
                      <option value="x">Select Supplier</option>
                      {this.state.suppliers &&
                        this.state.suppliers.map(supplier => (
                          <option key={supplier._id} value={supplier._id}>
                            {supplier.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="selProduct">Product</label>
                    {!this.state.products || this.state.products.length === 0 ? (
                      <select
                        className="form-control"
                        id="selProduct"
                        onChange={this.handleProduct}
                        name="product"
                        disabled
                      />
                    ) : (
                      <select
                        className="form-control"
                        id="selProduct"
                        onChange={this.handleProduct}
                        name="product"
                      >
                        <option value="x">Select Product</option>
                        {this.state.products &&
                        this.state.products.map(product => (
                          <option
                            key={product._id}
                            value={product.name}
                          >
                            {product.name}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                </div>
                <h2 className="sub-header">Product details</h2>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Supplier</th>
                        <th>Product</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.result && (
                        <tr>
                          <td>{this.state.result.id}</td>
                          <td>{this.state.result.supplier}</td>
                          <td>{this.state.result.product}</td>
                          <td>{this.state.result.price}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Browser>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)