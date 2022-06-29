import {IconCloudArrowUp} from "../../data/icons";
import {useTranslation} from "react-i18next";
import { useRef, useState} from "react";
import styled from "styled-components";
import {isFileImage} from "../../helpers";

const BoxUploadImage = styled.div`
  display: flex;
  margin-top: 15px;
`;
const PreviewImage = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  &>img{
    max-width: 100%;
    max-height: 100%;
  }
`;
const WrapperButtonUpload = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;
const ButtonUpload = styled.button.attrs({className: 'btn btn-primary'})`
  margin: 0;
`;
function InputImage({value, onChange}){
    const {t} = useTranslation();
    const [imgUrl, setImgUrl] = useState('');
    const [showBtnUpload, setShowBtnUpload] = useState(false);
    const [error, setError] = useState('');
    const [imageUploading, setImageUploading] = useState(false);
    const refFile = useRef();
    const handleBrowseFile = () => {
        if (imageUploading) return;
        refFile.current.click();
    }

    const handleFileSelected = (event) => {
        if (imageUploading) return;
        if (!event.target.files.length) return;
        const [file] = event.target.files;
        if (!isFileImage(file)){
            setError(t('The file selected is not a image'));
            return;
        }
        setError('');
        const urlImage = URL.createObjectURL(file);
        setImgUrl(urlImage);
        onChange(urlImage);
        setShowBtnUpload(true);
    }

    const uploadImage = () => {
        const [file] = refFile.current.files;
        if (!isFileImage(file)){
            setError(t('The file selected is not an image'));
            return;
        }
        setError('');
        //setImageUploading(true);
        let formData = new FormData();
        formData.append('image', file);
        axios.post(`/api/image/upload`, formData)
            .then(res => {
                if (res.data.success){
                    setImgUrl(res.data.image_url);
                }
                //setImageUploading(false);
            })
            .catch(error => {
                //setImageUploading(false);
            });
    };
    const LoadingIcon = <div className="spinner-border spinner-border-sm" role="status">
        <span className="visually-hidden">{t('Loading')}...</span>
    </div>

    return <div className={``}>
        <div>
            <div className="input-group">
                <input type="text" className="form-control" placeholder={t('Enter image url')} value={value} onChange={()=>onChange()} />
                <button className="btn btn-outline-secondary" type="button" onClick={handleBrowseFile}><IconCloudArrowUp /> {t('Browse')}</button>
                <input type="file" style={{display: 'none'}} ref={refFile} onChange={handleFileSelected} />
            </div>
            {error && <p className={`text-danger`}>{error}</p>}
        </div>
        {imgUrl && <BoxUploadImage>
            <PreviewImage>
                {imgUrl && <img src={imgUrl} />}
            </PreviewImage>
            {showBtnUpload && <WrapperButtonUpload>
                <ButtonUpload onClick={()=> uploadImage()}><i><IconCloudArrowUp/></i> {t('Upload image')}</ButtonUpload>
            </WrapperButtonUpload>}
        </BoxUploadImage>}
    </div>
}

export default InputImage;