import React from "react";
import preloader from "../../assets/images/preloader.gif";

export const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt={"preloader"} style={{width: "200px", height:"200px"}}/>
        </div>
    );
};
