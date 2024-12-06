import Cookies from "js-cookie";

export const createSession = () => {
  // const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  // const session = localStorage.getItem("accessToken");
  const session = "Xe7@95PuFP_eytoly.0909!";
  if (session) {
    Cookies.set("session", session, {
      expires: 7,
    });
  }
};

export const deleteSession = () => {
  Cookies.remove("session");
  localStorage.clear();
};
