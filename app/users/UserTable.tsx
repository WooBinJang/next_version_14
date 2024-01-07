import { sort } from "fast-sort";
import Link from "next/link";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}
interface Props {
  sortOrder: string;
}
const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`, {
    // next: { revalidate: 10 },
    cache: "no-store",
  });
  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );
  // 데이터 패칭은 가능한 한 서버컴포넌트에서 처리
  return (
    <table>
      <thead>
        <tr>
          <td>
            <Link href={"/users?sortOrder=name"}>name</Link>
          </td>
          <td>
            <Link href={"/users?sortOrder=email"}>email</Link>
          </td>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
