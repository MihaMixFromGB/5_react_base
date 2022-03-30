import { ListItemButton, ListItemText } from "@mui/material";

export function Chat({title, selected, handleListItemClick}) {
    return (
        <ListItemButton
          selected={selected}
          onClick={handleListItemClick}
        >
          <ListItemText primary={title} />
        </ListItemButton>
    );
}