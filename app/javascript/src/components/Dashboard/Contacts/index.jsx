import React, { useState } from "react";

import { Button, Table } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import {
  CONTACTS_TABLE_COLUMN_DATA,
  CONTACTS_TABLE_ROW_DATA,
} from "./constants";
import Menu from "./Menu";

const Notes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Menu showMenu={showMenu} />
      <Container>
        <Header
          title="All Contacts"
          menuBarToggle={() => {
            setShowMenu(!showMenu);
          }}
          actionBlock={<Button label="Add Contact" icon="ri-add-line" />}
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <div className="notes-table-height w-full">
          <Table
            rowData={CONTACTS_TABLE_ROW_DATA}
            columnData={CONTACTS_TABLE_COLUMN_DATA}
            currentPageNumber={1}
            defaultPageSize={10}
            handlePageChange={function noRefCheck() {}}
            onRowClick={function noRefCheck() {}}
            onRowSelect={function noRefCheck() {}}
            allowRowClick={false}
          />
        </div>
      </Container>
    </>
  );
};

export default Notes;
