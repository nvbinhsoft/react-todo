import React from "react";

interface Props {
    children: React.ReactNode
}
function Alert({children}: Props) {
    return (
        <div className="alert alert-primary">
            <p>{children}</p>
        </div>
    )
}

export default Alert