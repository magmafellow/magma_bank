
"use client";

import { Dropdown } from "flowbite-react";

export default function AccountsDropdown() {
  return (
    <Dropdown size="sm" label="Accounts" dismissOnClick={false}>
      <Dropdown.Item>main account</Dropdown.Item>
      <Dropdown.Item>secondary income</Dropdown.Item>
      <Dropdown.Item>family deposite</Dropdown.Item>
    </Dropdown>
  );
}
