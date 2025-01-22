

// // // export default function Featured() {
// // //     return (
  
// // // <section className=" container2">
// // // <div className="flex">
// // //   <div className="text-center text-black ">
// // //     <img src="side table 1.png" alt="Side Table" width={1092} height={1641} className="w-[1000px] aboslute top-[500px] left-[400px]"/>
// // //     <h2 className="text-xl font-semibold ">Side Table</h2>
// // //     <a href="/products/side-table" className="text-black border-b-2 border-black">View More</a>
// // //   </div>
// // //   <div className="text-center text-black">
// // //     <img src="side table 2.png" alt="Rocket Chair" width={1092} height={1641}  />
// // //     <h2 className="text-xl font-semibold">Side Table</h2>
// // //     <a href="/products/side-table" className="text-black border-b-2 border-black">View More</a>
// // //   </div>
// // // </div>
// // // </section>

// // //     )}
    

const Featured = () => {
  const products = [
    { id: 1, name: "Side table", image: "side table 1.png" },
    { id: 2, name: "Sofa", image: "side table 2.png" },
  ];

  return (
    <div style={containerStyle}>
      {products.map((product) => (
        <div key={product.id} style={cardStyle}>
          <img src={product.image} alt={product.name} style={imageStyle} />
          <h3 style={nameStyle}>{product.name}</h3>
          <a href="#" style={linkStyle}>View More</a>
        </div>
      ))}
    </div>
  );
};

// Simple inline styles for the design
const containerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "20px",
  padding: "20px",
  backgroundColor: "#FAF4F4",
  flexWrap: "wrap", // Ensures content wraps
};


const cardStyle = {
  width: "90%", // Adjust width for smaller screens
    maxWidth: "400px", // Restrict maximum width
  height: "562px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#FAF4F4",
};

const imageStyle = {
  width: "80%",
  height: "auto",
  marginBottom: "10px",
};

const nameStyle = {
  fontSize: "3rem",
  fontWeight: "",
  color: "#333",
};

const linkStyle = {
  fontSize: "1.5rem" ,
  textDecoration: "semibol",
  color: "#000",
  borderBottom: "2px solid #000",
  marginBottom: "50px"
};


export default Featured;

// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'


// const Featured = () => {
//   return (
//     <main className='flex flex-col w-full md:flex-row md:w-[1347px] md:h-[672px] top-[996px] p-5 justify-around bg-white'>

//         {/* right side */}
//         <div className='w-[90%]  md:w-[605px] md:h-[562px] top-[1047px] left-[100px]  '>
//             <div className='w-[80%] h-[200px] md:w-[592px] md:h-[441px] top-[122px] left-[-54px] font-["Poppins"] '>
//                 <Image 
//                 src={'/side table 1.png'}
//                 width={641}
//                 height={122}
//                 alt='img'
//                 />

//             </div>

//             <div>
//                 <h2 className='w-[182px] h-[54px] top-[1430px] left-[205px] font-["Poppins"] font-normal text-[40px] leading-[54px] text-black'>Side table</h2>
//             </div>
//             <button className='[w-[182px] h-[54px] top-[1355px] text-black '>
//                 <Link href={''}
//                 className='[w-[181px]  h-[36px] top-[655px] font-["Poppins"] font-medium text-[24px] leading-[36px] text-black underline '
//                 >View More</Link>
//             </button>


//         </div>




//         {/* left side */}

//         <div className='w-[90%]  md:w-[605px] md:h-[562px] top-[1047px] left-[100px]  '>
//             <div className='w-[80%] h-[200px] md:w-[592px] md:h-[441px] top-[122px] left-[-54px] '>
//                 <Image 
//                 src={'/side table 2.png'}
//                 width={641}
//                 height={122}
//                 alt='img'
//                 />

//             </div>

//             <div>
//                 <h2 className='w-[182px] h-[54px] top-[1430px] left-[205px] font-["Poppins"] font-normal text-[40px] leading-[54px] text-black'>Side table</h2>
//             </div>
//             <button className='[w-[182px] h-[54px] top-[1355px] text-black '>
//                 <Link href={''}
//                 className='[w-[181px]  h-[36px] top-[655px] font-["Poppins"] font-medium text-[24px] leading-[36px] text-black underline '
//                 >View More</Link>
//             </button>


//         </div>








//     </main>
//   )
// }

// export default Featured