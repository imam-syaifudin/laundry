import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../../Components/Loading';

function TransaksiEdit(props) {

    // Scrolling Ke form create
    const scrollForm = useRef(null);
    const executeScroll = () => scrollForm.current.scrollIntoView();

    const { id } = useParams();


    // other
    const navigate = useNavigate();
    const [error, setError] = useState([]);

    // get transaksi
    const [transaksi, setTransaksi] = useState([]);

    // data send to form
    const [no_nota, setNoNota] = useState('');
    const [kd_pelanggan, setKdPelanggan] = useState('');
    const [tanggal_transaksi, setTanggalTransaksi] = useState('');
    const [total_bayar,setTotalBayar] = useState(0);
    const [pelanggan, setPelanggan] = useState([]);
    const [loading, setLoading] = useState(true);

    const getTransaksi = async () => {
        axios({
            method: 'get',
            url: `http://127.0.0.1:8000/api/transaksi/${id}`
        }).then(response => {
            setTransaksi(response.data);
            setNoNota(response.data.no_nota);
            setKdPelanggan(response.data.kd_pelanggan);
            setTanggalTransaksi(response.data.nama);
            setTotalBayar(response.data.alamat);
            setLoading(false);
        }).catch(response => {
            setLoading(false);
            setError(response)
        })
    }


    
    const updateTransaksi = async (e) => {
        e.preventDefault();

        let transaksiForms = {
            'no_nota': no_nota,
            'kd_pelanggan':kd_pelanggan, 
            'tanggal_transaksi':tanggal_transaksi, 
            'total_bayar':total_bayar, 
        };

        axios({
            method: 'PUT',
            url: `http://127.0.0.1:8000/api/transaksi/${id}`,
            data: JSON.stringify(transaksiForms),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then(response => {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Data berhasil di edit!',
            })
            navigate('/transaksi');
        }).catch(response => {
            setError(response)
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Gagal mengedit data!',
            })
        })

    }

    const getPelanggan = async () => {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/pelanggan'
        }).then(response => {
            // setLoading(true);
            setLoading(true);
            let data = response.data
            setPelanggan(data);
            // setPelangganCari(data);
            setLoading(false);
        }).catch(response => {
            setLoading(true);
            setError(response.data)
            setLoading(false)
        })
    }


    useEffect(() => {
        executeScroll();
    }, [transaksi])

    useEffect(() => {
        getTransaksi();
        getPelanggan();
    }, [])

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="card shadow mb-4 border-left-success" ref={scrollForm}>
                        <div className="card-header py-3 d-flex justify-content-between">
                            <i className="fa-solid fa-list"></i>
                            <h6 className="m-0 font-weight-bold text-success text-center">Edit Transaksi</h6>
                            <i className="fa-solid fa-list"></i>
                        </div>
                        <div className="card-body" >

                            <form onSubmit={updateTransaksi}>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">No Nota</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" defaultValue={transaksi.no_nota} onChange={(e) => setNoNota(e.target.value)} readOnly/>
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
                                                    return val.kd_pelanggan == transaksi.kd_pelanggan ? 
                                                    (
                                                        <option value={val.kd_pelanggan} key={index} selected>{val.kd_pelanggan}</option>
                                                    ) : (
                                                        <option value={val.kd_pelanggan} key={index}>{val.kd_pelanggan}</option>
                                                    )
                                                })

                                            )
                                        }
                                    </select>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Tanggal Transaksi</label>
                                    <input type="date" className="form-control" id="exampleFormControlInput1" defaultValue={transaksi.tanggal_transaksi} onChange={(e) => setTanggalTransaksi(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label d-none">Total Bayar</label>
                                    <input type="hidden" className="form-control" id="exampleFormControlInput1" />
                                </div>
                                <div className='d-flex justify-content-around'>
                                    <button className="btn btn-success d-flex justify-content-between" style={{ width: '40%' }} type="submit">
                                        <i className="fa-solid fa-closed-captioning mt-1"></i>
                                        Edit
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

export default TransaksiEdit;