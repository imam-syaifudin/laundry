import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../../Components/Loading';

function PelangganEdit(props) {

    // Scrolling Ke form create
    const scrollForm = useRef(null);
    const executeScroll = () => scrollForm.current.scrollIntoView();
    const navigate = useNavigate();
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(true);

    // get params id
    const { id } = useParams();

    // get pelanggans 
    const [pelanggan, setPelanggan] = useState([]);


    // data send to form
    const [kd_pelanggan, setKdPelanggan] = useState('');
    const [nama, setNama] = useState('');
    const [alamat, setAlamat] = useState('');
    const [notelp, setNoTelp] = useState('');

    const getPelanggan = async () => {
        axios({
            method: 'get',
            url: `http://127.0.0.1:8000/api/pelanggan/${id}`
        }).then(response => {
            setPelanggan(response.data);
            setKdPelanggan(response.data.kd_pelanggan);
            setNama(response.data.nama);
            setAlamat(response.data.alamat);
            setNoTelp(response.data.notelp);
            setLoading(false);


        }).catch(response => {
            setLoading(false);
            setError(response)
        })
    }

    const updatePelanggan = async (e) => {
        e.preventDefault();

        let pelangganForms = {
            'kd_pelanggan':kd_pelanggan, 
            'nama':nama, 
            'alamat':alamat, 
            'notelp':notelp, 
        };

        axios({
            method: 'PUT',
            url: `http://127.0.0.1:8000/api/pelanggan/${id}`,
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
            navigate('/pelanggan');
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
    },[pelanggan])

    useEffect(() => {
        getPelanggan();
    }, [])

    return (
        <>
            
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="card shadow mb-4 border-left-success" ref={scrollForm}>
                        <div className="card-header py-3 d-flex justify-content-between">
                            <i className="fa-solid fa-list"></i>
                            <h6 className="m-0 font-weight-bold text-success text-center">Edit Pelanggan</h6>
                            <i className="fa-solid fa-list"></i>
                        </div>
                        {
                            loading ? (
                                <Loading />
                            ) : (
                                
                                <div className="card-body" >
                                    <form onSubmit={updatePelanggan} key={pelanggan.kd_pelanggan}>
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">KD PELANGGAN</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" name="kd_pelanggan" readOnly defaultValue={pelanggan.kd_pelanggan} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">NAMA</label>
                                            <input type="text" className="form-control" defaultValue={pelanggan.nama} id="exampleFormControlInput1" name="nama" onChange={(e) => setNama(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">ALAMAT</label>
                                            <input type="text" className="form-control" defaultValue={pelanggan.alamat} id="exampleFormControlInput1" name="alamat" onChange={(e) => setAlamat(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">NO TELP</label>
                                            <input type="text" className="form-control" defaultValue={pelanggan.notelp} id="exampleFormControlInput1" name="notelp" onChange={(e) => setNoTelp(e.target.value)} />
                                        </div>
                                        <div className='d-flex justify-content-around'>
                                            <button className="btn btn-success d-flex justify-content-between" style={{ width: '40%' }} type="submit">
                                                <i className="fa-solid fa-closed-captioning mt-1"></i>
                                                Edit
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
                            )
                        }
                    </div>

                </div>
            </div>

        </>
    );
}

export default PelangganEdit;