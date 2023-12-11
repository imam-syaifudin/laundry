import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

function PaketCreate(props) {

    // Scrolling Ke form create
    const scrollForm = useRef(null);
    const executeScroll = () => scrollForm.current.scrollIntoView();

     // other
     const navigate = useNavigate();
     const [error,setError] = useState([]);
 
     // data send to form
     const [kd_paket,setKdPaket] = useState('');
     const [nama_paket,setNamaPaket] = useState('');
     const [jenis_paket,setJenisPaket] = useState('');
     const [harga,setHarga] = useState('');
     
     const addPaket = async (e) => {
         e.preventDefault(); 
 
         let pelangganForms = new FormData();
         pelangganForms.append('kd_paket',kd_paket);
         pelangganForms.append('nama_paket',nama_paket);
         pelangganForms.append('jenis_paket',jenis_paket);
         pelangganForms.append('harga',harga);
 
         axios({
             method: 'post',
             url: 'http://127.0.0.1:8000/api/paket',
             data: pelangganForms
         }).then(response => {
             Swal.fire({
                 icon: 'success',
                 title: 'Success',
                 text: 'Data berhasil ditambahkan!',
               })
               navigate('/paket');
             }).catch(response => {
                 setError(response)
                 console.log(error);
                 Swal.fire({
                     icon: 'error',
                     title: 'Error',
                     text: 'Gagal menambahkan data!',
                   })
         })
 
     }

    useEffect(() => {
        executeScroll();
    }, [])

    return (
        <>

            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="card shadow mb-4 border-left-success" ref={scrollForm}>
                        <div className="card-header py-3 d-flex justify-content-between">
                            <i className="fa-solid fa-list"></i>
                            <h6 className="m-0 font-weight-bold text-success text-center">Create Paket</h6>
                            <i className="fa-solid fa-list"></i>
                        </div>
                        <div className="card-body" >

                            <form onSubmit={addPaket}>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">KD PAKET</label>
                                    <input type="text" className="form-control shadow-sm" id="exampleFormControlInput1"onChange={(e) => { setKdPaket(e.target.value)}}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Nama Paket</label>
                                    <input type="text" className="form-control shadow-sm" id="exampleFormControlInput1" onChange={(e) => { setNamaPaket(e.target.value)}}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Jenis Paket</label>
                                    <input type="text" className="form-control shadow-sm" id="exampleFormControlInput1" onChange={(e) => { setJenisPaket(e.target.value)}}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Harga</label>
                                    <input type="number" className="form-control shadow-sm" id="exampleFormControlInput1" onChange={(e) => { setHarga(e.target.value)}}/>
                                </div>
                                <div className='d-flex justify-content-around'>
                                    <button className="btn btn-success d-flex justify-content-between shadow-sm" style={{ width: '40%' }}>
                                        <i className="fa-solid fa-closed-captioning mt-1"></i>
                                        Create
                                        <i className="fa-solid fa-closed-captioning mt-1"></i>
                                    </button>
                                    <Link to="/paket" className="btn btn-danger mx-1 d-flex justify-content-between shadow-sm" style={{ width: '40%' }}>
                                        <i className="fa-solid fa-backward mt-1"></i>
                                        Back
                                        <i className="fa-solid fa-backward mt-1"></i>
                                    </Link >
                                </div>
                            </form>x




                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default PaketCreate;