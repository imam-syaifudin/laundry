import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../../Components/Loading';

function PaketEdit(props) {

    // Scrolling Ke form create
    const scrollForm = useRef(null);
    const executeScroll = () => scrollForm.current.scrollIntoView();

    const navigate = useNavigate();
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(true);

    // get params id
    const { id } = useParams();

    // get pelanggans 
    const [paket, setPaket] = useState([]);


    // data send to form
    const [kd_paket, setKdPaket] = useState('');
    const [nama_paket, setNamaPaket] = useState('');
    const [jenis_paket, setJenisPaket] = useState('');
    const [harga, setHarga] = useState('');

    const getPaket = async () => {
        await axios({
            method: 'get',
            url: `http://127.0.0.1:8000/api/paket/${id}`
        }).then(response => {
            setPaket(response.data);

            setKdPaket(response.data.kd_paket);
            setNamaPaket(response.data.nama_paket);
            setJenisPaket(response.data.jenis_paket);
            setHarga(response.data.harga);
            setLoading(false);


        }).catch(response => {
            setLoading(false);
            setError(response)
        })
    }

    const updatePaket = async (e) => {
        e.preventDefault();
        console.log(kd_paket,nama_paket,jenis_paket,harga);

        let pelangganForms = {
            'kd_paket': kd_paket,
            'nama_paket': nama_paket,
            'jenis_paket': jenis_paket,
            'harga': harga,
        };

        await axios({
            method: 'PUT',
            url: `http://127.0.0.1:8000/api/paket/${id}`,
            data: JSON.stringify(pelangganForms),
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
            navigate('/paket');
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
    useEffect(() => {
        executeScroll();
    },[paket])

    useEffect(() => {
        getPaket();
    }, [])

    return (
        <>

            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="card shadow mb-4 border-left-success" ref={scrollForm}>
                        <div className="card-header py-3 d-flex justify-content-between">
                            <i className="fa-solid fa-list"></i>
                            <h6 className="m-0 font-weight-bold text-success text-center">Edit Paket</h6>
                            <i className="fa-solid fa-list"></i>
                        </div>
                        {
                            loading ? (
                                <Loading />
                            ) : (
                                <div className="card-body" >

                                    <form onSubmit={updatePaket} key={paket.kd_paket}>
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">KD PAKET</label>
                                            <input type="text" className="form-control shadow-sm" id="exampleFormControlInput1" readOnly defaultValue={paket.kd_paket} onChange={(e) => setKdPaket(e.target.value)}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Nama Paket</label>
                                            <input type="text" className="form-control shadow-sm" id="exampleFormControlInput1" defaultValue={paket.nama_paket} onChange={(e) => setNamaPaket(e.target.value)}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Jenis Paket</label>
                                            <input type="text" className="form-control shadow-sm" id="exampleFormControlInput1" defaultValue={paket.jenis_paket} onChange={(e) => setJenisPaket(e.target.value)}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Harga</label>
                                            <input type="number" className="form-control shadow-sm" id="exampleFormControlInput1" defaultValue={paket.harga} onChange={(e) => setHarga(e.target.value)}/>
                                        </div>
                                        <div className='d-flex justify-content-around'>
                                            <button className="btn btn-success d-flex justify-content-between shadow-sm" style={{ width: '40%' }} type="submit">
                                                <i className="fa-solid fa-closed-captioning mt-1"></i>
                                                Edit
                                                <i className="fa-solid fa-closed-captioning mt-1"></i>
                                            </button>
                                            <Link to="/paket" className="btn btn-danger mx-1 d-flex justify-content-between shadow-sm" style={{ width: '40%' }}>
                                                <i class="fa-solid fa-backward mt-1"></i>
                                                Back
                                                <i class="fa-solid fa-backward mt-1"></i>
                                            </Link >
                                        </div>
                                    </form>




                                </div>

                            )
                        }
                    </div>

                </div>
            </div>

        </>
    );
}

export default PaketEdit;