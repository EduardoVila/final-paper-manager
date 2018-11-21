import React from "react";
import './Content.css';

const content = (props) => (
    <div className='Content'>
        <main>
            {props.children}
        </main>

    </div>
)

export default  content;