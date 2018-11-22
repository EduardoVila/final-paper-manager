import React from "react";
import './Content.css';
import '../InfoAluno'
const content = (props) => (
    <div className='Content'>
        <main>
            {props.children}
        </main>

    </div>
)

export default  content;