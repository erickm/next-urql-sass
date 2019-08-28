import css from './Post.scss';

export default function Post({data}) {
  return(
    data.map((post, index) => {
      return(
        <li 
          key={index}
          className={css.root}>
          {post.id}
        </li>
      )
    })
  )
}