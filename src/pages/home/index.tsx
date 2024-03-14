
import VideoCard from "../../components/videoComponent/index";
import { Container, HomeContainer, MainContainer } from "./styles";
import { useAppContext } from "../../contexts/openMenu";
import { useState, useEffect } from "react";
import axios from 'axios'
import moment from "moment";
import { useCategoryContext } from "../../contexts/searchCategories";
import ShortsSection from "../../components/shorts-section/index";
import CategoryBar from "../../components/categoryBar/index";
import Header from "../../components/header/index";
import Menu from "../../components/menu/index";


function Home() {
  interface Videos {
    id: string;
    snippet: {
      title: string;
      thumbnails: {
        high: {
          url: string;
        };
        maxres: {
          url: string;
        };
      };
      channelTitle: string;
      publishedAt: string;
    };
    statistics: {
      viewCount: string;
    };
  }

  
  const [videos, setVideos] = useState<Videos[]>([]);
  const { categoryId } = useCategoryContext();

  //toda vez que a página for recarregada será executado a função load e isso também acontecera quando a variável categoryId for alterada.
  useEffect(() => {
    load();
  }, [categoryId]);

  const API_KEY = "AIzaSyB5zbuufMHJlM2oUXwgkCY28ZOjBaInnbg"; //chave de acesso a API

  //url de acesso a API com alguns filtros para obter melhores resultados. Alteração da categoria conforme selecionada pelo usuário e a chave de acesso a API.
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&hl=pt_BR&maxResults=48&regionCode=br&videoCategoryId=${categoryId}&key=${API_KEY}`;

  //função assíncrona que salva os itens da url dentro de uma variável resposta e desepois define a variável setVideos com esses itens.
  async function load() {
    try {
      const resposta = await axios.get(url);
      setVideos(resposta.data.items);
    } catch (erro) {
      console.log(erro);
    }
  }

  //função que formata o número de visualizações.
  function formatViewCount(viewCount: number): string {
    //a função recebe a informação como número e retorna como string
    if (viewCount >= 1000000) {
      return `${(viewCount / 1000000).toFixed(0)} mi de visualizações`;
    } else if (viewCount >= 1000) {
      return `${(viewCount / 1000).toFixed(0)} mil visualizações`;
    } else {
      return `${viewCount} visualizações`;
    }
  }

  //função que converte a data em que o vídeo foi publicado para exibir a quanto tempo se passou desta data. Usamos a biblioteca Moment para ajudar.
  function getPublishedTime(publishedAt: string) {
    const now = moment(); //define o horário atual como uma variável.
    const publishedTime = moment(publishedAt); //define a data de publicação como outra variável.
    const diffDays = now.diff(publishedTime, "days"); //solta o resultado da diferença de tempo entre o data atual e a data de publicação do vídeo.

    if (diffDays <= 0) {
      return "hoje";
    } else if (diffDays === 1) {
      return "há 1 dia";
    } else if (diffDays <= 7) {
      return `há ${diffDays} dias`; //em caso de dias(menor que 7 dias)
    } else if (diffDays <= 30) {
      const diffWeeks = Math.floor(diffDays / 7); //em caso de apenas uma semana
      if (diffWeeks === 1) {
        return "há 1 semana";
      } else {
        return `há ${diffWeeks} semanas`; //em caso de mais de uma semana
      }
    } else if (diffDays <= 365) {
      const diffMonths = Math.floor(diffDays / 30);
      if (diffMonths === 1) {
        return "há 1 mês"; //em caso de um mês
      } else {
        return `há ${diffMonths} meses`; //em caso de mais de um mês
      }
    } else {
      const diffYears = Math.floor(diffDays / 365);
      if (diffYears === 1) {
        //em caso de um ano
        return "há 1 ano";
      } else {
        return `há ${diffYears} anos`; //em caso de mais de um ano.
      }
    }
  }

  const { openMenu } = useAppContext();

  return (
    <HomeContainer>
      <Header />
      <Menu />
      <MainContainer openMenu={openMenu}>
        <CategoryBar />
        <Container openMenu={openMenu}>
          {videos.map((video) => (
            <VideoCard
              title={video.snippet.title}
              thumbnail={
                video.snippet.thumbnails.maxres?.url ||
                video.snippet.thumbnails.high?.url
              } //verifica se tem a thumbnail de máxima resolução e caso não tenha coloca a subsequente que seria high resolution.
              channelImage={video.snippet.channelTitle.charAt(0).toUpperCase()} //Como a API não disnponibiliza a imagem do canal, estamos colocando a letra inicial maíuscula do nome como imagem de exibição.
              channelName={video.snippet.channelTitle}
              details={`${formatViewCount(
                Number(video.statistics.viewCount)
              )} - ${getPublishedTime(video.snippet.publishedAt)}`}
              key={video.id}
            />
          ))}
        </Container>

        <ShortsSection />
      </MainContainer>
    </HomeContainer>
  );
}

export default Home;
