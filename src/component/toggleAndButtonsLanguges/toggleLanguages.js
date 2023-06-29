import { useState } from 'react'
import { textsEng, textsArm, textsRus } from '../../resources/textAndLanguage/textAndLanguage'


const ToggleLanguages = () => {
    const [toggleLanguage, setToggleLanguage] = useState(textsArm)

    const toggleLanguagesArm = () => {
        setToggleLanguage(textsArm)
    }
    const toggleLanguagesRus = () => {
        setToggleLanguage(textsRus)
    }
    const toggleLanguagesEng = () => {
        setToggleLanguage(textsEng)
    }

    return { toggleLanguagesRus, toggleLanguagesArm, toggleLanguagesEng, toggleLanguage }
}

export default ToggleLanguages