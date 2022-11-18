
import Card from '../Card/Card';
import './index.css';


function CardList({posts}) {
  return (
    <>
      {
        posts.map(post => <Card key={post._id} {...post}/>)
      }
    </>
    
  );
}

export default CardList;
