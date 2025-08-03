export default function About() {
    return (
    <>
    <section id="about">
      <div className="bg-green">
        <div className="container">
          <div className='min-vh-83 text-white flex flex-col justify-center items-center'>
            <h2 className="uppercase font-bold mb-3 md:text-4xl text-3xl">about component</h2>

            <div className='text-white flex justify-center items-center mb-3'>
              <span className='light-line'></span>
              <i className="fa-solid fa-star mx-3"></i>
              <span className='light-line'></span>
            </div>
            
            <div className='container mx-auto lg:px-48 md:px-32 px-22'>
              <div className='grid lg:grid-cols-2 gap-9'>
                <div className='col-span-1'>
                  <p className='text-start'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className='col-span-1'>
                  <p className='text-start'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
      
    </>)
}