import React from "react";

import '../../styles/Stylesnovedades.css';


const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className="noticias">
            <h2 className="TiNoticia">{title}</h2>
            <img src={imagen} className="img img-fluid" alt="" />
            <h4>{subtitle}</h4>
            <div dengerouslySetInnerHTML={{ __html: body }} />
            <p>{body}</p>
        </div>
    );
}
export default NovedadItem;