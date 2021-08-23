import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Home({ exploreData, cardsData }) {
  console.log(exploreData);
  console.log(cardsData);
  return (
    <div>
      <Head>
        <title>Airbnb clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Banner></Banner>
      <Main exploreData={exploreData} cardsData={cardsData}></Main>
      <Footer></Footer>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
