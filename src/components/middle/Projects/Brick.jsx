import Video from '../../../images/Projects/BM/BMVideo.mp4'

function Brick() {
  return (
    <div className='Brick pr'>
      <div className='BM'>Brick & Morty</div>
      <p>
        Brick & Morty is a modern client facing retail web-portal that improves
        the user experience and increase sales for the company. The website
        consists of four main components including the Overview section, Related
        Items, Questions and Answers and Ratings and Reviews.
      </p>
      <p className='brick'>
        My role in the front-end redesign and optimization of Brick & Morty was
        the Overview Widget that allows a user to select a product and view
        relevent information. Selections in the overview update the selected
        product for other widgets on the page.
      </p>
      <p>The overview included a:</p>
      <ul className='BMlist'>
        <li>Photo carousel</li>
        <li>Photo Thumbnail selection</li>
        <li>Product Detail</li>
        <li>Cart</li>
      </ul>
      <video controls autoPlay loop muted>
        <source src={Video} type='video/mp4'></source>
      </video>
    </div>
  )
}

export default Brick
