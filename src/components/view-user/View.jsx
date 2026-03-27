import UserCard from "./UserCard";
import { useContext } from "react";
import { UserContext } from "../../context/globalcontext";

export default function View() {

const  {users}= useContext(UserContext)


  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 ">
      {users ? (
        users.map((e) => (
          <UserCard
            key={e.id}
            id={e.id}
            name={e.name}
            username={e.username}
            email={e.email}
            tel={e.address.zipcode}
            website={e.website}
            street={e.address.street}
            suite={e.address.suite}
            city={e.address.city}
            location={e.location}
            company={e.company.name}
            post={e.company.catchPhrase}
          />
        ))
      ) : (
        <p>No Data</p>
      )}
    </div>
  );
}
