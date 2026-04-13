import "../tailwind.css";
export const Footer = () => {
  return (
    <>
        <div className="flex flex-col md:flex-row  gap-10 ">
             <div className='left  w-4/12 '>
                <div className='flex md:mt-10 items-center gap-4 mb-5 '>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 aspect-square" viewBox="0 0 50 50" id="svg12688193849"><path d="M 41.852 50 L 0 50 L 0 8.112 L 41.852 8.112 Z M 0.668 49.332 L 41.184 49.332 L 41.184 8.78 L 0.668 8.78 Z" fill="var(--token-efbc6c56-80fe-4475-9b37-9684d6e92632, rgb(25, 25, 25))"/><path d="M 45.636 45.766 L 3.786 45.766 L 3.786 3.878 L 45.636 3.878 Z M 4.452 45.098 L 44.968 45.098 L 44.968 4.547 L 4.452 4.547 Z" fill="var(--token-efbc6c56-80fe-4475-9b37-9684d6e92632, rgb(25, 25, 25))"/><path d="M 49.642 41.89 L 7.792 41.89 L 7.792 0 L 49.642 0 Z M 8.461 41.222 L 48.976 41.222 L 48.976 0.668 L 8.461 0.668 Z" fill="var(--token-efbc6c56-80fe-4475-9b37-9684d6e92632, rgb(25, 25, 25))"/><path d="M 13.424 27.279 L 22.679 27.279 L 22.679 36.536 L 13.424 36.536 Z" fill="var(--token-c5c4fdcb-9482-48bb-aedf-353188472aae, rgb(25, 25, 25)) /* {&quot;name&quot;:&quot;text/default&quot;} */"/></svg>
                    <p className="text-3xl"> FYLLA</p>
                </div>
                <div className="mt-10">
                <p>Main Street. 1</p>
                <p>22222 Berlin</p>
                </div>
                <div className="mt-10 md:mt-20 flex items-center gap-4 text-sm ">
                    <p className="rounded-full border-2 border-black p-2 w-10 text-center">IN</p>
                    <p className="rounded-full border-2 border-black p-2 w-10 text-center">PI</p>
                    <p className="rounded-full border-2 border-black p-2  text-center">TW</p>
                </div>
             </div>
             <div className="middle md:w-0.5 md:h-64 w-full h-0.5 bg-black"></div>
             <div className='right flex  justify-between md:w-3/5 w-full '>
                <div>
                    <h2 className="md:text-3xl text-2xl mb-10">Page</h2>
                    <p className="text-sm md:text-lg tracking-widest font-extralight mb-2">Home</p>
                    <p className="text-sm md:text-lg tracking-widest font-extralight mb-2">Service</p>
                    <p className="text-sm md:text-lg tracking-widest font-extralight mb-2">Studio</p>
                    <p className="text-sm md:text-lg tracking-widest font-extralight">Contact</p>
                </div>
                <div>
                    <h2 className="md:text-3xl text-2xl mb-10">CMS</h2>
                    <p className="text-sm md:text-lg tracking-widest font-extralight mb-2">Work</p>
                    <p className="text-sm md:text-lg tracking-widest font-extralight mb-2">Work single</p>
                    <p className="text-sm md:text-lg tracking-widest font-extralight mb-2">Blog</p>
                    <p className="text-sm md:text-lg tracking-widest font-extralight">Blog single</p>
                </div>
                <div>
                    <h2 className="md:text-3xl text-2xl mb-10">Utility Pages</h2>
                    <p className="text-sm md:text-lg tracking-widest font-extralight mb-2">404 Error Page</p>
                    <p className="text-sm md:text-lg tracking-widest font-extralight mb-2">Licensing</p>
                </div>

             </div>
        </div>
        <div className="border border-black w-full h-0.5 mt-10"></div>
        <p className="m-5">© Made by NULL</p>
    </>
  )
}
