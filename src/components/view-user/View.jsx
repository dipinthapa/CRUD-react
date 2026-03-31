import UserCard from "./UserCard";
import { useContext } from "react";
import { UserContext } from "../../context/globalcontext";
import { useNavigate } from "react-router-dom";

export default function View() {
  const {
    users,
    handleDelete,
    handleEdit,
  } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 ">
      {users && users.length > 0 ? (
        users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onDelete={handleDelete}     
            onEdit={handleEdit}         
            navigate={navigate}         
          />
        ))
      ) : (
        <p>No Data</p>
      )}
    </div>
  );
}