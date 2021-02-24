export const mobileStyles = {
    ".nav-m": {
      position: "fixed",
      display: "flex",
      justifyContent: "space-between",
      textAlign: "center",
      height: "100vh",
      width: "50px",
      backgroundColor: "#101620dc"
    },
    ".nav-m a": {
      textDecoration: "none !important",
      color: "white",
      fontSize: "32px",
      transition: "0.15s ease-in"
    },
    ".nav-m a:hover": { transform: "scale(1.15)", transition: "0.175s ease-out" },
    ".nav-m img": { maxWidth: "50px", margin: "-10px 0" },
    ".nav-m a:first-child": { marginTop: "20px" },
    ".nav-m a:last-child": { marginBottom: "20px" },
    ".profile-icon": { marginLeft: "-5px !important" }
  }