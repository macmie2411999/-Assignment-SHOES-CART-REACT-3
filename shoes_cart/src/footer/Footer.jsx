import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer class="footer">
                <div class="footer_embrace ">
                    <div class="footer_container ">
                        <div class="row first_row">
                            <div class="col-lg-4 col-md-6 pr-lg-5 mt-md-0 mt-5 column_contact_info">
                                <h6 class="name_column">GET HELP</h6>

                                <p class="content_contact_us mb-2"> Contact us </p>
                                <p class="content_shopping mb-2"> Shopping </p>
                                <p class="content_nikeid mb-2"> NIKEID </p>
                                <p class="content_nike+ mb-2"> Nike+ </p>
                            </div>

                            <div class="col-lg-4 col-md-6 pr-lg-5 mt-md-0 mt-5 column_contact_info">
                                <h6 class="name_column"> ORDERS </h6>

                                <p class="content_payment_options mb-2"> Payment options </p>
                                <p class="content_shipping_and_delivery mb-2"> Shipping and delivery </p>
                                <p class="content_returns mb-2"> Returns </p>
                            </div>

                            <div class="col-lg-4 col-md-6 pr-lg-5 mt-md-0 mt-5 column_contact_info">
                                <h6 class="name_column"> REGISTER </h6>

                                <p class="content_register mb-2">
                                    Create one account to manage everything you do with Nike, from your shopping, preferences to
                                    your Nike+ activity. </p>
                                <p class="content_learn_more mb-2"><a href="/register">Learn more</a></p>
                            </div>
                        </div>

                        <div class="row second_row">
                            <div class="col-lg-4 col-md-6 pr-lg-5 mt-md-0 mt-5 column_contact_info">
                                <h6 class="name_column">EMAIL SIGN UP</h6>

                                <p class="content_contact_info mb-2">
                                    Be the first to know about new products and special offers. </p>
                                <p class="content_sign_up_now mb-2"><a href="#">Sign up now</a></p>
                            </div>

                            <div class="col-lg-4 col-md-6 pr-lg-5 mt-md-0 mt-5 column_contact_info">
                                <h6 class="name_column"> GIFT CARDS </h6>

                                <p class="content_contact_info mb-2">
                                    Give the gift that always fits. </p>
                                <p class="content_sign_up_now mb-2"><a href="#">View cards</a></p>
                            </div>

                            <div class="col-lg-4 col-md-6 pr-lg-5 mt-md-0 mt-5 column_contact_info">
                                <h6 class="name_column"> STORES NEAR YOU </h6>

                                <p class="content_contact_info mb-2">
                                    Locate a Nike retail store of authorized retailer. </p>
                                <p class="content_sign_up_now mb-2"><a href="#">Search</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
