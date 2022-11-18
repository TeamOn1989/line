
import './index.css';
import logo from '../../assets/images/Logo.svg'

function Logo({className}) {
  return (
    <a href="/" className={className}>
      <img src={logo} alt="" />
    </a>
  );
}

export default Logo;
