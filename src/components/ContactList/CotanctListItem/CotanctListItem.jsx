import PropTypes from 'prop-types';
import { ListItem, Button } from '.';
export const ContactListItem = ({ name, number, deleteItem }) => {
  return (
    <ListItem>
      {name && (
        <>
          {name} : {number}
          <Button type="button" onClick={deleteItem}>
            Delete
          </Button>
        </>
      )}
    </ListItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,

  deleteItem: PropTypes.func,
};
