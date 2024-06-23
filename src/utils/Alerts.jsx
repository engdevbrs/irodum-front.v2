export const ErrorAlert = () =>{
    return(
        <div className="message-alart-style1 mt20">
            <div
                className="alert alart_style_three alert-dismissible fade show mb20"
                role="alert"
                >
                Error al procesar la solicitud, intente nuevamente o más tarde
                <i
                    className="far fa-xmark btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
            />
            </div>
        </div>
    )
}

export const SuccessAlert = () =>{
    return(
        <div className="message-alart-style1 mt20">
            <div
                className="alert alart_style_four alert-dismissible fade show mb20"
                role="alert"
            >
                Petición enviada exitosamente.
                <i
                className="far fa-xmark btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                />
            </div>
        </div>
    )
}

export const SuccessDataAlert = () =>{
    return(
        <div className="message-alart-style1 mt20">
            <div
                className="alert alart_style_four alert-dismissible fade show mb20"
                role="alert"
            >
                Datos guardados exitosamente.
                <i
                className="far fa-xmark btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                />
            </div>
        </div>
    )
}
