import Link from 'next/link';
import axios from 'axios';

export async function getServerSideProps(ctx: any) {
  const { username } = ctx.query;
  const userReq = await axios.get(
    `http://localhost:3003/api/users/${username}`,
  );

  if (userReq.status === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user: userReq.data,
    },
  };
}

export default function UserPage({ user }: any) {
  return (
    <div>
      <div>
        <Link href="/" passHref>
          Back to home
        </Link>
      </div>
      <hr />
      <div style={{ display: 'flex' }}>
        <div>
          <div>
            <b>Username:</b> {user.username}
          </div>
          <div>
            <b>Full name: </b>
            {user.first_name} {user.last_name}
          </div>
          <div>
            <b>Email: </b>
            {user.email}
          </div>
          <div>
            <b>Company: </b>
            {user.company}
          </div>
          <div>
            <b>Job title: </b>
            {user.job_title}
          </div>
        </div>
      </div>
    </div>
  );
}
