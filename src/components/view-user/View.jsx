import { getPosts } from "../../api/api";
import { useEffect } from "react";
import { useState } from "react";
import UserCard from "./UserCard";

export default function View() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);

  return (
    <div>
      {data ? (
        data.map((e) => (
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
