import './languageButtons.scss'
import './languageButtons.media.scss'
import { arm, rus, eng } from '../redux/selectAndToggleLanguage'
import { textsEng, textsArm, textsRus } from '../../resources/textAndLanguage/textAndLanguage'
import { useDispatch } from 'react-redux'


const LanguageButtons = () => {
    const dispatch = useDispatch()

    return (
        <div className='languages'>
            <p className='language' onClick={() => dispatch(arm())} >ՀԱՅ</p> /
            <p className='language' onClick={() => dispatch(eng())}>ENG</p> /
            <p className='language' onClick={() => dispatch(rus())}>РУС</p>
        </div>
    )
}

export default LanguageButtons