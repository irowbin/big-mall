import {Component} from "react/cjs/react.production.min";

export default class AboutPage extends Component {
    render() {
        return (
            <div className="container pt-2">
                <div className="list-group">
                    <span
                       className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-2 h3">Navigation & Link</h5>
                        </div>
                        <p className="mb-1">
                            Clicking on <b>Navbar</b> link will navigates to the different pages.
                        </p>
                        <p className="mb-1">
                            Clicking on <b>Shop Now</b> will navigates on the product list.
                        </p>
                        <p className="mb-1">
                            Clicking on <b>Shop Now</b> will navigates on the product list.
                        </p>
                        <p className="mb-1">
                            Clicking on <b>Go To Checkout</b> will navigates on the cart list.
                        </p>
                    </span>
                    <span
                        className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-2 h3">Account</h5>
                        </div>
                        <p className="mb-1">
                            Register an account from the registration form.
                        </p>
                        <p className="mb-1">
                           Sign in from the signing form.
                        </p>
                        <p className="mb-1">
                           Use google account to signing in.
                        </p>
                    </span>
                    <span
                        className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-2 mt-2 h3">Cart</h5>
                        </div>
                        <p className="mb-1">
                            Clicking on <b>Add tTo Cart</b>  will adds items to the cart list.
                        </p>
                        <p className="mb-1">
                            Clicking on <b>&#10096; Or &#10095;</b> will decrease and/or increase cart items .
                        </p>
                        <p className="mb-1">
                            Clicking on <b>Shop Now</b> will navigates on the product list.
                        </p>
                        <p className="mb-1">
                            Clicking on <b>Go To Checkout</b> will navigates on the cart list.
                        </p>
                    </span>
                    <span
                        className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-2 mt-2 h3">Payment</h5>
                        </div>
                        <p className="mb-1">
                            Clicking on <b>Pay now</b>  will launch a stripe UI.
                        </p>
                        <p className="mb-1">
                           Add shipping/billing info and clicking on <b>Payment Info</b> takes you to the next UI.
                        </p>
                        <p className="mb-1">
                            Clicking on <b>Pay Now </b>of stripe UI will completes the payment.
                        </p>
                    </span>
                </div>
            </div>
        )
    }
}
