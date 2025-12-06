// src/pages/Home/Home.tsx
import Layout from "@/components/layout/Layout";
import { ButtonContext } from "@/types/ButtonContext";
import Container from "@/components/ui/Container/Container";
import Block from "@/components/ui/Block/Block";
import CardGrid from "@/components/features/CardGrid/CardGrid";
import Carousel from "@/components/ui/Carousel/Carousel";
import { CarouselData } from "@/data/CarouselData";
import Gallery from "@/components/features/Gallery/Gallery";
import style from "@/App.module.css";


const Home = () => {

 const handleClick = () => {
    console.log("Button clicked!");
  };


  return (
    <Layout>
      

  <div className="app-root">
       <div className={style.main}>
  {/* <div className={style.headerBlock}> */}
      <div
          style={{
            backgroundColor: "#081130",
            backgroundImage: "url(pick_1.jpg)",
            backgroundPosition: "right bottom",
          }}>
          <ButtonContext
            value={{ text: "Перейти в каталог", onClick: handleClick }}>
            <Container
              height={1175}
              // backgroundColor="#081130"
              // backgroundImage="url(pick_1.jpg)"
              // backgroundPosition="right bottom"
              left={
                <Block
                  label="вкуснейшие"
                  bigText="Пирожные и капкейки от 150 ₽/шт. с доставкой по Санкт Петербургу"
                  midText="Приготовим за 3 часа в день заказа. Доставка на авто в холодильнике."
                  smallText="9 различных видов на выбор"
                  color="#fff"
                />
              }

              // right={<div> <img src="pick_1.jpg" /></div>}
            />
          </ButtonContext>
        </div>

        <ButtonContext value={{ text: "Купить", onClick: handleClick }}>
          <CardGrid backgroundColor="#FFF" />
        </ButtonContext>

        <ButtonContext
          value={{ text: "Загрузить фотографию", onClick: handleClick }}>
          <Container
            height={1352}
            backgroundColor="#081130"
            backgroundImage="url(cloud_bottom.png), url(cloud_top.png), url(phone.png)"
            backgroundPosition="bottom, top, left bottom"
            right={
              <Block
                label="Не нашли то что нужно?"
                bigText="Приготовим заказ любой сложности по фото или эскизу"
                midText="Загрузите фотографию или эскиз капкейков и мы рассчитаем стоимость за 30 минут"
                // smallText="Подпись"
                color="#fff"
              />
            }
          />
        </ButtonContext>

        <ButtonContext
          value={{ text: "Задать вопрос Юлии", onClick: handleClick }}>
          <Container
            height={830}
            backgroundColor="#FFF"
            bg2="url(woman.png)"
            // backgroundImage="url(woman.png)"
            // backgroundPosition="center"
            // backgroundImage="url(cloud_top_2.png), url(cloud_bottom_2.png)"
            // backgroundPosition="top, bottom"
            left={
              <Block
                label="Кто будет готовить?"
                bigText="Лично приготовлю и всё красиво упакую для вашего события"
                midText="Проконсультирую по выбору капкейков и придумаю нестандартную идею"
                // smallText="Маленькая подпись под кнопкой"
              />
            }
          />
        </ButtonContext>

        <Carousel
          backgroundImage="url(cloud_top_2.png), url(cloud_bottom_2.png)"
          backgroundPosition="top, bottom"
          items={CarouselData}
        />

        <Gallery />
      </div>

    </div>

      
    </Layout>
  );
};

export default Home;
