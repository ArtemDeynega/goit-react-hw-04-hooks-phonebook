import PropTypes from 'prop-types';
import { InputLabel, InputFilter, Item } from '.';
import { ContactListItem } from './CotanctListItem';

export const ContactList = ({ contacts, onDelete, value, onChangeFiter }) => {
  return (
    <>
      <InputLabel>
        Find contacts by name
        <InputFilter
          type="text"
          value={value}
          onChange={onChangeFiter}
          placeholder="Enter name"
        />
      </InputLabel>
      <Item>
        {contacts.map(({ name, number, id }) => (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            deleteItem={() => onDelete(id)}
          />
        ))}
      </Item>
    </>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
  value: PropTypes.string.isRequired,

  onChangeFiter: PropTypes.func,
};
