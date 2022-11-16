export function compressImage(base64) {
    const canvas = document.createElement("canvas");
    const img = document.createElement("img");

    return new Promise((resolve, reject) => {
        img.onload = function () {
            let width = img.width;
            let height = img.height;
            const maxHeight = 600;
            const maxWidth = 600;

            if (width > height) {
                if (width > maxWidth) {
                    height = Math.round((height *= maxWidth / width));
                    width = maxWidth;
                }
            } else {
                if (height > maxHeight) {
                    width = Math.round((width *= maxHeight / height));
                    height = maxHeight;
                }
            }
            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);

            resolve(canvas.toDataURL(null, 0.7));
        };
        img.onerror = function (err) {
            reject(err);
        };
        img.src = base64;
    });
}


export const reactSelectStyles = {
    control: styles => ({ ...styles, backgroundColor: '#252C34', border: "none", height: 50, borderRadius: 5 }),
    valueContainer: styles => ({ ...styles, height: 50, position: 'static' }),
    menu: styles => ({ ...styles, backgroundColor: '#252C34' }),
    option: (styles, { isDisabled }) => {
        return {
            ...styles,
            backgroundColor: "#252C34",
            color: isDisabled
                ? '#ccc'
                : "#fff",
            cursor: isDisabled ? 'not-allowed' : 'default',

            ':hover': {
                ...styles[':hover'],
                backgroundColor: '#293139',
            },
        };
    },
    input: styles => ({ ...styles, backgroundColor: "#252C34" }),
    placeholder: styles => ({ ...styles, backgroundColor: '#252C34', top: '55%' }),
    indicatorSeparator: styles => ({ ...styles, opacity: 0.7 }),
    singleValue: (styles, { data }) => ({ ...styles, color: '#fff' }),
};