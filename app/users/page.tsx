import React from "react";
import UserTable from "./UserTable";

interface Props {
  params: {};
  searchParams: { sortOrder: string };
}
const UsersPage = (props: Props) => {
  console.log(props);
  return (
    <div>
      <h1>This is USERPAGE</h1>
      <UserTable sortOrder={props.searchParams.sortOrder} />
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
