import * as React from "react";
import Base from "../components/Base";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import noteContext from "../context/note/noteContext";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const context = React.useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = React.useState({
    title: "",
    description: "",
    tag: "",
  });

  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setNote({
      ...note,
      [field]: actualValue,
    });
  };

  const createNote = (event) => {
    event.preventDefault();

    addNote(note)
      .then((data) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Base />
      {isMobile ? (
        <Container sx={{ marginTop: "100px" }}>
          <Typography variant="h5" color="secondary.dark">
            Your notes
          </Typography>
          <Box
            component="form"
            onSubmit={createNote}
            sx={{ marginTop: "20px" }}
          >
            <Typography variant="body2" color="secondary.main">
              Enter notes title
            </Typography>
            <TextField
              fullWidth
              type="text"
              label="Title"
              id="title"
              name="title"
              value={note.title}
              onChange={(e) => handleChange(e, "title")}
              sx={{ marginTop: "10px" }}
            />
            <Typography
              variant="body2"
              color="secondary.main"
              sx={{ marginTop: "20px" }}
            >
              Enter notes description
            </Typography>
            <TextField
              fullWidth
              multiline
              type="text"
              label="Description"
              id="description"
              name="description"
              minRows={5}
              maxRows={10}
              value={note.description}
              onChange={(e) => handleChange(e, "description")}
              sx={{ marginTop: "10px" }}
            />
            <Typography
              variant="body2"
              color="secondary.main"
              sx={{ marginTop: "20px" }}
            >
              Enter notes tag
            </Typography>
            <TextField
              fullWidth
              type="text"
              label="Tag"
              id="tag"
              name="tag"
              value={note.tag}
              onChange={(e) => handleChange(e, "tag")}
              sx={{ marginTop: "10px" }}
            />
            <Box
              display="flex"
              justifyContent="flex-end"
              sx={{ marginTop: "20px" }}
            >
              <Button variant="contained" type="submit">
                Save
              </Button>
            </Box>
          </Box>
        </Container>
      ) : (
        <Container sx={{ marginTop: "150px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box>
                <Avatar
                  alt="cover_login"
                  src="./cover_3.webp"
                  variant="square"
                  sx={{ width: "85%", height: "85%", marginTop: "10px" }}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" color="secondary.dark">
                Your notes
              </Typography>
              <Box
                component="form"
                onSubmit={createNote}
                sx={{ marginTop: "20px" }}
              >
                <Typography variant="body2" color="secondary.main">
                  Enter notes title
                </Typography>
                <TextField
                  fullWidth
                  type="text"
                  label="Title"
                  id="title"
                  name="title"
                  value={note.title}
                  onChange={(e) => handleChange(e, "title")}
                  sx={{ marginTop: "10px" }}
                />
                <Typography
                  variant="body2"
                  color="secondary.main"
                  sx={{ marginTop: "20px" }}
                >
                  Enter notes description
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  type="text"
                  label="Description"
                  id="description"
                  name="description"
                  minRows={5}
                  maxRows={10}
                  value={note.description}
                  onChange={(e) => handleChange(e, "description")}
                  sx={{ marginTop: "10px" }}
                />
                <Typography
                  variant="body2"
                  color="secondary.main"
                  sx={{ marginTop: "20px" }}
                >
                  Enter notes tag
                </Typography>
                <TextField
                  fullWidth
                  type="text"
                  label="Tag"
                  id="tag"
                  name="tag"
                  value={note.tag}
                  onChange={(e) => handleChange(e, "tag")}
                  sx={{ marginTop: "10px" }}
                />
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  sx={{ marginTop: "20px" }}
                >
                  <Button variant="contained" type="submit">
                    Save
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Create;
