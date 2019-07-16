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
      <Div>
        <h1>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </h1>
      </Div>
    </header>
  );
};

export default Header;
