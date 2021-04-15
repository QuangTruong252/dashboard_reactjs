import React, { Fragment } from "react";

function Generality() {
  return (
    <Fragment>
      <div className="main-content">
        <header>
          <div className="menu-toggle">
            <label htmlFor="sidebar-toggle">
              <span className="las la-bars" />
            </label>
          </div>
          <div className="header-icons">
            <span className="las la-search" />
            <span className="las la-bookmark" />
            <span className="las la-sms" />
          </div>
        </header>
        <main>
          <div className="page-header">
            <div>
              <h1>Agriculture Analytics Dashboard</h1>
              <small>
                Monitoring of environmental indicators in agriculture
              </small>
            </div>
          </div>
          <div className="cards">
            <div className="card-single">
              <div className="card-flex">
                <div className="card-info">
                  <div className="card-head">
                    <span>Temperature</span>
                    <small>Average temperature of environmental</small>
                  </div>
                  <h2>35C</h2>
                </div>
                <div className="card-chart red">
                  <span className="las la-temperature-low" />
                </div>
              </div>
            </div>
            <div className="card-single">
              <div className="card-flex">
                <div className="card-info">
                  <div className="card-head ">
                    <span>Soil Moisture</span>
                    <small>Average soil moisture of environmental</small>
                  </div>
                  <h2>20%</h2>
                </div>
                <div className="card-chart blue">
                  <span className="las la-tint" />
                </div>
              </div>
            </div>
            <div className="card-single">
              <div className="card-flex">
                <div className="card-info">
                  <div className="card-head">
                    <span>CO2 Concentration</span>
                    <small>Average CO2 concentration of environmental</small>
                  </div>
                  <h2>
                    <span>40%</span>
                  </h2>
                </div>
                <div className="card-chart yellow">
                  <span className="las la-leaf" />
                </div>
              </div>
            </div>
          </div>
          <div className="detail-grid">
            <div className="analytics-card">
              <div className="analytics-head">
                <h3>Analytics infomations</h3>
                <span className="las la-ellipsis-h" />
              </div>
              <div className="analytics-chart">
                <div className="chart-circle">
                  <h1>75%</h1>
                </div>
                <div className="analytics-note">
                  <span>The quality of the plant's habitat is okay</span>
                </div>
              </div>
              <div className="analytics-btn">
                <button>Detail Report</button>
              </div>
            </div>
            <div className="history">
              <div className="history-head-flex">
                <h3>History</h3>
                <small>
                  See all the history
                  <span className="las la-arrow-right" />
                </small>
              </div>
              <div className="table-responsive">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <div className="tr-head">Date</div>
                      </td>
                      <td>
                        <div className="tr-head">Time</div>
                      </td>
                      <td>
                        <div className="tr-head">
                          <span>Temperature</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-head">
                          <span>Soil Moiture</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-head">
                          <span>CO2 Connectration</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="tr-info">14/3/2021</div>
                      </td>
                      <td>
                        <div className="tr-info">14h25m30s</div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>30C</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>30%</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>40%</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="tr-info">14/3/2021</div>
                      </td>
                      <td>
                        <div className="tr-info">14h25m30s</div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>30C</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>30%</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>40%</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="tr-info">14/3/2021</div>
                      </td>
                      <td>
                        <div className="tr-info">14h25m30s</div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>30C</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>30%</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>40%</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="tr-info">14/3/2021</div>
                      </td>
                      <td>
                        <div className="tr-info">14h25m30s</div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>30C</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>30%</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>40%</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="tr-info">14/3/2021</div>
                      </td>
                      <td>
                        <div className="tr-info">14h25m30s</div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>30C</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>30%</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>40%</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="tr-info">14/3/2021</div>
                      </td>
                      <td>
                        <div className="tr-info">14h25m30s</div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>30C</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>30%</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>40%</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="tr-info">14/3/2021</div>
                      </td>
                      <td>
                        <div className="tr-info">14h25m30s</div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>30C</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>30%</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>40%</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="tr-info">14/3/2021</div>
                      </td>
                      <td>
                        <div className="tr-info">14h25m30s</div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>30C</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>30%</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>40%</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="tr-info">14/3/2021</div>
                      </td>
                      <td>
                        <div className="tr-info">14h25m30s</div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>30C</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>30%</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>40%</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="tr-info">14/3/2021</div>
                      </td>
                      <td>
                        <div className="tr-info">14h25m30s</div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>30C</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>30%</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>40%</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="tr-info">14/3/2021</div>
                      </td>
                      <td>
                        <div className="tr-info">14h25m30s</div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>30C</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>30%</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>40%</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="tr-info">14/3/2021</div>
                      </td>
                      <td>
                        <div className="tr-info">14h25m30s</div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>30C</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>30%</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>40%</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="tr-info">14/3/2021</div>
                      </td>
                      <td>
                        <div className="tr-info">14h25m30s</div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>30C</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>30%</span>
                        </div>
                      </td>
                      <td>
                        <div className="tr-info">
                          <span>40%</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
}

export default Generality;
