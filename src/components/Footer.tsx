import Layout from "./Layout";

export default function Footer() {
  return (
    <Layout>
      <footer className="text-center py-4 text-white">
        <p>
          &copy; {new Date().getFullYear()} [Your Name]. All Rights Reserved.
        </p>
      </footer>
    </Layout>
  );
}
