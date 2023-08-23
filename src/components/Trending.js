import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTrending } from "../features/movie/movieSlice";
const Trending = (props) => {
  const trending = useSelector(selectTrending);
  return (
    <Container>
      <h4>Trending</h4>
      <Content>
        {trending &&
          trending.map((trend, key) => (
            <Wrap key={key}>
              {trend.id}
              <Link to={`/detail/` + trend.id}>
                <img src={trend.cardImg} alt={trend.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 16px;
`;
const Content = styled.div`
  display: grid;
  grid-gap: 16px;
  gap: 16px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 4px;
  box-shadow: rgb(0 0 0/ 69%) 0 26px 30px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    top: 0;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
      rgb(0 0 0 / 72%) 0 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgb(249, 249, 249, 0.8);
  }
`;

export default Trending;
