import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';


function AccountMenu({ disp }) {

    const [anchorEl, setAnchorEl] = useState(disp);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    // <div className="accountMenu">
    //   <Menu
    //     anchorEl={anchorEl}
    //     open={Boolean(anchorEl)}>
    //     <MenuItem>My Profile</MenuItem>
    //   </Menu>
    // </div>

    <div style={{ height: 250, width: '100%' }}>
      <DataGrid
        columns={[{ field: 'name' }]}
        rows={[
          { id: 1, name: 'React' },
          { id: 2, name: 'Material-UI' },
        ]}
      />
    </div>
  );
}

export default AccountMenu;
