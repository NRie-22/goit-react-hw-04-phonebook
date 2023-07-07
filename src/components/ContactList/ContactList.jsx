import React from 'react';
import PropTypes from 'prop-types';
import { ListWrap, List } from './ContactList.styled';
import { Button } from 'components/FormList/FormList.styled';
import { UserDeleteOutlined } from '@ant-design/icons';

const ContactList = ({ contacts, onDelete }) => {
  const handleDelete = id => {
    onDelete(id);
  };

  return (
    <ListWrap>
      {contacts.map(({ id, name, number }) => (
        <List key={id}>
          {name + ' : ' + number}
          <Button type="button" onClick={() => handleDelete(id)}>
            <UserDeleteOutlined />
          </Button>
        </List>
      ))}
    </ListWrap>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
