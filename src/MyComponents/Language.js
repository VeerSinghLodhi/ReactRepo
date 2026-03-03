import React from 'react'

const Language = (props) => {
    return (
        <div className="col-4 col-md-4 col">
            <div className="card w-75 mb-3">
                <div className="card-body">
                    <h5 className="card-title">{props.language.courseName}</h5>
                    <p className="card-text">{props.language.description}</p>
                    <a href="#" onClick={()=>props.onBuy(props.language)} className="btn btn-primary">{props.language.fee}</a>
                </div>
            </div>
        </div>
    )
}

export default Language
