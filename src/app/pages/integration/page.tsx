"use client";

interface User {
  id: number;
  name: string;
}

import { ChangeEvent, useState } from "react";

const QuizForm = () => {
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<number>(0);
  const [users, setUsers] = useState<User[]>([]);

  const handlerName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(e.target.value));
  };

  const saveUser = async () => {
    const users = await fetch("http://localhost:3000/api/createUser", {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: { "Content-Type": "application/json" },
    });

    setUsers(await users.json());
  };

  const loadUsers = async () => {
    const users = await fetch("http://localhost:3000/api/createUser", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    setUsers(await users.json());
  };

  const UserList = () => {
    return (
      <ul>
        {users.map((user, key) => {
          return <li key={key}>{user.name}</li>;
        })}
      </ul>
    );
  };

  return (
    <div>
      <h1>Create User</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20vh",
          margin: "10px",
        }}
      >
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={handlerName}
        />
        <input type="number" value={number} onChange={handleNumber} />

        <button onClick={saveUser}>Create user Data</button>
        <button
          onClick={loadUsers}
          style={{
            backgroundColor: "blueviolet",
            padding: "10px",
            borderColor: "blueviolet",
          }}
        >
          Load users
        </button>
      </div>

      <div>
        <h1>Users created</h1>
        {UserList()}
      </div>
    </div>
  );
};

export default QuizForm;
