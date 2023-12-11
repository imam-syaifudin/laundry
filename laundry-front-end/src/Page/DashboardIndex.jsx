import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountUp from 'react-countup';

function DashboardIndex(props) {
    const [pelanggan,setPelanggan] = useState([]);
    const [paket,setPaket] = useState([]);
    const [transaksi,setTransaksi] = useState([]);
    const [detailtransaksiCount,setDetailTransaksi] = useState([]);

    let key = ["pelanggan","paket","transaksi","detailtransaksi"];
    const data = [
        setPelanggan,setPaket,setTransaksi,setDetailTransaksi
    ];

    const getData = async () => {
        for ( let i = 0; i < key.length; i++){
            await axios({
                method: 'get',
                url: `http://127.0.0.1:8000/api/${key[i]}/all`
            }).then(response => {
                data[i](response.data);
            })
        }
    } 

    useEffect(() => {
        getData();
    },[])

    return (
        <>  
            <div className="row">
                {/* Earnings (Monthly) Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow-sm h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Total Transaksi</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800"><CountUp end={transaksi.length} /></div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Earnings (Monthly) Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow-sm h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Paket</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800"><CountUp end={paket.length} /></div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Earnings (Monthly) Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow-sm h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Pelanggan
                                    </div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800"><CountUp end={pelanggan.length} /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Pending Requests Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow-sm h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        User
                                        </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800"><CountUp end={0} /></div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-comments fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Content Row */}


        </>
    );
}

export default DashboardIndex;