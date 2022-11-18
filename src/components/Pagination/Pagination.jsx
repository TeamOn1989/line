import './index.css';

function Pagination({postssPerPage, allPosts, paginate}) {
    const pageNumbers = []  
    for (let i = 1; i <= Math.ceil(allPosts/postssPerPage); i++) {
      pageNumbers.push(i)
    }  
    return (    
      <>
      <h2>
        Показано постов {postssPerPage} из {allPosts}
      </h2>
        <ul className='pagination'>
          {
            pageNumbers.map(number => (
              <li key={number} >
                <a href="/"  onClick={(e) => {
                  e.preventDefault()
                  paginate(number)
                }} className='pagination__link'>
                  {number}
                </a>
              </li>
            ))
          }
        </ul>
      </>    
    );
  }
  
  export default Pagination;