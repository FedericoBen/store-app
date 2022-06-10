import React from "react"
import { Route, Routes } from "react-router-dom"
import { Navbar } from "../components/ui/Navbar"

import { GridProducts } from "../components/Products/GridProducts"
import { ProductScreen } from "../components/Products/ProductScreen"

export const DashboardRoutes = () => {
    
    return (
        <>
            <Navbar />
            <div className="routes">
            <Routes>
                <Route path="productos" element={<GridProducts/>} />
                <Route path="product/:productId" element={<ProductScreen/>} />
                <Route path="/" element={<GridProducts/>} />
            </Routes>
            </div>
        </>
    )
}
