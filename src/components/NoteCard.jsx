import React from "react";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";

// const useStyles = makeStyles({
//   avatar: {
//     backgroundColor: (n) => {
//       if (n.category === "work") {
//         return yellow[700];
//       }
//       if (n.category === "money") {
//         return green[500];
//       }
//       if (n.category === "todos") {
//         return pink[500];
//       }
//       return blue[500];
//     },
//   },
// });

const NoteCard = (props) => {
  // const classes = useStyles(n);
  const { note } = props;
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          sx={{ padding: "500px" }}
          // avatar={
          //   <Avatar className={classes.avatar}>
          //     {n.category[0].toUpperCase()}
          //   </Avatar>
          // }
          action={
            <IconButton>
              <DeleteOutlineOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.tag}
        />
        <CardContent sx={{ padding: "500px" }}>
          <Typography variant="body2" color="textSecondary">
            {note.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
