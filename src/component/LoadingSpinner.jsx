import React from 'react'

const LoadingSpinner = () => {
    return (
        <center style={{ width: "3rem", height: "3rem" }} className="spinner-border spinner-style" role="status">
            <span className="visually-hidden">Loading...</span>
        </center>
    )
}

export default LoadingSpinner
