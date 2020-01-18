// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import type { FluidObject } from 'gatsby-image';
import styles from './Author.module.scss';

type Props = {
  author: {
    name: string,
    bio: string
  },
  photo: {
      childImageSharp: {
        fluid: FluidObject
      }
    },
  isIndex: ?boolean,
};

const Author = ({ author, photo, isIndex }: Props) => (
  <div className={styles['author']}>
    <Link to="/">
      <Img
        fluid={photo.childImageSharp.fluid}
        className={styles['author__photo']}
        width="75"
        height="75"
        alt={author.name}
      />
    </Link>

    { isIndex === true ? (
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
