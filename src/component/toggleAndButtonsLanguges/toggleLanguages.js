import { useState } from 'react'
import {textsArm, textsRus } from '../../resources/textAndLanguage/textAndLanguage'


const ToggleLanguages = () => {
    const [toggleLanguage, setToggleLanguage] = useState(textsArm)

    const toggleLanguagesArm = () => {
        setToggleLanguage(textsArm)
    }
    const toggleLanguagesRus = () => {
        setToggleLanguage(textsRus)
    }

    return { toggleLanguagesRus, toggleLanguagesArm, toggleLanguage }
}

export default ToggleLanguages