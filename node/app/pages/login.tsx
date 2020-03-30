import Layout from '../components/MyLayout';
import SignUp from '../components/SignUp';
import Link from 'next/link';


export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <SignUp />
    </Layout>
  );
}