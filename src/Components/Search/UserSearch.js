import React, { useState } from "react";
import SearchBar from "./SearchBar";
import UserList from "./UserList";
import "./UserSearch.css";

const userList = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Michael Johnson" },
  { id: 4, name: "Alice Brown" },
  { id: 5, name: "Emily Davis" },
];

const UserSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter users based on search term
  const filteredUsers = userList.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-box">
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      {filteredUsers.length > 0 ? (
        <UserList users={filteredUsers} />
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default UserSearch;
