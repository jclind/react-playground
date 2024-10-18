import React from 'react'
import { formatDateStringToMMDDYYYY } from './formatDateStringToMMDDYYYY'
/* 

Associated Company
Date Created
Start Date
total months

**/

const exampleResellerData = {
  protection_one_time: 149623.63,
  protection_monthly: 4225.66,
  protection_yearly: 49507.88,
  consulting_one_time: 8640.0,
  consulting_monthly: 240.0,
  consulting_yearly: 2880.0,
  total_one_time: 158263.63,
  total_monthly: 4465.66,
  total_yearly: 52387.88,
}
const exampleAdminData = {
  prog_price_prot_sales_percentage: 20.0,
  prog_price_prot_sales_ppe: 29924.73,
  prog_price_cons_sales_percentage: 30.0,
  prog_price_cons_sales_ppe: 1080.0,
  prog_price_total: 31004.73,
  selected_ppe_prot_sales_percentage: 30.0,
  selected_ppe_prot_sales_ppe: 45037.64,
  selected_ppe_cons_sales_percentage: 12.5,
  selected_ppe_cons_sales_ppe: 14563.13,
  selected_ppe_total: 59600.76,
}

const SingleQuote = ({ quoteData }) => {
  const resellerData = quoteData.formula_data.reseller_data
  const adtQuoteData = quoteData.additional_quote_data

  const adminData = quoteData.formula_data.admin_data
  // const {
  //   id,
  //   associated_company_id,
  //   total_encrypted_endpoints,
  //   total_non_encrypted_endpoints,
  //   num_locations,
  //   start_date,
  //   total_months,
  //   created_at,
  //   backup_tb,
  //   monthly_consulting_hours,
  // } = quoteData
  return (
    <>
      <div className='pricing-table'>
        <div className='top-data'>
          <div className='left'>
            <div className='associated-company data-point'>
              <label>Assoc. Company:</label>
              <span>{adtQuoteData.user_company.company_name}</span>
            </div>
            <div className='start-date data-point'>
              <label>Start Date:</label>
              <span>{formatDateStringToMMDDYYYY(adtQuoteData.start_date)}</span>
            </div>
          </div>
          <div className='right'>
            <span>Quote Id: #{adtQuoteData.quote_id}</span>
            <span>
              Created: {formatDateStringToMMDDYYYY(adtQuoteData.created_at)}
            </span>
          </div>
        </div>
        {/* <h3>{associated_company_id}</h3>
      <div className='start-date'>
        <label>Start Date: </label> {formatDateStringToMMDDYYYY(start_date)}
      </div> */}
        <table>
          <thead>
            <tr>
              <th>Payment Type</th>
              <th>Data Protection Pricing</th>
              <th>Consulting Pricing</th>
              <th>Total Payment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>One time Pmt.</td>
              <td>
                $
                {resellerData.protection_one_time.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </td>
              <td>
                $
                {resellerData.consulting_one_time.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </td>
              <td>
                $
                {resellerData.total_one_time.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </td>
            </tr>
            <tr>
              <td>Monthly Pmt.</td>
              <td>
                $
                {resellerData.protection_monthly.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </td>
              <td>
                $
                {resellerData.consulting_monthly.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </td>
              <td>
                $
                {resellerData.total_monthly.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </td>
            </tr>
            <tr>
              <td>Yearly Pmt.</td>
              <td>
                $
                {resellerData.protection_yearly.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </td>
              <td>
                $
                {resellerData.consulting_yearly.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </td>
              <td>
                $
                {resellerData.total_yearly.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='commission-table'>
        <div className='header-title'>Commission Calculation:</div>
        <div className='row header-row'>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell sub-header'>Programmed Price / Endpoint</div>
          <div className='cell'></div>
          <div className='cell sub-header'>Selected Price / Endpoint</div>
        </div>
        <div className='row'>
          <div className='cell label'>Protection Sales:</div>
          <div className='cell percentage'>
            {adminData.prog_price_prot_sales_percentage.toFixed(2)}%
          </div>
          <div className='cell price'>
            $
            {adminData.prog_price_prot_sales_ppe.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
          <div className='cell percentage'>
            {adminData.selected_ppe_prot_sales_percentage.toFixed(2)}%
          </div>
          <div className='cell price'>
            $
            {adminData.selected_ppe_prot_sales_ppe.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
        </div>
        <div className='row'>
          <div className='cell label'>Consulting Sales:</div>
          <div className='cell percentage'>
            {adminData.prog_price_cons_sales_percentage.toFixed(2)}%
          </div>
          <div className='cell price'>
            $
            {adminData.prog_price_cons_sales_ppe.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
          <div className='cell percentage'>
            {adminData.selected_ppe_cons_sales_percentage.toFixed(2)}%
          </div>
          <div className='cell price'>
            $
            {adminData.selected_ppe_cons_sales_ppe.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
        </div>
        <div className='row'>
          <div className='cell label'></div>
          <div className='cell'></div>
          <div className='cell total-price'>
            $
            {adminData.prog_price_total.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
          <div className='cell'></div>
          <div className='cell total-price'>
            $
            {adminData.selected_ppe_total.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
        </div>
      </div>
    </>
    // <div className='single-quote'>
    //   <div className='top-data'>
    //     Quote Id: #{id} <br /> Created: {formatDateStringToMMDDYYYY(created_at)}
    //   </div>
    //   <h3>{associated_company_id}</h3>
    //   <div className='start-date'>
    //     <label>Start Date: </label> {formatDateStringToMMDDYYYY(start_date)}
    //   </div>
    //   <div className='line'></div>

    //   <div className='data'>
    //     <div className='total-months data-cell'>
    //       <label>Quote Duration:</label>
    //       {total_months} Months
    //     </div>
    //     <div className='monthly-consulting-hours data-cell'>
    //       <label>Monthly Consulting Hours</label>
    //       {monthly_consulting_hours} Hours
    //     </div>
    //     <div className='total-months data-cell'>
    //       <label>Number Of Locations</label>
    //       {num_locations}
    //     </div>
    //     <div className='backup-tb data-cell'>
    //       <label>TB Of Backup</label>
    //       {backup_tb}
    //     </div>
    //     <div className='total-encrypted-endpoints data-cell'>
    //       <label>Encrypted Endpoints</label>
    //       {total_encrypted_endpoints}
    //     </div>
    //     <div className='total-non-encrypted-endpoints data-cell'>
    //       <label>Non-Encrypted Endpoints</label>
    //       {total_non_encrypted_endpoints}
    //     </div>
    //   </div>
    // </div>
  )
}

export default SingleQuote
