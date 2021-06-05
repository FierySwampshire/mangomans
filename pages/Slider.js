import AwesomeSlider from 'react-awesome-slider'


const items = [
    {
      source: '/mango1.jpg',
    },
    {
      source: '/mango2.jpg',
    },
    {
      source: '/mango3.jpg',
    }, 
    {
      source: 'mangovid1.mp4'
    }, {
      source: 'brochure.jpg'
    }
  ]
  
  const Slider = ()=>(
    <AwesomeSlider 
      media={items} 
      className='sliderclass'
    />
  );

  export default Slider