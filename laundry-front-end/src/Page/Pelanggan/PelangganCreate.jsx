import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

function PelangganCreate(props) {
    
    // Scrolling Ke form create
    const scrollForm = useRef(null);
    const executeScroll = () => scrollForm.current.scrollIntoView();

    // other
    const navigate = useNavigate();
    const [error,setError] = useState([]);

    // data send to form
    const [kd_pelanggan,setKdPelanggan] = useState('');
    const [nama,setNama] = useState('');
    const [alamat,setAlamat] = useState('');
    const [notelp,setNoTelp] = useState('');
    
    const addPelanggans = async (e) => {
        e.preventDefault(); 

        let pelangganForms = new FormData();
        pelangganForms.append('kd_pelanggan',kd_pelanggan);
        pelangganForms.append('nama',nama);
        pelangganForms.append('alamat',alamat);
        pelangganForms.append('notelp',notelp);

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/pelanggan',
            data: pelangganForms
        }).then(response => {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Data berhasil ditambahkan!',
              })
              navigate('/pelanggan');
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
    },[])

    return (
        <>

            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="card shadow mb-4 border-left-success" ref={scrollForm}>
                        <div className="card-header py-3 d-flex justify-content-between">
                            <i className="fa-solid fa-list"></i>
                            <h6 className="m-0 font-weight-bold text-success text-center">Create Pelanggan</h6>
                            <i className="fa-solid fa-list"></i>
                        </div>
                        <div className="card-body" >

                            <form onSubmit={addPelanggans}>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">KD PELANGGAN</label>
                                    <input type="text" onChange={(e) => setKdPelanggan(e.target.value)}  className="form-control" id="exampleFormControlInput1" name="kd_pelanggan" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">NAMA</label>
                                    <input type="text" onChange={(e) => setNama(e.target.value)}  className="form-control" id="exampleFormControlInput1" name="nama" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">ALAMAT</label>
                                    <input type="text" onChange={(e) => setAlamat(e.target.value)}  className="form-control" id="exampleFormControlInput1" name="alamat" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">NO TELP</label>
                                    <input type="text" onChange={(e) => setNoTelp(e.target.value)} className="form-control" id="exampleFormControlInput1" name="notelp" />
                                </div>
                                <div className='d-flex justify-content-around'>
                                    <button className="btn btn-success d-flex justify-content-between" style={{ width: '40%' }} type="submit">
                                        <i className="fa-solid fa-closed-captioning mt-1"></i>
                                        Create
                                        <i className="fa-solid fa-closed-captioning mt-1"></i>
                                    </button>
                                    <Link to="/pelanggan" className="btn btn-danger mx-1 d-flex justify-content-between" style={{ width: '40%' }}>
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

export default PelangganCreate;