import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header>
      <div>
        <h1>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
