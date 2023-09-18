import './Backdrop.css';

const Brackdrop = ({show, click}) => {
  return show && <div className="backdrop" onClick={click}> </div>
};

export default Brackdrop