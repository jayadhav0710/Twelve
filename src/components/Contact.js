import React, {useContext} from 'react';
import ThemeContext from '../Context';
import Main from './Main';
import './context.css';

const Contact = () => {

    const {isLight} = useContext(ThemeContext);

    return(
        <div className={isLight?'light' : 'dark'}>
        <Main />
        <h4>CONTACT US</h4>
        <h2>You can mail us at help@geekster.in</h2>
        </div>
    )
}

export default Contact;