import PropTypes from 'prop-types';

import { Title } from '.';

export const SectionTitle = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
};
SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
