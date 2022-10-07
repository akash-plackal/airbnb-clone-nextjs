import { useRouter } from "next/router";

const NavSections = ({ image }) => {
  return (
    <div>
      {/* create a components for image cards */}

      {image.hits.map((obj) => {
        // eslint-disable-next-line @next/next/no-img-element
        return <img src={obj.largeImageURL} alt={obj.tag} key={obj.id} />;
      })}
    </div>
  );
};

export default NavSections;

export const getStaticPaths = () => {
  return {
    paths: [{ params: { keyword: "arctic" } }, { params: { keyword: "tree" } }],
    fallback: false, // can also be true or 'blocking'
  };
};

export async function getStaticProps(context) {
  const id = context.params.keyword;
  console.log(context);
  const res = await fetch(
    `https://pixabay.com/api/?key=30398713-7b8ce5b10cc95dd5af3d9c166&q=${id}&image_type=photo&pretty=true`
  );

  const data = await res.json();

  return {
    props: {
      image: data,
    },
  };
}
