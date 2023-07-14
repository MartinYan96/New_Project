import NewProduct from "../newProductSlider/NewProduct"
import NewsAndSaleSlider from "../newsAndSaleSlider/NewsAndSaleSlider"
import PopularBrends from "../popularBrends/PopularBrends"
import PopularGoods from "../popularGoods/PopularGoods"
import Sales from "../sales/Sales"

const HomePage = () => {
    return (
        <>
            <NewsAndSaleSlider />
            <Sales />
            <NewProduct />
            <PopularGoods />
            <PopularBrends />
        </>
    )
}
export default HomePage