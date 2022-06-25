export const getMenuItem = (menus, index) =>{
    let item = null;
    try{
        eval(`item = menus${index}`);
        return item;
    }
    catch (e){
        return null;
    }
}

export const searchProduct = (query, success, afterSearch) => {
    axios.get(`/api/product/search?q=${encodeURI(query)}`)
        .then(res => {
            if (success && typeof success == 'function'){
                success(res.data.products);
            }
        })
        .catch(error => {
            if (afterSearch && typeof afterSearch == 'function'){
                afterSearch();
            }
        })
}

export function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function isFileImage(file) {
    return file && file['type'].split('/')[0] === 'image';
}

export function rgbaToString(color){
    return `rgba(${color.r},${color.g},${color.b},${color.a})`;
}

export function stringToRgba(color){
    const match = color.match(/^rgba\((\d+)\,(\d+)\,(\d+)\,([0-9\.]+)\)$/);
    if (match){
        return {
            r: match[1],
            g: match[2],
            b: match[3],
            a: match[4],
        }
    }
    const match2 = color.match(/^rgba\((\d+)\,(\d+)\,(\d+)\)$/);
    if (match2){
        return {
            r: match2[1],
            g: match2[2],
            b: match2[3],
            a: 1,
        }
    }
    return '';
}

export function isHexColor(color){
    const res = color.match(/^#([a-fA-F0-9]{6})$/);
    if (res) return true;
    return false;
}
export function isRgbaColor(color){
    const res = color.match(/^rgba\((\d+)\,(\d+)\,(\d+)\,([0-9\.]+)\)$/);
    if (res) return true;
    return false;
}
export function isRgbColor(color){
    const res = color.match(/^rgba\((\d+)\,(\d+)\,(\d+)\)$/);
    if (res) return true;
    return false;
}