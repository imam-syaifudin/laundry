import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../../Components/Loading';

function TransaksiCreate(props) {

    // Scrolling Ke form create
    const scrollForm = useRef(null);
    const executeScroll = () => scrollForm.current.scrollIntoView();


    // other
    const navigate = useNavigate();
    const [error, setError] = useState([]);

    // data send to form
    const [no_nota, setNoNota] = useState('');
    const [kd_pelanggan, setKdPelanggan] = useState('');
    const [tanggal_transaksi, setTanggalTransaksi] = useState('');
    const total_bayar = 0;
    const [pelanggan, setPelanggan] = useState([]);
    const [loading, setLoading] = useState(true);


    const addTransaksi = async (e) => {
        e.preventDefault();

        let transaksiForms = new FormData();
        transaksiForms.append('no_nota', no_nota);
        transaksiForms.append('kd_pelanggan', kd_pelanggan);
        transaksiForms.append('tanggal_transaksi', tanggal_transaksi);
        transaksiForms.append('total_bayar', total_bayar);


        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/transaksi',
            data: transaksiForms
        }).then(response => {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Data berhasil ditambahkan!',
            })
            navigate('/transaksi');
        }).catch(response => {
            setError(response)
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Gagal menambahkan data!',
            })
        })

    }

    const getPelanggan = async () => {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/pelanggan/all'
        }).then(response => {
            // setLoading(true);
            setLoading(true);
            let data = response.data
            setPelanggan(data);
            setLoading(false);
        }).catch(response => {
            setLoading(true);
            setError(response.data)
            setLoading(false)
        })
    }
    
    
    useEffect(() => {
        executeScroll();
        getPelanggan();
    }, [])

    useEffect(() => {
        let data = pelanggan[0] == undefined ? 'null' : pelanggan[0].kd_pelanggan;
        setKdPelanggan(data)
    },[pelanggan])

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="card shadow mb-4 border-left-success" ref={scrollForm}>
                        <div className="card-header py-3 d-flex justify-content-between">
                            <i className="fa-solid fa-list"></i>
                            <h6 className="m-0 font-weight-bold text-success text-center">Create Transaksi</h6>
                            <i className="fa-solid fa-list"></i>
                        </div>
                        <div className="card-body" >

                            <form onSubmit={addTransaksi}>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">No Nota</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => setNoNota(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Kd Pelanggan</label>
                                    <select className="form-select form-select-lg" style={{ backgroundColor: '#f2f2f2', borderRadius: '50px', fontSize: '16px' }} aria-label="Default select example" onChange={(e) => setKdPelanggan(e.target.value)}>
                                        {
                                            loading ? (
                                                <option>Loading...</option>
                                            ) 
                                            : (
                                                pelanggan.map((val, index) => {
                                                    return (
                                                        <option value={val.kd_pelanggan} key={index}>{val.kd_pelanggan}</option>
                                                    )
                                                })

                                            )
                                        }
                                    </select>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Tanggal Transaksi</label>
                                    <input type="date" className="form-control" id="exampleFormControlInput1" onChange={(e) => setTanggalTransaksi(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label d-none">Total Bayar</label>
                                    <input type="hidden" className="form-control" id="exampleFormControlInput1" />
                                </div>
                                <div className='d-flex justify-content-around'>
                                    <button className="btn btn-success d-flex justify-content-between" style={{ width: '40%' }} type="submit">
                                        <i className="fa-solid fa-closed-captioning mt-1"></i>
                                        Create
                                        <i className="fa-solid fa-closed-captioning mt-1"></i>
                                    </button>
                                    <Link to="/transaksi" className="btn btn-danger mx-1 d-flex justify-content-between" style={{ width: '40%' }}>
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

export default TransaksiCreate;