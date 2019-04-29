import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import axios from 'axios'
// import $ from 'jquery'
import 'bootstrap'

import { BrowserRouter as Browser } from 'react-router-dom'
// import { BrowserRouter as Browser, Route, Switch } from 'react-router-dom'

class App extends React.Component {

    componentDidMount() {
      axios.get('/api/products')
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }



    render() {
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
                                            <select className="form-control" id="selSupplier">
                                                <option>xxxx</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="selProduct">Product</label>
                                            <select className="form-control" id="selProduct">
                                                <option>xxxx</option>
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
                                            <tr>
                                                <td>x</td>
                                                <td>xxxx</td>
                                                <td>xxxx</td>
                                                <td>xxxx</td>
                                            </tr>
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