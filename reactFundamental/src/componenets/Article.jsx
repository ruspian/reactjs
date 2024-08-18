import PropTypes from 'prop-types';
import { useContext } from 'react';
import { GlobalContext } from '../context /index';

// fungsi apakah pstingan baru atau lama
const ArtikelStatus = ({ isNew }) => {
  return isNew ? <span>-- Baru!!</span> : <span>-- Lama!!</span>;
};
// props adalah parameter untuk mengirimkan data ke komponen lain
const Artikel = (props) => {
  // mengambil global context
  const user = useContext(GlobalContext);
  return (
    <>
      <h3>{props.title}</h3>
      <small> Date: {props.date} Tags: {props.tags.join(", ")}
      <ArtikelStatus isNew={props.isNew} />
      </small>
      <div>
        <small>Ditulis Oleh {user.username}</small>
      </div>
    </>
  );
};

// menentukan validasi tipe data dari props
Artikel.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  tags: PropTypes.array,
  isNew: PropTypes.bool,

}

export default Artikel;
