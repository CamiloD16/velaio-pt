import React, { useState } from 'react'
import GetApis from '../hooks/GetApis'
import Button from '../components/Button'
import CloseIcon from '@mui/icons-material/Close';

const News = () => {

  const url = "https://newsapi.org/v2/everything?q=keyword&apiKey=26a717e407914fedbade5e9a83da432d"
  const { Data } = GetApis(url);

  console.log(Data)

  const [openOrClose, setOpenOrClose] = useState("close")

  const closeModal = () => setOpenOrClose("close")

  const [title, setTitle] = useState()
  const [image, setImage] = useState()
  const [author, setAuthor] = useState()
  const [content, setContent] = useState()

  const openModal = (inf) => {
    setOpenOrClose("open")
    setTitle(inf.title)
    setImage(inf.urlToImage)
    setAuthor(inf.author)
    setContent(inf.content)
  }


  return (
    <div className='news'>
      <ModalNews
        openOrClose={openOrClose}
        closeModal={closeModal}
        title = {title}
        image = {image}
        author = {author}
        content = {content}
        />

      {(Data.status === "ok") ?
        Data.articles.slice(20).map((inf,i) => {

        return(
          <>
            {(inf.urlToImage === null) ? <></> :
              <div className='article' key={i}>
                <img src={inf.urlToImage}/>
                <p>{inf.description}</p>
                <Button
                  onClick={() => openModal(inf)}
                  type="button"
                  message="Leer más"
                />
              </div>
            }
          </>
        )
        }) : <></>  }
    </div>
  )
}

export const ModalNews = (props) => {
  return(
    <div className={`modalNews ${props.openOrClose}`}>
      <CloseIcon className='closeIcon' onClick={props.closeModal} />
      <h2>{props.title}</h2>
      <img src={props.image} alt="" />
      <p>{props.content}</p>
      <h5>- {props.author}</h5>
    </div>
  )
}

export default News