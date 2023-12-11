import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Page/Login';
import Dashboard from './Components/Dashboard';
import { Helmet } from 'react-helmet';
import DashboardIndex from './Page/DashboardIndex';

// Pelanggan Import
import Pelanggan from './Page/Pelanggan/Pelanggan';
import PelangganCreate from './Page/Pelanggan/PelangganCreate';
import PelangganEdit from './Page/Pelanggan/PelangganEdit';

// Paket Import
import Paket from './Page/Paket/Paket';
import PaketCreate from './Page/Paket/PaketCreate';
import PaketEdit from './Page/Paket/PaketEdit';

// Transaksi Routes
import Transaksi from './Page/Transaksi/Transaksi';
import TransaksiCreate from './Page/Transaksi/TransaksiCreate';
import TransaksiEdit from './Page/Transaksi/TransaksiEdit';

// Detail Transaksi Routes
import DetailTransaksi from './Page/DetailTransaksi/DetailTransaksi';
import DetailTransaksiCreate from './Page/DetailTransaksi/DetailTransaksiCreate';
import DetailTransaksiEdit from './Page/DetailTransaksi/DetailTransaksiEdit';


function App() {

  return (
    <>
      {/* Js for sb admin  */}
      <Helmet>
        <script src="./assets/vendor/jquery/jquery.min.js"></script>
        <script src="./assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="./assets/vendor/jquery-easing/jquery.easing.min.js"></script>
        <script src="./assets/js/sb-admin-2.min.js"></script>
        <script src="./assets/vendor/chart.js/Chart.min.js"></script>
        <script src="./assets/js/demo/chart-area-demo.js"></script>
        <script src="./assets/js/demo/chart-pie-demo.js"></script>
      </Helmet>



      {/* Routing  */}
      <BrowserRouter>

        <Routes>

          {/* Dashboard Routes  */}


          {/* Pelanggan Routes  */}
          <Route path='/dashboard' element={
            <Dashboard>
              <DashboardIndex />
            </Dashboard>
          }
          />
          <Route path='/pelanggan' element={
            <Dashboard>
              <Pelanggan />
            </Dashboard>
          }
          />
          <Route path='/pelanggan/create' element={
            <Dashboard>
              <PelangganCreate />
            </Dashboard>
          }
          />

          <Route path='/pelanggan/edit/:id' element={
            <Dashboard>
              <PelangganEdit />
            </Dashboard>
          }
          />
          {/* End Pelanggan Routes  */}

          {/* Paket Routes  */}


          <Route path='/paket' element={
            <Dashboard>
              <Paket />
            </Dashboard>
          }
          />

          <Route path='/paket/create' element={
            <Dashboard>
              <PaketCreate />
            </Dashboard>
          }
          />

          <Route path='/paket/edit/:id' element={
            <Dashboard>
              <PaketEdit />
            </Dashboard>
          }
          />

          {/* End paket Routes  */}

          {/* Transaksi Routes  */}


          <Route path='/transaksi' element={
            <Dashboard>
              <Transaksi />
            </Dashboard>
          }
          />

          <Route path='/transaksi/create' element={
            <Dashboard>
              <TransaksiCreate />
            </Dashboard>
          }
          />

          <Route path='/transaksi/edit/:id' element={
            <Dashboard>
              <TransaksiEdit />
            </Dashboard>
          }
          />

          {/* End Transaksi Routes  */}

          {/* DetailTransaksi Routes  */}


          <Route path='/detailtransaksi' element={
            <Dashboard>
              <DetailTransaksi />
            </Dashboard>
          }
          />

          <Route path='/detailtransaksi/create' element={
            <Dashboard>
              <DetailTransaksiCreate />
            </Dashboard>
          }
          />

          <Route path='/detailtransaksi/edit/:id' element={
            <Dashboard>
              <DetailTransaksiEdit />
            </Dashboard>
          }
          />

          {/* End DetailTransaksi Routes  */}



          {/* End Dashboard Routes  */}



          <Route path='/login' element={<Login />} />
        </Routes>

      </BrowserRouter>




    </>
  );
}

export default App;
