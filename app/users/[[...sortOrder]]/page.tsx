import React from "react";
import UserTable from "./UserTable";
import { sort } from "fast-sort";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams }: Props) => {
  const { sortOrder } = await searchParams;
  return (
    <>
      <h1>Users </h1>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
