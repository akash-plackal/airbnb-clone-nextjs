export default function Home({ sectionData }) {
  return (
    <div>
      {/* create a components for image cards */}

      {sectionData.hits.map((obj) => {
        // eslint-disable-next-line @next/next/no-img-element
        return <img src={obj.largeImageURL} alt={obj.tag} key={obj.id} />;
      })}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://pixabay.com/api/?key=30398713-7b8ce5b10cc95dd5af3d9c166&q=indoors&image_type=photo&pretty=true`
  );
  const data = await res.json();

  return {
    props: {
      sectionData: data,
    },
  };
};
