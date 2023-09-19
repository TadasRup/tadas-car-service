export function SearchFields() {

    return (
        <>

    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-3 text-center bg-image mb-0 py-4'>

        <div className='mask border  border-4 h-100 border-dark rounded' style={{ background: 'linear-gradient(#343a40, #f0ad4e, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40, #343a40,#343a40,#343a40,#343a40,#343a40,#343a40,#343a40,#343a40,#343a40,#343a40,#343a40,#343a40,#343a40,#343a40,#343a40,#343a40,#f0ad4e,#343a40)'}}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-5'> </h1>

                
                <div className="row g-1" >
                    <div className="">
                        
                        <select className="form-select" id="exampleSelect">
                        <option value="">City</option>
                        <option value="1">Vilnius</option>
                        <option value="2">Kaunas</option>
                        <option value="3">Panevezys</option>
                        </select>
                    </div>
                    <div className="">
                        <select className="form-select" id="exampleSelect">
                        <option value="">specialization</option>
                        <option value="1">Elektros specialistas</option>
                        <option value="2">Variklio specialistas</option>
                        <option value="3">Kebulo specialistas</option>
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

    );
  }