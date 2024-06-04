export const getServerSideProps = async ({ params }: any) => {
  const { name } = params;
  return {
    props: {
      name,
    },
  };
};

export default function Name(props: any) {
  return <>{props.name}</>;
}
