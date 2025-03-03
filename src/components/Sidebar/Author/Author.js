// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import './Author.module.scss';

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

const Author = ({ author, gravatar, photo, isIndex }: Props) => (
  <div className="author">
    <Link to="/">
      {gravatar ? <img
        src={gravatar.url}
        className="author__photo"
        width="75"
        height="75"
        alt={author.name}
      /> :
        <Img
          fluid={photo.childImageSharp.fluid}
          className="author__photo"
          width="75"
          height="75"
          alt={author.name}
        />}
    </Link>

    {isIndex === true ? (
      <h1 className="author__title">
        <Link className="author__title-link" to="/">
          {author.name}
        </Link>
      </h1>
    ) : (
      <h2 className="author__title">
        <Link className="author__title-link" to="/">
          {author.name}
        </Link>
      </h2>
    )}
    <p className="author__subtitle">{author.bio}</p>
  </div>
);

export default Author;
