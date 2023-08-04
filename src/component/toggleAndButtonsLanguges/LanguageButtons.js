import './languageButtons.scss'
import './languageButtons.media.scss'
import { arm, rus } from '../redux/selectAndToggleLanguage'
import { useDispatch, useSelector } from 'react-redux'
import data from '../../resources/data/data'

const LanguageButtons = () => {
    // const selectedLanguage = useSelector((state) => state.language);
    const language = useSelector(state => state.language.language.languages)
    const dispatch = useDispatch()

    console.log(data())

    return (
        <div className='languages'>
            <p className={language === '/հայ/' ? 'language active' : 'language'} onClick={() => {
                dispatch(arm())
            }}>ՀԱՅ</p> /
            <p className={language === '/рус/' ? 'language active' : 'language'} onClick={() => {
                dispatch(rus())
            }}>РУС</p>
        </div>
    )
}

export default LanguageButtons

