import PropTypes from 'prop-types';

const Container = ({ children }) => (
    <div className="container mx-auto px-4 ">{children}</div>
  );
  // Define prop types for the Container component
  Container.propTypes = {
    children: PropTypes.node.isRequired // Ensure children is provided and is a valid React node
  };
  
export default Container;