import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    position: "relative",
    paddingBottom: 60,
    display: "flex",
    padding:'0 20%',
    zIndex: 2,
    '@media (max-width: 1400px)': {
      padding: '0 50px',
    },
  },
  tabs: {
    justifyContent: "center",
    alignItems: "start",
    flexWrap: "wrap",
    display: "flex",
    marginTop: 70,
    gap: "20px",
  },
  imgContainer: {
    position: "relative",
    cursor: "pointer",
    height: "250px",
    width: "250px",
    "&:hover $overlay": {
      opacity: 1,
    },
    "&:hover $text": {
      opacity: 1,
    },
  },
  img: {
    aspectRatio: "1 / 1",
    objectFit: "cover",
    height: "100%",
    width: "100%",
  },
  overlay: {
    transition: "0.3s ease-in-out",
    backgroundColor: "#4affa4",
    justifyContent: "center",
    position: "absolute",
    alignItems: "center",
    display: "flex",
    height: "100%",
    width: "100%",
    opacity: 0,
    left: 0,
    top: 0,
  },
  text: {
    transition: "opacity 0.3s ease-in-out",
    fontWeight: "bold",
    fontSize: "20px",
    color: "white",
    opacity: 0,
  },
});

export default useStyles;
