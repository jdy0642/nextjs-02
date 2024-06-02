export const getServerSideProps = async({params}) => {
    const {name} = params;
    return {
        props: {
            name
        }
    }
}

export default function Home(props) {
    return (
      <>{props.name}</>
    );
  }
  