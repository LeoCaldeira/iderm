import React, { useState } from 'react'
import './Input.scss'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { compressImage, reactSelectStyles } from './utils'
import Select from 'react-select'

const Input = (props) => {
    const {
        type,
        label,
        id,
        className,
        placeholder,
        disabled,
        value,
        setValue,
        options,
        defaultValue,
        error,
        errorMessage,
    } = props

    const [showPassword, setShowPassword] = useState(false)

    // const handleImageUpload = (event) => {
    //     const file = event.target.files[0]
    //     encodeImageFileAsURL(file)
    // }

    // const encodeImageFileAsURL = async (file) => {
    //     if (!file) return
    //     var reader = new FileReader()
    //     reader.onload = async function () {
    //         let fileInfo = {
    //             name: file.name,
    //             type: file.type,
    //             size: Math.round(file.size / 1000), //kb
    //             base64: reader.result,
    //             file: file,
    //         }
    //         const nameParts = file.name.split('.')
    //         let extension = nameParts[nameParts.length - 1]
    //         fileInfo.type = extension
    //         if (formats && !formats.includes(extension)) {
    //             alert(`El archivo no es valido. Por favor adjuntar un archivo ${formats.join(', ')}`)
    //             return
    //         }
    //         if (file.type?.includes('image')) {
    //             const downscaledImage = await compressImage(reader.result)
    //             fileInfo.base64 = downscaledImage
    //             fileInfo.type = extension
    //         }
    //         submitFile(fileInfo)
    //     }
    //     reader.readAsDataURL(file)
    // }

    // const submitFile = (file) => {
    //     formik.setFieldValue(id, file)
    // }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div class={`input-wrapper ${error ? 'error' : ''}`}>
            <label htmlFor={id}>{label}</label>
            {(type === 'text' || type === 'password' || !type) && (
                <span style={{ position: 'relative' }}>
                    <input
                        {...props}
                        type={showPassword || type}
                        id={id}
                        name={id}
                        className={`input ${className} ${error ? 'error' : ''}`}
                        onChange={handleChange}
                        value={value}
                        placeholder={placeholder}
                    />
                    {type === 'password' && <PasswordIcon {...{ showPassword, setShowPassword }} />}
                </span>
            )}
            {type === 'textarea' && (
                <>
                    <textarea
                        {...props}
                        id={id}
                        name={id}
                        className={`input ${className} ${error ? 'error' : ''}`}
                        onChange={handleChange}
                        value={value}
                        placeholder={placeholder}
                    />
                </>
            )}
            {/* {type === 'file' && (
                <input
                    style={{
                        width: '0.1px',
                        height: '0.1px',
                        opacity: 0,
                        overflow: 'hidden',
                        position: 'absolute',
                        zIndex: -1,
                    }}
                    type="file"
                    disabled={disabled}
                    name={id}
                    id={id}
                    onChange={(event) => handleImageUpload(event)}
                />
            )} */}
            {type === 'select' && (
                <Select
                    className="custom-react-select"
                    defaultValue={defaultValue}
                    name={id}
                    styles={reactSelectStyles}
                    value={value}
                    onChange={handleChange}
                    options={options}
                    ariaLiveMessages={{}}
                />
            )}
            {error && <span class="error-message">{errorMessage}</span>}
        </div>
    )
}

const PasswordIcon = ({ showPassword, setShowPassword }) => {
    const openEye = <AiOutlineEye />
    const closeEye = <AiOutlineEyeInvisible />

    return (
        <div className="password-icon" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? openEye : closeEye}
        </div>
    )
}

export default Input
