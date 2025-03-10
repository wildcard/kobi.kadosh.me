// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
const styles = require('./Author.module.scss');

type Props = {
  author: {
    name: string,
    bio: string
  },
  photo: {
    childImageSharp: {
      gatsbyImageData: Object
    }
  },
  isIndex: ?boolean,
};

const Author = ({ author, gravatar, photo, isIndex }: Props) => (
  <div className={styles.author}>
    <Link to="/">
      {gravatar ? <img
        src={gravatar.url}
        className={styles['author__photo']}
        width="75"
        height="75"
        alt={author.name}
      /> :
        <GatsbyImage
          image={getImage(photo)}
          className={styles['author__photo']}
          width={75}
          height={75}
          alt={author.name}
        />}
    </Link>

    {isIndex === true ? (
      <h1 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">
          {author.name}
        </Link>
      </h1>
    ) : (
      <h2 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">
          {author.name}
        </Link>
      </h2>
    )}
    <p className={styles['author__subtitle']}>{author.bio}</p>
  </div>
);

export default Author;
