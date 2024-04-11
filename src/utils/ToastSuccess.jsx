import React, { useState } from "react";

const ToastSuccess = ({text}) => {

    const [ hiddeToast, setHiddeToast ] = useState(false)

    // setTimeout(() => {
    //     setHiddeToast(true)
    // }, 5000);

    return(
    <>
        <div class="toast-custom faded shows" hidden={hiddeToast}>
            <div class="d-flex">
                <div class="toast-body mr20">
                {text}
                </div>
                <button type="button" className="btn-close btn-close-white me-2 m-auto" onClick={() => setHiddeToast(true)}  aria-label="Close"></button>
            </div>
        </div>
    </>
    )
};

export default ToastSuccess;
