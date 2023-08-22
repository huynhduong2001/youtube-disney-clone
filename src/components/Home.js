import { styled } from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { setMovies } from "../features/movie/movieSlice";
import { selectUsername } from "../features/user/userSlice";

const Home = (props) => {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);

  useEffect(() => {
    const recommends = [];
    const newDisneys = [];
    const originals = [];
    const trending = [];
    const fetchMovies = async () => {
      try {
        const snapshot = await getDocs(collection(db, "movies"));
        snapshot.forEach((doc) => {
          const movieData = { id: doc.id, ...doc.data() };
          switch (movieData.type) {
            case "recommend":
              recommends.push(movieData);
              break;
            case "new":
              newDisneys.push(movieData);
              break;
            case "trending":
              trending.push(movieData);
              break;
            case "original":
              originals.push(movieData);
              break;
            default:
              break;
          }
        });

        dispatch(
          setMovies({
            recommend: recommends,
            newDisney: newDisneys,
            original: originals,
            trending: trending,
          })
        );
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [dispatch, username]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
