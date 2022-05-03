import { ListItemButton, ListItemText } from "@mui/material";

export function Chat({title, selected, handleListItemClick, children}) {
    return (
        <ListItemButton
          selected={selected}
          onClick={handleListItemClick}
          data-testid="chat__container"
        >
          <ListItemText primary={title} />
          {children}
        </ListItemButton>
    );
}