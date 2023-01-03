import React from "react";

export const HOCWithClasses = (Component) => {
    const Wrapper = (props) => {
        return (
            <div className={props.classes}>
                <Component {...props} />
            </div>
        )
     }
    return Wrapper
}