import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';

export const ClientRow = ({ client }) => {
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn-danger  ">
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};
