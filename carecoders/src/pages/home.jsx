import Header from "../components/Header";
import Banner from "../images/banner.jpg";
import styled from "styled-components";

const BannerImage = styled.img`
  width: 100%;
  height: auto;
`;

function Home() {
  return (
    <div>
      <Header />
      <BannerImage src={Banner} alt="Banner" />
    </div>
  );
}

export default Home;
