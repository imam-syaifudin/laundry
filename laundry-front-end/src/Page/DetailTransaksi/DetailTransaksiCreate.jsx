import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function DetailTransaksiCreate(props) {
    
    // Scrolling Ke form create
    const scrollForm = useRef(null);
    const executeScroll = () => scrollForm.current.scrollIntoView();    

    useEffect(() => {
        executeScroll();
    },[])

    return (
        <>

            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="card shadow mb-4 border-left-success" ref={scrollForm}>
                        <div className="card-header py-3 d-flex justify-content-between">
                            <i className="fa-solid fa-list"></i>
                            <h6 className="m-0 font-weight-bold text-success text-center">Create Detail Transaksi</h6>
                            <i className="fa-solid fa-list"></i>
                        </div>
                        <div className="card-body" >

                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">KD Detail</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">No Nota</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">KD Paket</label>
                                    <input type="date" className="form-control" id="exampleFormControlInput1" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Berat</label>
                                    <input type="number" className="form-control" id="exampleFormControlInput1"  />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label d-none">Total Biaya</label>
                                    <input type="hidden" className="form-control" id="exampleFormControlInput1"  />
                                </div>
                                <div className='d-flex justify-content-around'>
                                    <button className="btn btn-success d-flex justify-content-between" style={{ width: '40%' }}>
                                        <i className="fa-solid fa-closed-captioning mt-1"></i>
                                        Create
                                        <i className="fa-solid fa-closed-captioning mt-1"></i>
                                    </button>
                                    <Link to="/detailtransaksi" className="btn btn-danger mx-1 d-flex justify-content-between" style={{ width: '40%' }}>
                                        <i class="fa-solid fa-backward mt-1"></i>
                                        Back
                                        <i class="fa-solid fa-backward mt-1"></i>
                                    </Link >
                                </div>
                            </form>




                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default DetailTransaksiCreate;