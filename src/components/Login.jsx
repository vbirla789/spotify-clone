import React from "react";
import styled from "styled-components";

export default function login() {
  const handleClick = () => {
    const clientId = "79fd05d53cf84cf7823e10b1703cef9e";
    const redirectUrl = "https://spotify-clone-kappa-five.vercel.app/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "%20user-read-private",
      "%20user-read-playback-state",
      "%20user-modify-playback-state",
      "%20user-read-currently-playing",
      "%20user-read-playback-position",
      "%20user-top-read",
      "%20user-read-recently-played",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      ""
    )}&response_type=token&show_daialog=true`;
  };

  return (
    <Container>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        alt="spotify"
      />
      <button onClick={handleClick}>Connect Spotify</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;
  img {
    height: 20vh;
    width: 400px;

    margin-top: -50px;
  }
  button {
    padding: 0.9rem 2.5rem;
    border-radius: 5rem;
    border: none;
    background-color: black;
    color: #49f585;
    font-size: 1.3rem;
    cursor: pointer;
  }
`;
