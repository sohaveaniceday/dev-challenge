import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import axios from 'axios'

import { BrowserRouter as Browser } from 'react-router-dom'

class App extends React.Component {
    constructor() {
        super()
        this.state = {}

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        axios
        .all([axios.get(`/api/suppliers`), axios.get("/api/products")])
        .then(res => {
            const [suppliers, products] = res
            const uniqueProducts = Array.from(
            new Set(products.data.map(product => product.name))
            ).map(name => {
            return products.data.find(product => product.name === name)
            })
            this.setState({ suppliers, uniqueProducts, products })
        })
    }

    updateResults() {
        if (
            this.state.data &&
            this.state.data.product &&
            this.state.data.supplier
        ) {
        let productResult = this.state.products.data.filter(
        product => {
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

    handleChange(e) {
        let selection = e.target
        let data = { ...this.state.data, [selection.name]: selection.value }
        this.setState({ data }, () => {
            this.updateResults()
        })
    }

    render() {
        console.log("state", this.state)
        return (
        <Browser>
            <main>
            <div className="container-fluid">
                <div className="row">
                <div className="col-sm-12 col-md-12 main">
                    <h1 className="page-header">Product pricing</h1>
                    <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                        <label htmlFor="selSupplier">Supplier</label>
                        <select
                            className="form-control"
                            id="selSupplier"
                            onChange={this.handleChange}
                            name="supplier"
                        >
                            <option value="x">Select Supplier</option>
                            {this.state.suppliers &&
                            this.state.suppliers.data.map(supplier => (
                                <option key={supplier._id} value={supplier._id}>
                                {supplier.name}
                                </option>
                            ))}
                        </select>
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="selProduct">Product</label>
                        <select
                            className="form-control"
                            id="selProduct"
                            onChange={this.handleChange}
                            name="product"
                        >
                            <option value="x">Select Product</option>
                            {this.state.uniqueProducts &&
                            this.state.uniqueProducts.map(product => (
                                <option key={product._id} value={product.name}>
                                {product.name}
                                </option>
                            ))}
                        </select>
                        </div>
                    </div>
                    </form>
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