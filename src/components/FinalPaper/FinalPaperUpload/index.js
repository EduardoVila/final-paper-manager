import React from 'react'
import './UploadInput.css'

const uploadInput = (props) => (
    <div onSubmit={props.onSubmit}>
        <input type="text" className="file" name="file_info" readOnly={true} defaultValue={props.imageValue}/>
        <div className="file_upload">
            <input type="file" id="file_upload" name="file_upload" onChange={props.onChange}/>
        </div>  
    </div>
)

export default uploadInput