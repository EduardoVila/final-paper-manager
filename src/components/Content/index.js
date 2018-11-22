import React from "react";
import './Content.css';
import '../InfoAluno'
import InfoAluno from "../InfoAluno";
const content = (props) => (
    <div className='Content'>
        <main>
            {props.children}
            <InfoAluno></InfoAluno>
        </main>

    </div>
)

export default  content;