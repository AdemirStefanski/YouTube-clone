import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";

function VideoComponent() {

  return (
    <Container>
      <ImageBanner src="https://i.ytimg.com/vi/vMxXN9mRoYg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhY1_9cslxZxP7BKujZZ2scrn8Fw" />
      <TitleContainer>
        <ChannelImage>
          AS
        </ChannelImage>
        <TextContainer>
          <Title>Nina Simone: Strange Fruit (Live in Antibes, 1965) - Lyric Video</Title>
          <TextCard>Nina Simone</TextCard>
          <TextCard>18K views - 3 months ago</TextCard>
        </TextContainer>
      </TitleContainer>
    </Container>
  );
}

export default VideoComponent;
