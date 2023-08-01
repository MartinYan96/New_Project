import './sortProducts.scss'
import './sortProducts.media.scss'
import { BsSortDown } from "react-icons/bs";
import { BsSortDownAlt } from "react-icons/bs";
import { BsFilterRight } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { closeAndOpenFiltersBar } from '../redux/closeAndOpenFiltersBar';

const SortProduct = ({ filteredProducts, setFilteredProducts }) => {

    const sortCategory = useSelector(state => state.language.language.sortProducts.sortProductsCategorie)
    const dispatch = useDispatch()



    const [sortActive, setSortActive] = useState(0)
    // const [recommendedActive, setRecommendedActive] = useState(false)
    const [maxMinPriceActive, setMaxMinPriceActive] = useState(false)
    const [increasingTheTimeActive, setIncreasingTheTime] = useState(false)

    const sortCategoryAndSortIcons = sortCategory.map(sortCategory => {
        return (
            {
                name: sortCategory,
                iconMaxMin: <BsSortDownAlt />,
                iconMinMax: <BsSortDown />,
                filterIcon: <BsFilterRight />
            }
        )
    })


    const recommended = [...filteredProducts].sort((a, b) => b.recommended - a.recommended);
    const minMaxPrice = [...filteredProducts].sort((a, b) => a.price - b.price);
    const maxMinPrice = [...filteredProducts].sort((a, b) => b.price - a.price);
    const increasingTheTimeNew = [...filteredProducts].sort((a, b) => a.id.localeCompare(b.id));
    const increasingTheTimeOld = [...filteredProducts].sort((a, b) => b.id.localeCompare(a.id));


    const sortingProducts = (index) => {
        sortActive ? setSortActive(index) : setSortActive(index)
        if(sortActive === index){
            setFilteredProducts(recommended)
        }
        if (index === 0) {
            setFilteredProducts(recommended)
        }

        if (index === 2 && !maxMinPriceActive) {
            setFilteredProducts(minMaxPrice)
            setMaxMinPriceActive(true)
        }
        else if (index === 2 && maxMinPriceActive) {
            setFilteredProducts(maxMinPrice)
            setMaxMinPriceActive(false)
        }

        if (index === 3 && !increasingTheTimeActive) {
            setFilteredProducts(increasingTheTimeNew)
            setIncreasingTheTime(true)
        }
        else if (index === 3 && increasingTheTimeActive) {
            setFilteredProducts(increasingTheTimeOld)
            setIncreasingTheTime(false)
        }
    }


    return (
        <div className='sortProduct'>
            {sortCategoryAndSortIcons.map((sortCategory, index) => {
                return (
                    <div key={sortCategory.name} className={sortActive === index && index !== 4 ? 'sortButton active' : 'sortButton'} onClick={() => {
                        sortingProducts(index)
                        return index === 4 ? dispatch(closeAndOpenFiltersBar()) : ''
                    }}>
                        {sortCategory.name}
                        <div className='sortIcon' id={`sortIcon${index}`}>
                            {
                                (index === 2 && maxMinPriceActive || index === 3 && increasingTheTimeActive ? sortCategory.iconMaxMin : index !== 4 && sortCategory.iconMinMax) ||
                                (index !== 4 ? sortCategory.iconMaxMin : sortCategory.filterIcon)
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SortProduct