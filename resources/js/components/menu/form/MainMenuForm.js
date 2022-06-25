import FormItem from "../../form/FormItem";
import {useDispatch, useSelector} from "react-redux";
import {setMenus} from "../../../actions";
import {getMenuItem} from "../../../helpers";

function MainMenuForm(){
    const main_menu = {
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
                    "label": "Search bar",
                    "value": "search_bar"
                },
                {
                    "label": "Social icon",
                    "value": "social_icon"
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
        "link_type": {
            "name": "link_type",
            "label": 'Link',
            "type": "link_selector",
            "value": "custom_link",
            "required": true,
            "desc": "default desc",
        },
        "link_custom": {
            "name": "link_custom",
            "label": 'Custom link',
            "type": "text",
            "value": "#",
            "required": true,
            "desc": "default desc",
        },
        "link_disabled": {
            "name": "link_disabled",
            "label": 'Disable link',
            "type": "switch",
            "value": 1
        },
        "product": {
            "name": "product",
            "label": 'Product',
            "type": "product_selector",
            "value": "",
            "required": true,
        },
        "collection": {
            "name": "collection",
            "label": 'Collection',
            "type": "collection_selector",
            "value": "",
            "required": true,
        },
        "page": {
            "name": "page",
            "label": 'Page',
            "type": "page_selector",
            "value": "",
            "required": true,
        },
        "blog": {
            "name": "blog",
            "label": 'Blog',
            "type": "blog_selector",
            "value": "",
            "required": true,
        },
        "width": {
            "name": "width",
            "label": 'Width',
            "type": "number",
            "value": "",
            "required": true,
            "suffix": "px",
            "desc": "default desc",
        },
        "submenu_type": {
            "name": "submenu_type",
            "label": 'Submenu type',
            "type": "radio",
            "options": [
                {"label": "Tree menu", "value": "tree_menu"},
                {"label": "Mega menu", "value": "mega_menu"},
                {"label": "Tab menu", "value": "tab_menu"}
            ],
            "value": "mega_menu",
            "required": true
        },
        "text_color": {
            "name": "text_color",
            "label": 'Text color',
            "type": "color",
            "value": "",
            "required": true,
            "desc": "",
        },
        "bg_color": {
            "name": "bg_color",
            "label": 'Background color',
            "type": "color",
            "value": "",
            "required": true,
            "desc": "",
        },
        "bg_image": {
            "name": "bg_image",
            "label": 'Background image',
            "type": "image",
            "value": "",
            "required": true,
            "desc": "",
        },
    };
    const dispatch = useDispatch();
    const {menus, menu_item_editing} = useSelector(state => ({
        menus: state.menu.menus,
        menu_item_editing: state.menu.menu_item_editing
    }));

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
    console.log('form data....')
    console.log(formData)

    return <>
        <FormItem {...main_menu.menu_type} onChange={handleChange} value={formData.menu_type || ''} />
        <FormItem {...main_menu.title} onChange={handleChange} value={formData.title || ''} />
        <FormItem {...main_menu.link_type} onChange={handleChange} value={formData.link_type || ''} />
        {formData.link_type == 'custom_link' && <FormItem {...main_menu.link_custom} onChange={handleChange} value={formData.link_custom || ''} />}
        {formData.link_type == 'product' && <FormItem {...main_menu.product} onChange={handleChange} value={formData.product || ''} />}
        {formData.link_type == 'collection' && <FormItem {...main_menu.collection} onChange={handleChange} value={formData.collection || ''} />}
        {formData.link_type == 'custom_link' && <FormItem {...main_menu.link_disabled} onChange={handleChange} value={formData.link_disabled || 0} />}
        <FormItem {...main_menu.width} onChange={handleChange} value={formData.width || ''} />
        <FormItem {...main_menu.submenu_type} onChange={handleChange} value={formData.submenu_type || main_menu.submenu_type.value} />
        <FormItem {...main_menu.text_color} onChange={handleChange} value={formData.text_color || main_menu.text_color.value} />
        <FormItem {...main_menu.bg_color} onChange={handleChange} value={formData.bg_color || main_menu.bg_color.value} />
        <FormItem {...main_menu.bg_image} onChange={handleChange} value={formData.bg_image || main_menu.bg_image.value} />
    </>
}

export default MainMenuForm;