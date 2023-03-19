import React, { useEffect } from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";

function CurrentTrack() {
  const [{ token, currentlyPlaying }, dispatch] = useStateProvider();
  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing ",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      //   console.log(response);
      if (response.data !== "") {
        const { item } = response.data;
        const currentlyPlaying = {
          id: item.id,
          name: item.name,
          artists: item.artists.map((artist) => artist.name),
          image: item.album.images[2].url,
        };
        dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
      } else {
        dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: null });
      }
    };
    getCurrentTrack();
  }, [token, dispatch]);
  return (
    <Container>
      {currentlyPlaying && (
        <div className="track">
          <div className="track__image">
            <img src={currentlyPlaying.image} alt="currentlyPlaying" />
          </div>
          <div className="track__info">
            <h4 className="track__info__track__name">
              {currentlyPlaying.name}
            </h4>
            <h6 className="track__info__track__artists">
              {currentlyPlaying.artists.join(", ")}
            </h6>
          </div>
        </div>
      )}
    </Container>
  );
}

export default CurrentTrack;

const Container = styled.div`
  .track {
    display: flex;
  }
  .track__image {
    // margin: 9px 0px;
    // width: 50%;
    margin-top: 7px;
  }
  .track__info {
    display: flex;
    flex-direction: column;
    color: white;
    margin-left: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .track__info__track__name {
    margin-top: 18px;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 2px;
  }
  .track__info__track__artists {
    margin-top: 0px;
    font-weight: 500;
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #b3b3b3;
  }
`;
