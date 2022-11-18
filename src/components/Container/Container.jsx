
import './index.css';
import cn from 'classnames'

function Container({children, classname}) {
  return (
    <div  className={cn("container", classname)}>
      {children}
    </div>
  );
}

export default Container;
