import './languageButtons.scss'
import './languageButtons.media.scss'
import { arm, rus } from '../redux/selectAndToggleLanguage'
import { useDispatch, useSelector } from 'react-redux'


const LanguageButtons = () => {
    // const selectedLanguage = useSelector((state) => state.language);
    const dispatch = useDispatch()

    return (
        <div className='languages'>
            <p className='language' onClick={() => { dispatch(arm())
 
                }}>ՀԱՅ</p> /
            <p className='language' onClick={() => {  dispatch(rus())

            }}>РУС</p>
        </div>
    )
}

export default LanguageButtons