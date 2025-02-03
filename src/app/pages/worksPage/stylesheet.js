import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    position: "relative",
    zIndex: 2,
    paddingRight: "20%",
    paddingLeft: "20%",
    paddingBottom: 60,
  },
  tabs: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "start",
    gap: "20px",
    marginTop: 70,
  },
  imgContainer: {
    position: "relative",
    width: "250px",
    height: "250px",
    cursor: "pointer",
    "&:hover $overlay": {
      opacity: 1,
    },
    "&:hover $text": {
      opacity: 1,
    },
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    aspectRatio: "1 / 1",
    // borderRadius: "10px",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#4affa4",
    borderRadius: "10px",
    opacity: 0,
    transition: "    0.3s ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
  },
});

export default useStyles;
