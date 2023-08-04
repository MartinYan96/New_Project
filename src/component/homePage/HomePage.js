import RecommendedGoodsSlider from "../recommendedGoodsSlider/RecommendedGoods"
// import PopularBrends from "../popularBrends/PopularBrends"
import NewGoods from "../newGoods/NewGoods"
import PopularGoods from "../popularGoods/PopularGoods"
import SalesGoods from "../salesGoods/SalesGoods"
// import Sales from "../sales/Sales"
import ShopAdvertisementSlider from "../shopAdvertisementSlider/ShopAdvertisementSlider"

const HomePage = () => {
    return (
        <>
            <ShopAdvertisementSlider />
            <SalesGoods />
            <RecommendedGoodsSlider/>
            <NewGoods />
            <PopularGoods />
            {/* <PopularBrends /> */}
        </>
    )
}
export default HomePage