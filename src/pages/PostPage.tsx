import styled from "styled-components";
import { HiPhotograph } from "react-icons/hi";
import { useState } from "react";
import addImg from '../img/addimg.svg';
import LeftSide from "../components/mainPost/LeftSide";
import RightSide from "../components/mainPost/RightSide";

const Wrap = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background: #00000073;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`

const Cont = styled.div`
    position: relative;
    width: 73.17073170732%;
    height: 44.04296875%;
    background-color: #F8F8F8;
    border: none;
    border-radius: 20px;
    box-shadow: 0px 4px 4px 0px #00000040;
    padding: 59px 56px 35px 56px;
    box-sizing: border-box;
`

const Title = styled.input`
    width: 100%;
    height: 48px;
    border: none;
    border-bottom: 1px solid #E5E5E5;
    background-color: transparent;
    font-size: 18px;
    font-weight: 400;
    color: #7E7E7E;
    font-family: Noto Sans KR;
    box-sizing: border-box;

    :focus {
        outline: none;
        border-bottom: 1px solid #00964A;
    }
`

const Content = styled.textarea`
    width: 100%;
    height: 50%;
    margin-top: 26px;
    font-size: 18px;
    font-weight: 400;
    border: none;
    background-color: transparent;
    color: #7E7E7E;
    resize: none;
    font-family: Noto Sans KR;
    box-sizing: border-box;

    :focus {
        outline: none;
    }
`

const ImgWrap =styled.div`
    width: 100%;
    height: 50px;
`

const Preview = styled.img`
    height: 100%;
    padding-right: 20px;
    cursor: pointer;
`

const InputLabel = styled.label`
    position: absolute;
    display: block;
    width: 24px;
    height: 24px;
    background-size:cover;
    bottom: 35px;
    cursor: pointer;
`

const AddImg = styled.input`
    display: none;
`

const PostBtn = styled.button`
    position: absolute;
    width: 87px;
    height: 35px;
    border-radius: 0px;
    border: none;
    border-radius: 50px;
    background-color: #00964A;
    color: #F8F8F8;
    font-family: Noto Sans KR;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    right: 56px;
    bottom: 35px;

    .open {
        display: block;
    }

    .close {
        display: none;
    }
`

function PostPage():JSX.Element {
    // 이미지 상대 경로 받아오기
    const [img, setImg] = useState([]);

    const handleImg = (e: { target: { files: any; }; }) => {

        const file = e.target.files;
        const copyImg:any = [...img]

        for(let i = 0; i < file.length; i++) {
            const imgUrl = URL.createObjectURL(file[i]);
            copyImg.push(imgUrl);
        }

        // 이미지 최대 개수 4개로 제한
        if(copyImg.length < 5) {
            setImg(copyImg);
        } else {
            alert('이미지는 최대 4개까지 첨부 가능합니다.')
        }
    }

    // 문제있음: 한꺼번에 다 사라짐
    const onRemove = () => {
        setImg(img.filter(img => img !== img));
    }

    return(
        <>
        <LeftSide />
        <Wrap>
            <Cont>
                <Title placeholder="제목을 입력하세요"></Title>
                <Content placeholder="내용을 입력하세요"></Content>
                <ImgWrap>
                {img.map(data => {
                    return (
                        <Preview src={data} onClick={onRemove}/>
                    )
                })}
                </ImgWrap>
                <AddImg type="file"
                        accept="image/jpg,image/png,image/jpeg,image/gif"
                        onChange={(e) => handleImg(e)}
                        id = "input-label"
                        multiple />
                <InputLabel style={{ backgroundImage: `url("${addImg}")` }} htmlFor="input-label" />
                <PostBtn>완료</PostBtn>
            </Cont>
        </Wrap>
        <RightSide />
        </>
    )

}

export default PostPage;