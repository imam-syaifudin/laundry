import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../../Components/Loading';
import { FormatRupiah } from "@arismun/format-rupiah";

function Paket(props) {
    const [paket, setPaket] = useState([]);
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(true);
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    const getPaket = async () => {
        axios({
            method: 'get',
            url: keyword == '' ? 'http://127.0.0.1:8000/api/paket' : `http://127.0.0.1:8000/api/paket/cari/${keyword}`
        }).then(response => {
            // setLoading(true);
            setLoading(true);
            let data = keyword == '' ? response.data : response.data.data
            setPaket(data);
            // setPelangganCari(data);
            setLoading(false);
        }).catch(response => {
            setLoading(true);
            setError(response.data)
            setLoading(false)
        })
    }

    const deletePaket = async (id) => {

        axios({
            method: 'delete',
            url: `http://127.0.0.1:8000/api/paket/${id}`
        }).then(response => {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Data berhasil dihapus!',
            })
            getPaket();
        }).catch(response => {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Data gagal dihapus!',
            })
        })

    }

    async function dataNotFound() {
        await Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Data gagal ditemukan!',
        })
        window.location.href = '/paket'
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            // setLoading(true);
            // console.log(keyword);
            getPaket();
            // setLoading(false);
        }, 100)
    
        return () => clearTimeout(delayDebounceFn)
      }, [keyword])



    // useEffect(() => {
    //     getPaket();

    // }, [paket]);
    const scrollTable = useRef(null);
    const executeScroll = () => scrollTable.current.scrollIntoView();

    useEffect(() => {
        executeScroll();

    }, [paket]);

    return (
        <>

            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="card shadow mb-4 border-left-success card-sm">
                        <div className="card-header py-3 d-flex justify-content-between">
                            <i className="fa-solid fa-list"></i>
                            <h6 className="m-0 font-weight-bold text-success text-center">Paket</h6>
                            <i className="fa-solid fa-list"></i>
                        </div>
                        <div className="card-body text-end">
                            <Link to="/paket/create" className="btn btn-secondary d-block d-flex justify-content-between mb-3" ref={scrollTable}>
                                <i className="fa-sharp fa-solid fa-user-plus mx-2 mt-1"></i>
                                Create Paket
                                <i className="fa-sharp fa-solid fa-user-plus mx-2 mt-1"></i>
                            </Link>
                            <div className="input-group mb-3" >
                                <span className="input-group-text" style={{ backgroundColor: '#4e73df' }} id="basic-addon2"><i className="fa-brands fa-searchengin text-light"></i></span>
                                <input type="text" className="form-control text-center" placeholder="Cari Paket" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e) => setKeyword(e.target.value)}/>
                                <span className="input-group-text" style={{ backgroundColor: '#4e73df' }} id="basic-addon2"><i className="fa-brands fa-searchengin text-light"></i></span>
                            </div>
                            {
                                loading ? (
                                    <Loading />
                                ) : (
                                    <table className="table table-bordered shadow-sm table-md">
                                        <thead className='text-center text-light' style={{ backgroundColor: '#3CB371', verticalAlign: 'middle' }}>
                                            <tr>
                                                <th scope="col" style={{ verticalAlign: 'middle' }}>No</th>
                                                <th scope="col" style={{ verticalAlign: 'middle' }}>KD Paket</th>
                                                <th scope="col" style={{ verticalAlign: 'middle' }}>Nama Paket</th>
                                                <th scope="col" style={{ verticalAlign: 'middle' }}>Jenis Paket</th>
                                                <th scope="col" style={{ verticalAlign: 'middle' }}>Harga</th>
                                                <th scope='col' style={{ verticalAlign: 'middle' }}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className='text-center table-light'>
                                            {
                                                paket !== undefined ? (

                                                    paket.map((val, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <th scope="row" style={{ verticalAlign: 'middle' }}>{index + 1}</th>
                                                                <td style={{ verticalAlign: 'middle' }}>{val.kd_paket}</td>
                                                                <td style={{ verticalAlign: 'middle' }}>{val.nama_paket}</td>
                                                                <td style={{ verticalAlign: 'middle' }}>{val.jenis_paket}</td>
                                                                <td style={{ verticalAlign: 'middle' }} className="text-success"><FormatRupiah value={val.harga}/></td>
                                                                <td className='col-3' style={{ verticalAlign: 'middle' }}>
                                                                    <Link className="btn btn-info mx-2" to={"/paket/edit/" + val.kd_paket}><i className="fa-solid fa-pen-to-square mx-1"></i></Link>
                                                                    <button className="btn btn-danger" onClick={() => deletePaket(val.kd_paket)}><i className="fa-solid fa-trash mx-1"></i></button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })

                                                ) : (
                                                        // dataNotFound()
                                                        ''
                                                    )
                                            }

                                        </tbody>
                                    </table>
                                )
                            }

                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Paket;