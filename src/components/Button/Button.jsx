import PropTypes from 'prop-types';
import { MoreBtn } from 'components/Button/Button.styled';

const LoadMoreBtn = ({ addPage }) => {
  return (
    <div>
      <MoreBtn type="button" onClick={addPage}>
        Load More
      </MoreBtn>
    </div>
  );
};

LoadMoreBtn.propTypes = { addPage: PropTypes.func.isRequired };

export default LoadMoreBtn;
