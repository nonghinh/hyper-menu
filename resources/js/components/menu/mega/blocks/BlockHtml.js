import styled from "styled-components";

const BlockTitle = styled.h4`
  font-size: 20px;
  margin-bottom: 10px;
`;
export default function BlockHtml({item}){
    return <div className={`block-html`}>
        {!item.disable_title && item.title && item.menu_type != 'link' && <BlockTitle>{item.title}</BlockTitle> }
        <div dangerouslySetInnerHTML={{__html: item.content_html}}></div>
    </div>
}