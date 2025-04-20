import styles from './gallery.module.css';

const Gallery = () => {
    const columns = [
        [
          'https://picsum.photos/500/700?random=1-1',
          'https://picsum.photos/500/700?random=1-2',
          'https://picsum.photos/500/700?random=1-3',
          'https://picsum.photos/500/700?random=1-4',
          'https://picsum.photos/500/700?random=1-4',
          'https://picsum.photos/500/700?random=1-4',
          'https://picsum.photos/500/700?random=1-4',
        ],
        [
          'https://picsum.photos/500/700?random=2-1',
          'https://picsum.photos/500/700?random=2-2',
          'https://picsum.photos/500/700?random=2-3',
          'https://picsum.photos/500/700?random=2-4',
          'https://picsum.photos/500/700?random=2-5',
          'https://picsum.photos/500/700?random=2-6',
          'https://picsum.photos/500/700?random=2-7',
        ],
        [
          'https://picsum.photos/500/700?random=3-1',
          'https://picsum.photos/500/700?random=3-2',
          'https://picsum.photos/500/700?random=3-3',
          'https://picsum.photos/500/700?random=3-4',
          'https://picsum.photos/500/700?random=3-5',
          'https://picsum.photos/500/700?random=3-6',
          'https://picsum.photos/500/700?random=3-7',
        ],
        [
          'https://picsum.photos/500/700?random=4-1',
          'https://picsum.photos/500/700?random=4-2',
          'https://picsum.photos/500/700?random=4-3',
          'https://picsum.photos/500/700?random=4-4',
          'https://picsum.photos/500/700?random=4-5',
          'https://picsum.photos/500/700?random=4-6',
          'https://picsum.photos/500/700?random=4-7',
        ],
        [
          'https://picsum.photos/500/700?random=5-1',
          'https://picsum.photos/500/700?random=5-2',
          'https://picsum.photos/500/700?random=5-3',
          'https://picsum.photos/500/700?random=5-4',
          'https://picsum.photos/500/700?random=1-4',
          'https://picsum.photos/500/700?random=1-4',
          'https://picsum.photos/500/700?random=1-4',
        ],
      ];
    
      return (
        <div className={styles.grid}>
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className={styles.column}>
              {column.map((imageUrl, imageIndex) => (
                <img key={imageIndex} src={imageUrl} alt={`Random ${columnIndex + 1}-${imageIndex + 1}`} />
              ))}
            </div>
          ))}
        </div>
      );
    };
  export default Gallery;