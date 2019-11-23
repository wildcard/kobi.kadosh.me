// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import Author from './Author';

describe('Author', () => {
  const props = {
    author: {
      name: 'test',
      bio: 'test',
    },
    photo: {
      childImageSharp: {
        fluid: {
          base64: 'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIEBQP/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB2YR5xbFVKoukE//EAB0QAQACAQUBAAAAAAAAAAAAAAIAAwEEEBEhIjP/2gAIAQEAAQUCsWSKkkJlczT9CX/Iedv/xAAVEQEBAAAAAAAAAAAAAAAAAAAQAf/aAAgBAwEBPwEh/8QAFREBAQAAAAAAAAAAAAAAAAAAEAH/2gAIAQIBAT8BKf/EABsQAQACAgMAAAAAAAAAAAAAAAEQEQAhAiJh/9oACAEBAAY/AlC3L5APkdrDK3Oo/8QAHBAAAgICAwAAAAAAAAAAAAAAAREAITFREEGx/9oACAEBAAE/IUPLAliQVq4IFCqjvdmHqOHYbmwRj2Of/9oADAMBAAIAAwAAABAvCAD/xAAXEQADAQAAAAAAAAAAAAAAAAABECEx/9oACAEDAQE/EIFoL//EABcRAQADAAAAAAAAAAAAAAAAABABITH/2gAIAQIBAT8QizB//8QAHRABAQACAgMBAAAAAAAAAAAAAREAITFBEFHBsf/aAAgBAQABPxBm4eWVs+5NAPYUe978WugFJNcuFD10O1wh1jhaolDT0L8xKhE7Pofjirn/2Q==',
          aspectRatio: 1,
          src: '/static/f2f503f5b0e8c840dc4a02e3edbdb3b7/7c5ac/kobi-kadosh-thumb-256.jpg',
          srcSet: '/static/f2f503f5b0e8c840dc4a02e3edbdb3b7/f3ac7/kobi-kadosh-thumb-256.jpg 32w,\n/static/f2f503f5b0e8c840dc4a02e3edbdb3b7/116b2/kobi-kadosh-thumb-256.jpg 64w,\n/static/f2f503f5b0e8c840dc4a02e3edbdb3b7/7c5ac/kobi-kadosh-thumb-256.jpg 128w,\n/static/f2f503f5b0e8c840dc4a02e3edbdb3b7/97817/kobi-kadosh-thumb-256.jpg 192w,\n/static/f2f503f5b0e8c840dc4a02e3edbdb3b7/c296b/kobi-kadosh-thumb-256.jpg 256w',
          sizes: '(max-width: 128px) 100vw, 128px'
        }
      }
    },
    isIndex: false
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Author {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
