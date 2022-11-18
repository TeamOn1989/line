
import './index.css';
import dayjs from 'dayjs'
import locale from 'dayjs/locale/ru'
import { useState } from 'react';
import {ReactComponent as ChevronDown} from '../../assets/images/chevron-down-solid.svg'
import {ReactComponent as Like} from '../../assets/images/like.svg'
import {ReactComponent as Comments} from '../../assets/images/comments-solid.svg'
import api from '../../assets/api/api';
import Modal from '../Modal/Modal';
import PostComments from '../PostComments/Comments';



function Card({author, created_at, image, title, text, likes, comments}) {
  console.log(comments)
  const date = dayjs(created_at).locale('ru').format('dddd, MMM D, YYYY h:mm');

  const [modalActive, setModalActive] = useState(false)

  const [textMore, setTextMore] = useState('')
  const [chevronIcon, setChevronIcon] = useState(true)

  
  const handleReadMore = (e) => {
    setTextMore(text)    
    setChevronIcon(false)
    if(e.target && textMore !== '') {
      setTextMore('')
      setChevronIcon(true)
    }   
  }

  const handleComments = (e) => {
    api.getAllComments()
  }

  return (
    <article className='card'>
      <div className='author__wrapper'>
        <div className='avatar'>
         { author?.avatar && <img src={author.avatar} alt="" className='avatar__img'/>} 
          { !author.avatar && <p className='avatar__text'>
            {author.name.slice(0, 1)}
          </p>}
        </div>
        <div>
          <h2 className='post__author'>
            {author.name}
          </h2>
          {!author.name && <h2 className='post__author'>
            {author.email}
          </h2>}
          <p className='post__date'>
            {date}
          </p>
        </div>       
      </div>
      <a href='/' className='post__link'>
        <img src={image} alt={title} className='post__image' />
      </a>
      <h3 className='post__title'>
        {title}              
      </h3>
      <button className='show__more' onClick={handleReadMore}>
        <span className='show__more-text'>Читать дальше</span>
          <ChevronDown className={chevronIcon === true ? 'chevron__icon-hidden' : 'chevron__icon-active'}/>  
        </button>  
      <p className='text__more'>
        {textMore}
      </p>
      <div className='button__wrapper'>
        <button className='button__social'>
          <Like className='like__icon'/> {likes.length > 0 && <span className='like__quantity'>{likes.length}</span>}      
        </button>
        <button className='button__social' onClick={() => setModalActive(true)}>
          <Comments className='share__icon'/> {comments.length > 0 && <span className='like__quantity'>{comments.length}</span>}
        </button>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className='modal__content-wrapper'>
          <div className='modal__content_content'>
            <div className='author__wrapper'>
              <div className='avatar'>
              { author?.avatar && <img src={author.avatar} alt="" className='avatar__img'/>} 
                { !author.avatar && <p className='avatar__text'>
                  {author.name.slice(0, 1)}
                </p>}
              </div>
              <div>
                <h2 className='post__author'>
                  {author.name}
                </h2>
                {!author.name && <h2 className='post__author'>
                  {author.email}
                </h2>}
                <p className='post__date'>
                  {date}
                </p>
              </div>       
            </div>
            <div className='modal__img'>
              <img src={image} alt={title} className='post__image' />
            </div>
            <h3 className='post__title post__title-modal'>
              {title}              
            </h3>
            <p>
              {text}
            </p>
          </div>
          <div className='line'></div>
          <div className='modal__comments'>
            <h3>
              Комментарии
            </h3>
            <ul className='comments__list'>
              {
                comments.map((comment) => <PostComments {...comment}/>)
              }
            </ul>
            
          </div>
        </div>
        
        
      </Modal>
    </article>
  );
}

export default Card;
