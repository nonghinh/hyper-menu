import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {searchProduct} from "../../actions";
import useOnClickOutside from "../../useOnClickOutside";

const BoxWrapper = styled.div`
  position: relative;
`;
const ResultSearch = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
  z-index: 9;
`;

const ResultSearchItem = styled.div`
  display: flex;
  padding: 5px 10px;
  min-height: 40px;
  border-bottom: 1px solid #ddd;
  &:last-child{
    border-bottom: none;
  }
  &:hover,
  &:focus{
    background-color: rgba(204, 204, 204, .85);
    cursor: pointer;
  }
`;

const ItemImage = styled.div`
  width: 50px;
  height: 50px;
  background-color: #6b7280;
  &>img{
    max-width: 100%;
    max-height: 100%;
    
  }
`;
const ItemInfo = styled.div`
  flex: 1 1 auto;
  padding: 0 5px;
  
`;
const ItemInfoTitle = styled.h3`
  font-size: 16px;
  overflow: hidden;
`;
const ItemInfoPrice = styled.div`
  font-size: 12px;
`;

const InputGroupSelector = styled.div`
  position: relative;
  &>.item-selected{
    position: absolute;
    left: 5px;
    top: 2px;
    padding: 5px;
    max-width: calc(100% - 10px);
    overflow: hidden;
  }
`;

function ProductSelector({onSelect, value}){
    const products = useSelector(state => state.app.products);
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    const [showResult, setShowResult] = useState(false);
    const boxRef = useRef();
    useEffect(() => {
        console.log('zzzz')
        if (!products)
            searchProduct();
    }, []);
    const handleSearch = (event) => {
        const value = event.target.value;
        setQuery(value);
    }

    useEffect(() => {
        let timeout = setTimeout(() => {
            dispatch(searchProduct(query));
        }, 500);
        return () => {
            clearTimeout(timeout);
        }
    }, [query]);
    useOnClickOutside(boxRef, function (){
        setShowResult(false);
        setQuery('');
    });

    const handleSelectProduct = (product) => {
        onSelect({
            id: product.id,
            title: product.title,
            handle: product.handle
        });
        setShowResult(false)
    }
    return <BoxWrapper ref={boxRef}>
        <InputGroupSelector onClick={()=> setShowResult(true)}>
            <input type="text" className="form-control" value={showResult ? query : ''} onInput={handleSearch} />
            {value && !showResult && <span className="item-selected">{value.title}</span>}
        </InputGroupSelector>
        {showResult ? <ResultSearch>
            {products && products.length && products.map((item, index) => <ResultSearchItem key={index} onClick={()=> handleSelectProduct(item)}>
                <ItemImage>
                    <img src={item.images ? item.images[0].src : ''} alt={item.title} />
                </ItemImage>
                <ItemInfo>
                    <ItemInfoTitle>{item.title}</ItemInfoTitle>
                    <ItemInfoPrice>{item.variants[0].price}</ItemInfoPrice>
                </ItemInfo>
            </ResultSearchItem>)}
        </ResultSearch> : ('')}
    </BoxWrapper>
}

export default ProductSelector;