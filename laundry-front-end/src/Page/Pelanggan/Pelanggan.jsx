import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../../Components/Loading';

function Pelanggan() {
    const [pelanggan, setPelanggan] = useState([]);
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(true);
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    const [links, setLinks] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [dataLink, setDataLinks] = useState([]);

    const [lastPage, setLastPage] = useState(0);
    const [firstPage, setFirstPage] = useState(0);



    const getPelanggan = async () => {
        axios({
            method: 'get',
            url: keyword == '' ? 'http://127.0.0.1:8000/api/pelanggan' : `http://127.0.0.1:8000/api/pelanggan/cari/${keyword}`
        }).then(response => {
            setLoading(true);
            let data = keyword == '' ? response.data : response.data.val


            setPelanggan(data.data);
            setLinks(data.links);
            setDataLinks(data);
            setCurrentPage(data.current_page);

            setLoading(false);
        }).catch(response => {
            setLoading(true);
            setError(response.data)
            setLoading(false)
        })
    }

    const changePaginate = async (url, index) => {

        axios({
            method: 'get',
            url: url
        }).then(response => {
            setLoading(true);

            let data = keyword == '' ? response.data : response.data.val

            
            setPelanggan(data.data);
            setLinks(data.links);
            setDataLinks(data);
            setCurrentPage(data.current_page);

            setLastPage(index);
            setFirstPage(index);

            setLoading(false);
        }).catch(response => {
            setLoading(true);
            setError(response.data)
            setLoading(false)
        })
    }

    const deletePelanggan = async (id) => {

        axios({
            method: 'delete',
            url: `http://127.0.0.1:8000/api/pelanggan/${id}`
        }).then(response => {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Data berhasil dihapus!',
            })
            getPelanggan();
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
            getPelanggan();
        }, 100)

        return () => clearTimeout(delayDebounceFn)
    }, [keyword])

    

    links.splice(0, 1);
    links.splice(links.length - 1);

    const scrollTable = useRef(null);
    const executeScroll = () => scrollTable.current.scrollIntoView();

    useEffect(() => {
        executeScroll();

    }, [pelanggan]);

    return (
        <>

            <div className="row justify-content-center">
                <div className="col-lg-12 text-center">
                    <div className="card shadow mb-4 border-left-success card-sm" >
                        <div className="card-header py-3 d-flex justify-content-between">
                            <i className="fa-solid fa-list"></i>
                            <h6 className="m-0 font-weight-bold text-success text-center">Pelanggan</h6>
                            <i className="fa-solid fa-list"></i>
                        </div>
                        <div className="card-body text-end">

                            <Link to="/pelanggan/create" className="btn btn-secondary d-block d-flex justify-content-between mb-3" ref={scrollTable}>
                                <i className="fa-sharp fa-solid fa-user-plus mx-2 mt-1"></i>
                                Create Pelanggan
                                <i className="fa-sharp fa-solid fa-user-plus mx-2 mt-1"></i>
                            </Link>
                            <div className="input-group mb-3" ref={scrollTable}>
                                <span className="input-group-text" style={{ backgroundColor: '#4e73df' }} id="basic-addon2"><i className="fa-brands fa-searchengin text-light"></i></span>
                                <input type="text" className="form-control text-center" placeholder="Cari Pelanggan" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e) => setKeyword(e.target.value)} />
                                <span className="input-group-text" style={{ backgroundColor: '#4e73df' }} id="basic-addon2"><i className="fa-brands fa-searchengin text-light"></i></span>
                            </div>
                            {/* Paginator  */}
                            <nav aria-label="...">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <button className={dataLink.current_page == 1 ? 'page-link disabled' : 'page-link'} onClick={() => changePaginate(dataLink.prev_page_url, dataLink.current_page + 1)}>Previous</button>
                                    </li>
                                    {
                                        // links.length != 0 ? (
                                            links.map((val, index) => {
                                                return (
                                                    <li className={currentPage == val.label ? 'page-item active' : 'page-item'} key={index + 1}>
                                                        <button className="page-link" onClick={() => changePaginate(val.url, val.label)}>{val.label}</button>
                                                    </li>
                                                )
                                            })
                                        // ) : (
                                        //     ''
                                        // )
                                    }
                                    <li className="page-item">
                                        <button className={lastPage == dataLink.last_page ? 'page-link disabled' : 'page-link'} onClick={() => changePaginate(dataLink.next_page_url, dataLink.current_page + 1)}>Next</button>
                                    </li>
                                </ul>
                            </nav>
                            {
                                loading ? (
                                    <Loading />
                                ) : (
                                    <table className="table table-bordered shadow-sm table-md">
                                        <thead className='text-center text-light' style={{ backgroundColor: '#3CB371', verticalAlign: 'middle' }}>
                                            <tr>
                                                <th scope="col" style={{ verticalAlign: 'middle' }}>No</th>
                                                <th scope="col" style={{ verticalAlign: 'middle' }} className="col-2">KD Pelanggan</th>
                                                <th scope="col" style={{ verticalAlign: 'middle' }}>Nama</th>
                                                <th scope="col" style={{ verticalAlign: 'middle' }} className="col-2">Alamat</th>
                                                <th scope="col" style={{ verticalAlign: 'middle' }} className="col-2">No Telp</th>
                                                <th scope='col' style={{ verticalAlign: 'middle' }} className="col-1">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className='text-center table-light'>
                                            {
                                                links.length != 0 ? (

                                                    pelanggan.map((val, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <th scope="row" style={{ verticalAlign: 'middle' }}>{index + 1}</th>
                                                                <td style={{ verticalAlign: 'middle' }}>{val.kd_pelanggan}</td>
                                                                <td style={{ verticalAlign: 'middle' }}>{val.nama}</td>
                                                                <td style={{ verticalAlign: 'middle' }}>{val.alamat}</td>
                                                                <td style={{ verticalAlign: 'middle' }}>{val.notelp}</td>
                                                                <td className='col-3' style={{ verticalAlign: 'middle' }}>
                                                                    <Link className="btn btn-info mx-2" to={"/pelanggan/edit/" + val.kd_pelanggan}><i className="fa-solid fa-pen-to-square mx-1"></i></Link>
                                                                    <button className="btn btn-danger" onClick={() => deletePelanggan(val.kd_pelanggan)}><i className="fa-solid fa-trash mx-1"></i></button>
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

export default Pelanggan;