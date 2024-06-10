import Link from 'next/link';
import axios from 'axios';

export async function getServerSideProps() {
  const userReq = await axios.get('https://jsonplaceholder.typicode.com/users');

  return {
    props: {
      users: userReq.data,
    },
  };
}

export default function Home({ users }: any) {
  return (
    <ul>
      {users.map((user: any) => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.username}`} passHref>
              {user.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
