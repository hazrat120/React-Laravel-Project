import { useEffect, useState } from "react";
import axios from "axios";

function People() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="col-xl-7">
      <div className="peoples-photo text-center">
        <div className="row justify-content-center">
          {loading ? (
            <p>Loading...</p>
          ) : users.length > 0 ? (
            users.map((user) => (
              <div className="col-auto" key={user.id}>
                <div className="peoples-photo-single">
                  <img
                    className="img-fluid"
                    src={
                      user.profile_image ||
                      "../../src/assets/images/peoples/ppl.png"
                    }
                    alt={user.name}
                    data-toggle="modal"
                    data-target="#people-model"
                  />
                  <h4>{user.name}</h4>
                </div>
              </div>
            ))
          ) : (
            <p>No users available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default People;
