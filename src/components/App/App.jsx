
import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import './index.css';
import {ReactComponent as Registration} from '../../assets/images/user-plus-solid.svg'
import Footer from '../Footer/Footer';
import Container from '../Container/Container';
import api from '../../assets/api/api';
import CardList from '../CardList/CardList';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import Modal from '../Modal/Modal';

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12)

  const lastCardIndex = currentPage * postsPerPage;
  const firstCardIndex = lastCardIndex - postsPerPage;
  const currentPosts = posts.slice(firstCardIndex, lastCardIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber)

  


  useEffect(() => {
    Promise.all([api.getAllPosts()])    
      .then(([data]) => {
        setPosts(data)
      })
       
  },[])

  return (
    <>
      <Header>
      <Logo className={'header__logo'}/>
      <Button>
        <Registration className='registration'/>
        авторизация
      </Button>
    </Header>
    <main className='main'>
      <Container>
        <Pagination postssPerPage={postsPerPage} allPosts={posts.length} paginate={paginate}/>
      </Container>
      <Container classname={'main__container'}>
        <CardList posts={currentPosts}/>
      </Container>
    </main>
    <Footer/>
    </>   
    
  );
}

export default App;
