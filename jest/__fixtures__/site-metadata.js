'use strict';

module.exports = {
  authorPhoto: {
    childImageSharp: {
      fluid: {
        base64: 'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB61MrFhCP/8QAGBAAAwEBAAAAAAAAAAAAAAAAAQIDIQD/2gAIAQEAAQUCqxCDV62JNs7/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAbEAABBAMAAAAAAAAAAAAAAAABABAREiFBUf/aAAgBAQAGPwI1MFBsbUcb/8QAGBAAAwEBAAAAAAAAAAAAAAAAAAERITH/2gAIAQEAAT8hc0DbLg9FtQ+nRht0c7BvT//aAAwDAQACAAMAAAAQpC//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAcEAEBAQADAAMAAAAAAAAAAAABEQAxQVEhccH/2gAIAQEAAT8QJyLwO3xnXoKslZ51mY6nNHlR5ufAQAT7T8z5/9k=',
        aspectRatio: 1,
        src: '/static/0ee1c4751ce6a7c3fbff9c8236b02eab/7c5ac/kobi-kadosh-1.jpg',
        srcSet: '/static/0ee1c4751ce6a7c3fbff9c8236b02eab/f3ac7/kobi-kadosh-1.jpg 32w,\n/static/0ee1c4751ce6a7c3fbff9c8236b02eab/116b2/kobi-kadosh-1.jpg 64w,\n/static/0ee1c4751ce6a7c3fbff9c8236b02eab/7c5ac/kobi-kadosh-1.jpg 128w,\n/static/0ee1c4751ce6a7c3fbff9c8236b02eab/97817/kobi-kadosh-1.jpg 192w,\n/static/0ee1c4751ce6a7c3fbff9c8236b02eab/c296b/kobi-kadosh-1.jpg 256w,\n/static/0ee1c4751ce6a7c3fbff9c8236b02eab/4aac9/kobi-kadosh-1.jpg 2500w',
        sizes: '(max-width: 128px) 100vw, 128px'
      }
    }
  },
  site: {
    siteMetadata: {
      url: 'http://localhost',
      title: 'Test title',
      subtitle: 'Test subtitle',
      copyright: 'Test copyright',
      disqusShortname: '',
      postsPerPage: 4,
      menu: [
        {
          label: 'Test label 1',
          path: '/test/1/'
        },
        {
          label: 'Test label 2',
          path: '/test/2/'
        },
        {
          label: 'Test label 3',
          path: '/test/3/'
        }
      ],
      author: {
        name: 'Test name',
        photo: '/test.jpg',
        bio: 'Test bio',
        contacts: {
          email: '#',
          telegram: '#',
          twitter: '#',
          github: '#',
          rss: '#',
          vkontakte: '#'
        }
      }
    }
  }
};
