import React, { useState, useEffect } from 'react'
import { FiPlus } from 'react-icons/fi'
import Input from "components/elements/Input/Input";
import './ImagePicker.scss';

const ImagePicker = (props) => {
    const { id, formik, disabled, center, editedComponent, subtitle, image, cancelTouchedverification = false } = props;

    const photo = formik.values[id]?.base64 || formik.values[id] || image;

    return (
        <div className="image-picker-wrapper" style={center ? { margin: '0 auto' } : {}}>
            <label htmlFor={id}
                className={editedComponent ? "image-component-wrapper" : "image-wrapper"}
                style={disabled ? {cursor: 'default'} : {}}
            >
                {photo && <img src={photo} alt="" />}
                {!photo && editedComponent && (
                    <div className="component-wrapper">
                            <img className="icon-wrapper" src={require('assets/icons/picture.png')} alt="infos" />
                            <h2>Insertar imagen</h2>
                    </div>)}
                {!editedComponent && <div className="add"> <FiPlus /></div>}
            </label>
            <Input
                disabled={disabled}
                type="file"
                id={id}
                formik={formik}
                formats={['png', 'jpg', 'jpeg']}
                cancelTouchedverification={cancelTouchedverification}
            />
            {!editedComponent && center && <h6>{subtitle}</h6>}
        </div>
    )
}
export default ImagePicker;

