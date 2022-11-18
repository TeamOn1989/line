
import s from './index.module.css';

function Button({children}) {
  return (
    <button className={s.btn}>
      {children}
    </button>
  );
}

export default Button;
