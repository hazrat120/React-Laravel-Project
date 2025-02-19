import { useEffect, useState } from "react";
import axios from "axios";

function People() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the data from the backend
    axios
      .get("http://localhost:8000/api/users")
      .then((response) => {
        // Assuming the response data is an array
        setUsers(response.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
        setLoading(false);
      });
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div>
      <h1>User List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user.id}>
                <strong>Name:</strong> {user.name} <br />
                <strong>Email:</strong> {user.email}
              </li>
            ))
          ) : (
            <p>No users available.</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default People;

{
  /*  <div className="col-xl-7">
        <div className="peoples-photo text-center">
          <div className="row justify-content-center">
            <div className="col-auto">
              <div className="peoples-photo-single">
                <img
                  className="img-fluid"
                  src="../../src/assets/images/peoples/ppl.png"
                  alt="placeholder image"
                  data-toggle="modal"
                  data-target="#people-model"
                />
                <h4>Anamika</h4>
              </div>
            </div>
            <div className="col-auto">
              <div className="peoples-photo-single">
                <img
                  className="img-fluid"
                  src="../../src/assets/images/peoples/ppl2.png"
                  alt="placeholder image"
                  data-toggle="modal"
                  data-target="#people-model"
                />
                <h4>Ashan</h4>
              </div>
            </div>
            <div className="col-auto">
              <div className="peoples-photo-single">
                <img
                  className="img-fluid"
                  src="../../src/assets/images/peoples/ppl3.png"
                  alt="placeholder image"
                  data-toggle="modal"
                  data-target="#people-model"
                />
                <h4>Anu</h4>
              </div>
            </div>
            <div className="col-auto">
              <div className="peoples-photo-single">
                <img
                  className="img-fluid"
                  src="../../src/assets/images/peoples/ppl4.png"
                  alt="placeholder image"
                  data-toggle="modal"
                  data-target="#people-model"
                />
                <h4>Amar</h4>
              </div>
            </div>
            <div className="col-auto">
              <div className="peoples-photo-single">
                <img
                  className="img-fluid"
                  src="../../src/assets/images/peoples/ppl5.png"
                  alt="placeholder image"
                  data-toggle="modal"
                  data-target="#people-model"
                />
                <h4>Ann William</h4>
              </div>
            </div>
            <div className="col-auto">
              <div className="peoples-photo-single">
                <img
                  className="img-fluid"
                  src="../../src/assets/images/peoples/ppl6.png"
                  alt="placeholder image"
                  data-toggle="modal"
                  data-target="#people-model"
                />
                <h4>Ahaan</h4>
              </div>
            </div>
            <div className="col-auto">
              <div className="peoples-photo-single">
                <img
                  className="img-fluid"
                  src="../../src/assets/images/peoples/ppl7.png"
                  alt="placeholder image"
                  data-toggle="modal"
                  data-target="#people-model"
                />
                <h4>Ak Jack</h4>
              </div>
            </div>
            <div className="col-auto">
              <div className="peoples-photo-single">
                <img
                  className="img-fluid"
                  src="../../src/assets/images/peoples/ppl8.png"
                  alt="placeholder image"
                  data-toggle="modal"
                  data-target="#people-model"
                />
                <h4>Aman Candy</h4>
              </div>
            </div>
            <div className="col-auto">
              <div className="peoples-photo-single">
                <img
                  className="img-fluid"
                  src="../../src/assets/images/peoples/ppl9.png"
                  alt="placeholder image"
                  data-toggle="modal"
                  data-target="#people-model"
                />
                <h4>Akash</h4>
              </div>
            </div>
            <div className="col-auto">
              <div className="peoples-photo-single">
                <img
                  className="img-fluid"
                  src="../../src/assets/images/peoples/ppl10.png"
                  alt="placeholder image"
                  data-toggle="modal"
                  data-target="#people-model"
                />
                <h4>Ankur</h4>
              </div>
            </div>
            <div className="col-auto">
              <div className="peoples-photo-single">
                <img
                  className="img-fluid"
                  src="../../src/assets/images/peoples/ppl11.png"
                  alt="placeholder image"
                  data-toggle="modal"
                  data-target="#people-model"
                />
                <h4>Andy</h4>
              </div>
            </div>
            <div className="col-auto">
              <div className="peoples-photo-single">
                <img
                  className="img-fluid"
                  src="../../src/assets/images/peoples/ppl12.png"
                  alt="placeholder image"
                  data-toggle="modal"
                  data-target="#people-model"
                />
                <h4>Arsh</h4>
              </div>
            </div>
            <div className="col-auto">
              <div className="peoples-photo-single">
                <img
                  className="img-fluid"
                  src="../../src/assets/images/peoples/ppl13.png"
                  alt="placeholder image"
                  data-toggle="modal"
                  data-target="#people-model"
                />
                <h4>Ashani</h4>
              </div>
            </div>
            <div className="col-auto">
              <div className="peoples-photo-single">
                <img
                  className="img-fluid"
                  src="../../src/assets/images/peoples/ppl14.png"
                  alt="placeholder image"
                  data-toggle="modal"
                  data-target="#people-model"
                />
                <h4>Akash</h4>
              </div>
            </div>
            <div className="col-auto">
              <div className="peoples-photo-single">
                <img
                  className="img-fluid"
                  src="../../src/assets/images/peoples/ppl15.png"
                  alt="placeholder image"
                  data-toggle="modal"
                  data-target="#people-model"
                />
                <h4>Andy Doe</h4>
              </div>
            </div>
            <div className="col-auto">
              <div className="peoples-photo-single">
                <img
                  className="img-fluid"
                  src="../../src/assets/images/peoples/ppl16.png"
                  alt="placeholder image"
                  data-toggle="modal"
                  data-target="#people-model"
                />
                <h4>Aunoop</h4>
              </div>
            </div>
          </div>
        </div>
      </div> */
}
