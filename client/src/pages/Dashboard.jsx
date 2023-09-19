
export function Dashboard() {
    return (
        <>

        <header style={{ paddingLeft: 0 }}>
          <div
            className='p-3 text-center bg-image mb-0 py-4'>
            <div className='mask border  border-4 h-100 border-info rounded' style={{ background: 'linear-gradient(#343a40, #f0ad4e, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40,#343a40,#343a40,#343a40,#343a40,#343a40,#343a40,#343a40,#343a40,#343a40,#343a40,#343a40,#343a40,#343a40,#343a40,#343a40,#f0ad4e,#343a40)'}}>
              <div className='d-flex justify-content-center align-items-center h-100'>
                <div className='text-white'>
                  <h1 className='mb-5'> </h1>
    
                    
                    <div className="row g-1" >
                        <div className="">
                            
                            <select className="form-select" id="exampleSelect">
                            <option value="">Name</option>
                            <option value="1">Jon Wick</option>
                            <option value="2">Jon Blue</option>
                            <option value="3">Jon Ask</option>
                            </select>
                        </div>
                        
                        <div className=" d-flex mb-5">
                                <input className="form-control me-2" type="search" placeholder="Key word" aria-label="Search"/>
                                <button className="btn btn-info" type="submit">Paieška</button>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </header>
    
            </>
  )
}