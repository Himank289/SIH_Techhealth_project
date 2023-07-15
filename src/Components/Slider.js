import { Carousel } from 'react-carousel-minimal';

function Sliders() {
  const data = [
    {
      image: "https://img.onmanorama.com/content/dam/mm/en/news/world/images/2022/5/3/narendra-modi.jpg",
      // caption: "San Francisco"
     
    },
    {
      image: "https://www.pmindia.gov.in/wp-content/uploads/2015/03/gov-track6.png",
      // caption: "Scotland"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRemx01BFqL7ciZyNHXMJxVgay0ASzReT6Ubg&usqp=CAU",
      // caption: "Darjeeling"
    },
    {
      image: "https://ehealth.eletsonline.com/wp-content/uploads/2020/01/healthcare-system-in-India.jpg",
      // caption: "San Francisco"
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      // caption: "Scotland"
    },
    // {
    //   image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGhlYWx0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    //   // caption: "Darjeeling"
    // },
    // {
    //   image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGhlYWx0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    //   // caption: "San Francisco"
    // },
    // {
    //   image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGVhbHRofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //   // caption: "Scotland"
    // },
    // {
    //   image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGVhbHRofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //   // caption: "Darjeeling"
    // }
  ];



  // const captionStyle = {
  //   fontSize: '2em',
  //   fontWeight: 'bold',
  // }
  // const slideNumberStyle = {
  //   fontSize: '20px',
  //   fontWeight: 'bold',
  // }


  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h1 style={{color:'#3e2723' ,fontSize:40}}></h1>
        <p style={{color:'#1b5e20', fontSize:20, marginTop:-30,paddingTop:'3em'}}></p>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            // captionStyle={captionStyle}
            radius="10px"
            // slideNumber={true}
            // slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="100px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            // thumbnails={true}
            // thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "30px auto",
              marginTop:-15,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Sliders;