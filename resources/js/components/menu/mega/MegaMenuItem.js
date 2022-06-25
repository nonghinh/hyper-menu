import WrapperItemWithAction from "../WrapperItemWithAction";
import BlockTextLink from "./blocks/BlockTextLink";
import BlockHtml from "./blocks/BlockHtml";
import BlockItem from "./blocks/BlockItem";


export default function MegaMenuItem({item, index}){
    let content = '';
    switch (item.menu_type){
        case 'link':
            content = <BlockTextLink item={item} />
            break;
        case 'html':
            content = <BlockHtml item={item} />
            break;
        case 'block_item':
            content = <BlockItem index={index} item={item} />
            break;
    }
    return <WrapperItemWithAction menuIndex={index} >
        {content}
    </WrapperItemWithAction>
}
