import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";

function VideoComponent( { video }: any) {

  return (
    <Container>
      <ImageBanner src="https://i.ytimg.com/vi/vMxXN9mRoYg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhY1_9cslxZxP7BKujZZ2scrn8Fw" />
      <TitleContainer>
        <ChannelImage>
          AS
        </ChannelImage>
        <TextContainer>
          <Title>{video.title}</Title>
          <TextCard>{video.channel}</TextCard>
          <TextCard>{video.viewes} views - { video.time} ago</TextCard>
        </TextContainer>
      </TitleContainer>
    </Container>
  );
}

export default VideoComponent;
