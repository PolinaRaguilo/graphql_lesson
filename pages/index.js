import MeetupList from "../components/meetups/MeetupList";

const STATIC_MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5,12345 Some City",
    description: "First meetup",
  },
  {
    id: "m2",
    title: "Second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 4,654321 Some City",
    description: "Second meetup",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export const getServerSideProps = async (context) => {
  const req = context.req;
  const res = context.res;
  return {
    props: {
      meetups: STATIC_MEETUPS,
    },
  };
};

// export const getStaticProps = async () => {
//   return {
//     props: {
//       meetups: STATIC_MEETUPS,
//     },
//     revalidate: 1,
//   };
// };

export default HomePage;
