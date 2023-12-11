import React from 'react';
import { Link } from 'react-router-dom';

function DetailTransaksi(props) {
    return (
        <>

            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="card shadow mb-4 border-left-success">
                        <div className="card-header py-3 d-flex justify-content-between">
                            <i className="fa-solid fa-list"></i>
                            <h6 className="m-0 font-weight-bold text-success text-center">Detail Transaksi</h6>
                            <i className="fa-solid fa-list"></i>
                        </div>
                        <div className="card-body text-end">

                            <Link to="/detailtransaksi/create" className="btn btn-secondary d-block d-flex justify-content-between mb-3">
                                <i className="fa-sharp fa-solid fa-user-plus mx-2 mt-1"></i>
                                Create Detail Transaksi
                                <i className="fa-sharp fa-solid fa-user-plus mx-2 mt-1"></i>
                            </Link>
                            <div className="input-group mb-3">
                                <span className="input-group-text" style={{ backgroundColor: '#4e73df' }} id="basic-addon2"><i className="fa-brands fa-searchengin text-light"></i></span>
                                <input type="text" className="form-control text-center" placeholder="Cari Detail Transaksi" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span className="input-group-text" style={{ backgroundColor: '#4e73df' }} id="basic-addon2"><i className="fa-brands fa-searchengin text-light"></i></span>
                            </div>
                            <table className="table">
                                <thead className='text-center text-light' style={{ backgroundColor: '#3CB371' }}>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">KD Detail</th>
                                        <th scope="col">No Nota</th>
                                        <th scope="col">KD Paket</th>
                                        <th scope="col">Berat</th>
                                        <th scope="col">Total Biaya</th>
                                        <th scope='col'>Action</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center table-light'>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>Otto</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>
                                            <Link className="btn btn-info mx-2" to="/detailtransaksi/edit/1"><i className="fa-solid fa-pen-to-square mx-1"></i>Edit</Link>
                                            <Link className="btn btn-danger"><i className="fa-solid fa-trash mx-1"></i>Delete</Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default DetailTransaksi;