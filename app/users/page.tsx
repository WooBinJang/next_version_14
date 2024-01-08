import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  params: {};
  searchParams: { sortOrder: string };
}
const UsersPage = (props: Props) => {
  console.log(props);
  return (
    <div>
      <h1>This is USERPAGE</h1>
      <Link href={"/users/new"} className="btn btn-primary">
        New User
      </Link>
      <Suspense fallback={<p>Loading</p>}>
        <UserTable sortOrder={props.searchParams.sortOrder} />
      </Suspense>
    </div>
  );
};

export default UsersPage;

/*
CSR
- 큰 사이즈의 번들 크
- 리스 집약적 
- 검색 엔진 최적화 어려움
- 낮은 보안성
*/
