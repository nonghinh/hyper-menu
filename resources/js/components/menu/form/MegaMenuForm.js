import FormItem from "../../form/FormItem";
import {setMenus} from "../../../actions";
import {getMenuItem} from "../../../helpers";
import {useDispatch, useSelector} from "react-redux";

function MegaMenuForm(){
    const megamenu = {
        "menu_type": {
            "name": "menu_type",
            "label": 'Menu layout',
            "type": "grid_radio",
            "options": [
                {
                    "label": "Link",
                    "value": "link"
                },
                {
                    "label": "Image",
                    "value": "image"
                },
                {
                    "label": "Block item",
                    "value": "block_item"
                },
                {
                    "label": "Html",
                    "value": "html"
                }
            ],
            "value": "link",
            "required": true,
            "desc": "default desc",
        },
        "title":{
            "name": "title",
            "label": 'Title',
            "type": "text",
            "value": "Default title",
            "required": true,
            "desc": "default desc",
        },
        "link": {
            "name": "link",
            "label": 'Link',
            "type": "text",
            "value": "#",
            "required": true,
            "desc": "default desc",
        },
        "disable_link": {
            "name": "disable_link",
            "label": 'Disable link',
            "type": "switch",
            "value": false,
            "required": true
        },
        "disable_title": {
            "name": "disable_title",
            "label": 'Disable title',
            "type": "switch",
            "value": false,
            "required": true
        },
        "image": {
            "name": "image",
            "label": 'Image',
            "type": "image",
            "value": "#",
            "required": true,
            "desc": "default desc",
        },
        "auto_width": {
            "name": "auto_width",
            "label": "Auto width",
            "type": "switch",
            "value": false,
            "desc": "",
        },
        "width": {
            "name": "width",
            "label": "Width",
            "type": "col_size",
            "value": 3,
            "desc": "",
        },
        "content_html": {
            "name": "content_html",
            "label": "Content html",
            "type": "textarea",
            "value": "",
            "desc": "",
        }
    };
    const {menu_item_editing, menus} = useSelector(state => ({
        menu_item_editing: state.menu.menu_item_editing,
        menus: state.menu.menus,
    }));
    const dispatch = useDispatch();
    const handleChange = (key, value) => {
        if (!menu_item_editing)
            return;

        let menuClone = _.cloneDeep(menus);
        try{
            eval("menuClone"+menu_item_editing+"."+key+"=value");
            dispatch(setMenus(menuClone));
        }
        catch (e){
            console.log('-- error update menu item --');
            console.log(e)
        }
    }

    let formData = {};
    let dataItem = getMenuItem(menus, menu_item_editing);
    if (menu_item_editing !== null && dataItem){
        formData = dataItem;
    }


    return <>
        <FormItem {...megamenu.menu_type} onChange={handleChange} value={formData.menu_type ?? 'link'} />
        <FormItem {...megamenu.title} onChange={handleChange} value={formData.title ?? ''} />
        <FormItem {...megamenu.link} onChange={handleChange} value={formData.link ?? ''} />
        <FormItem {...megamenu.disable_link} onChange={handleChange} value={formData.disable_link ?? false} />
        <FormItem {...megamenu.disable_title} onChange={handleChange} value={formData.disable_title ?? false} />
        <FormItem {...megamenu.image} onChange={handleChange} value={formData.image ?? ''} />
        <FormItem {...megamenu.auto_width} onChange={handleChange} value={formData.auto_width ?? false} />

        {!formData.auto_width && <FormItem {...megamenu.width} onChange={handleChange} value={formData.width ?? 3} />}
        {formData.menu_type == 'html' && <FormItem {...megamenu.content_html} onChange={handleChange} value={formData.content_html ?? 3} />}
    </>
}

export default MegaMenuForm;