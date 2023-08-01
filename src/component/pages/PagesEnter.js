import { Route, Routes, useLocation, useParams, useSearchParams } from "react-router-dom"
import { Suspense, lazy, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import LoadingSpinner from "../loadingSpinner/LoadingSpinner"
import ProductInfoList from "../productInfoList/ProductInfoList"
const HomePage = lazy(() => import("../homePage/HomePage"))
const ProductsSection = lazy(() => import("../productsList/ProductsSection"))
// const RegistrationAndLoginField = lazy(() => import("../registrationAndLoginField/RegistrationAndLoginField"))


const Pages = () => {
    const language = useSelector(state => state.language.language.menu)
    const pages = language.slice(1, 8)

    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Routes>
                <Route path="/New_Project" element={<HomePage />} />
                <Route path={`/New_Project${language[0].url}`} element={<HomePage />} />
                {pages.map(pages => {
                    return <Route key={pages} path={`/New_Project${pages.url}`} element={<ProductsSection categorie={pages} />} />
                })}
                <Route path={`/New_Project/productItem/:id`} element={<ProductInfoList/>} />
            </Routes>
        </Suspense>

    )
}
export default Pages