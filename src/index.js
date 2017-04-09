import './index.css';
import {getUsers, deleteUser} from './api/userApi';

// populate users table with api values
getUsers().then(result => {
  let usersBody = '';

  result.forEach(user => {
    usersBody += `<TR>
      <TD><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></TD>
      <TD>${user.id}</TD>
      <TD>${user.firstName}</TD>
      <TD>${user.lastName}</TD>
      <TD>${user.email}</TD>
    </TR>`;
  });

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  // MUST use array.from to create a real array from dom collection
  // getElementsByClassName only returns an array like collection
  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes['data-id'].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});

