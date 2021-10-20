import Head from 'next/head'
import ImgForm from '../components/imgForm.jsx'



const Home = () => {
   return (
    <>
      <div className="container mx-auto my-auto py-5 ">
        <h1 className="text-center text-5xl text-white font-roboto font-bold pt-12">Doctor Image</h1>
        <h3 className="text-center text-xl text-white font-lato font-semibold pt-8">Upload a Image and see what it looks like</h3>
        <ImgForm />
      </div>
    </>
  ) 
}


export default Home;