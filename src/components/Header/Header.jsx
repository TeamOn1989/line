

import Container from '../Container/Container';
import s from './index.module.css';


function Header({children}) {
  return (
    <header className={s.header}>
      <Container classname={s.header_container}>
        {children}
      </Container>
    </header>
    
  );
}

export default Header;
