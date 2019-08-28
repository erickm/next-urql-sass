import Link from 'next/link';

const Navbar = () => (
  <div className="navbar">
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/test">
      <a>Test</a>
    </Link>
    <style jsx>
    {
      `
        a {
          display: inline-block;
          padding: 20px;
        }
      `
    }
  </style>
  </div>
  
);

export default Navbar;
