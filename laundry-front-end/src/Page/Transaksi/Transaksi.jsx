import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../../Components/Loading';

function Transaksi() {
    const [transaksi, setTransaksi] = useState([]);
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(true);
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();


    const getTransaksi = async () => {
        axios({
            method: 'get',
            url: keyword == '' ? 'http://127.0.0.1:8000/api/transaksi' : `http://127.0.0.1:8000/api/transaksi/cari/${keyword}`
        }).then(response => {
            // setLoading(true);
            setLoading(true);
            let data = keyword == '' ? response.data : response.data.data
            setTransaksi(data);
            // setPelangganCari(data);
            setLoading(false);
        }).catch(response => {
            setLoading(true);
            setError(response.data)
            setLoading(false)
        })
    }

    const deleteTransaksi = async (id) => {

        axios({
            method: 'delete',
            url: `http://127.0.0.1:8000/api/transaksi/${id}`
        }).then(response => {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Data berhasil dihapus!',
            })
            getTransaksi();
        }).catch(response => {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Data gagal dihapus!',
            })
        })
        
    }
    

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            // setLoading(true);
            // console.log(keyword);
            getTransaksi();
            // setLoading(false);
        }, 100)
    
        return () => clearTimeout(delayDebounceFn)
      }, [keyword])



      const scrollTable = useRef(null);
      const executeScroll = () => scrollTable.current.scrollIntoView();
  
      useEffect(() => {
          executeScroll();
  
      }, [transaksi]);

    return (
        <>

            <div className="row justify-content-center">
                <div className="col-lg-12 text-center">
                    <div className="card shadow mb-4 border-left-success">
                        <div className="card-header py-3 d-flex justify-content-between">
                            <i className="fa-solid fa-list"></i>
                            <h6 className="m-0 font-weight-bold text-success text-center">Transaksi</h6>
                            <i className="fa-solid fa-list"></i>
                        </div>
                        <div className="card-body text-end">

                            <Link to="/transaksi/create" className="btn btn-secondary d-block d-flex justify-content-between mb-3">
                                <i className="fa-sharp fa-solid fa-user-plus mx-2 mt-1"></i>
                                Create Transaksi
                                <i className="fa-sharp fa-solid fa-user-plus mx-2 mt-1"></i>
                            </Link>
                            <div className="input-group mb-3" ref={scrollTable}>
                                <span className="input-group-text" style={{ backgroundColor: '#4e73df' }} id="basic-addon2"><i className="fa-brands fa-searchengin text-light"></i></span>
                                <input type="text" className="form-control text-center" placeholder="Cari Transaksi" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e) => setKeyword(e.target.value)} />
                                <span className="input-group-text" style={{ backgroundColor: '#4e73df' }} id="basic-addon2"><i className="fa-brands fa-searchengin text-light"></i></span>
                            </div>
                            {
                                loading ? (
                                    <Loading />
                                ) : (
                                    <table className="table table-bordered shadow-sm">
                                        <thead className='text-center text-light' style={{ backgroundColor: '#3CB371', verticalAlign: 'middle' }}>
                                            <tr>
                                                <th scope="col" style={{ verticalAlign: 'middle' }}>No</th>
                                                <th scope="col" style={{ verticalAlign: 'middle' }}>No Nota</th>
                                                <th scope="col" style={{ verticalAlign: 'middle' }}>Kd Pelanggan</th>
                                                <th scope="col" style={{ verticalAlign: 'middle' }}>Tanggal Transaksi</th>
                                                <th scope="col" style={{ verticalAlign: 'middle' }}>Total Bayar</th>
                                                <th scope='col' style={{ verticalAlign: 'middle' }}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className='text-center table-light'>
                                            {
                                                transaksi !== undefined ? (

                                                    transaksi.map((val, index) => {
                                                        return (
                                                            <tr key={val.no_nota}>
                                                                <th scope="row" style={{ verticalAlign: 'middle' }}>{index + 1}</th>
                                                                <td style={{ verticalAlign: 'middle' }}>{val.no_nota}</td>
                                                                <td style={{ verticalAlign: 'middle' }}>{val.kd_pelanggan}</td>
                                                                <td style={{ verticalAlign: 'middle' }}>{val.tanggal_transaksi}</td>
                                                                <td style={{ verticalAlign: 'middle' }}>{val.total_bayar}</td>
                                                                <td className='col-3' style={{ verticalAlign: 'middle' }}>
                                                                    <Link className="btn btn-info mx-2" to={"/transaksi/edit/" + val.no_nota}><i className="fa-solid fa-pen-to-square mx-1"></i></Link>
                                                                    <button className="btn btn-danger" onClick={() => deleteTransaksi(val.no_nota)}><i className="fa-solid fa-trash mx-1"></i></button>
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

export default Transaksi;