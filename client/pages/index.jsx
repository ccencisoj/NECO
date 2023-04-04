export default function () {
  return null;
}

export const getServerSideProps = async () => {
  return {
    redirect: {
      permanent: false,
      destination: "/login",
    },
  };
};
