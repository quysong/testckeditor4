import React from 'react';
import styles from './AppComponent2.module.scss';
import './AppComponent2.scss'
import CKEditor from 'ckeditor4-react';

const AppComponent2 = () => {
    return (
        <>
            <div className={styles.abc}>
                AppComponent2
                <div className="sad">AppComponent2 sad</div>
            </div>
            <div className="abc zz">
                AppComponent2
                <div className="sad">AppComponent2 sad</div>
            </div>
            <div className="App">
                <h2>Using CKEditor 4 in React</h2>
                <CKEditor
                    data="<p>Hello from CKEditor 4!</p>"
                />
            </div>
        </>
    );
};

export default AppComponent2;