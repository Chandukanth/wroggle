import React from "react"
import {Context} from "./context/context"
import {Route, Routes} from "react-router-dom"
import {HomePage} from "./pages/HomePage"
import {ProductOverView} from "./pages/ProductOverView"
import {Header} from "./components/header/Header"
import {Footer} from "./components/footer/Footer"
import {BtnScroll} from "./components/btn-scroll/BtnScroll"
import AddressForm from "./pages/Address"
import PaymentForm from "./pages/PaymentScreen"
import OrderSuccess from "./pages/OrderSuccess"

export default function App() {
    const productId = {id: 0}

    return (
        <main>
            <Context.Provider value={productId}>
                <Header />
                <Routes>
                    <Route path='/' element={ <HomePage /> }/>
                    <Route path='/products/:id' element={ <ProductOverView /> }/>
                    <Route path='address' element={ <AddressForm /> }/>
                    <Route path='/address/payment' element={ <PaymentForm /> }/>
                    <Route path='/address/payment/success' element={ <OrderSuccess /> }/>

                </Routes>
                <BtnScroll />
                <Footer/>
            </Context.Provider>
        </main>
    )
}
