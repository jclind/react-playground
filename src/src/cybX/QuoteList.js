import React, { useState, useEffect } from 'react'
// import { formatDateStringToMMDDYYYY } from './formatDateStringToMMDDYYYY'
import { formatDateStringToMMDDYYYY } from './formatDateStringToMMDDYYYY'
import SingleQuote from './SingleQuote'

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

const exampleQuoteData = {
  formula_data: {
    reseller_data: exampleResellerData,
    admin_data: exampleAdminData,
  },
  additional_quote_data: {
    quote_id: 1,
    created_at: '2024-09-27 02:49:34',
    start_date: '2024-09-27 06:49:28',
    user_company: {
      company_id: 20,
      company_name: 'Upsilon Corp',
    },
  },
  personal_data: {
    reseller_id: 1,
    reseller_name: 'Steven Philips',
    reseller_company: {
      company_id: 21,
      company_name: 'Wholesalepages',
    },
  },
}

const QuoteList = () => {
  const [quotes, setQuotes] = useState([exampleQuoteData])
  const [filteredQuotes, setFilteredQuotes] = useState([])
  const [companies, setCompanies] = useState([])
  const [selectedCompany, setSelectedCompany] = useState('')
  const [currUserIsAdmin, setCurrUserIsAdmin] = useState(false)

  const [error, setError] = useState(null)
  const [isCybxReady, setIsCybxReady] = useState(false)

  // Check if cybxsecurity is ready
  // useEffect(() => {
  //   const checkCybxReady = setInterval(() => {
  //     if (typeof window.cybxsecurity !== 'undefined') {
  //       setIsCybxReady(true)
  //       clearInterval(checkCybxReady) // Clear the interval once cybxsecurity is ready
  //     }
  //   }, 100) // Check every 100ms

  //   return () => clearInterval(checkCybxReady) // Cleanup on unmount
  // }, [])
  // useEffect(() => {
  //   if (isCybxReady) {
  //     const fetchQuotes = async () => {
  //       if (typeof window.cybxsecurity !== 'undefined') {
  //         try {
  //           const response = await fetch(cybxsecurity.quotes_rest_url, {
  //             method: 'GET',
  //             headers: {
  //               'X-WP-Nonce': cybxsecurity.nonce,
  //             },
  //           })

  //           const data = await response.json()
  //           console.log(data)
  //           if (response.ok) {
  //             setQuotes(data.quotes || [])
  //             setCompanies(data.companies || [])
  //             setCurrUserIsAdmin(!!data.is_admin)
  //             setFilteredQuotes(data.quotes || [])
  //           } else {
  //             throw new Error('Network response was not ok')
  //           }
  //         } catch (error) {
  //           console.error('Error fetching quotes:', error)
  //           setError(error)
  //         }
  //       } else {
  //         console.error('cybxsecurity is not defined')
  //         setError('cybxsecurity is not defined')
  //       }
  //     }

  //     fetchQuotes()
  //   }
  // }, [isCybxReady])

  // useEffect(() => {
  //   if (quotes && quotes.length > 0) {
  //   }
  // }, [quotes])

  const createQuoteLink = quote => {
    const baseUrl = '/quote-form' // Replace with your actual edit route
    const params = new URLSearchParams(quote).toString()
    return `${baseUrl}?is_editing=true&${params}`
  }

  const handleCompanyChange = event => {
    const selectedCompany = event.target.value
    console.log('here')
    setSelectedCompany(selectedCompany)
    if (selectedCompany) {
      const filtered = quotes.filter(
        quote => quote.associated_company === selectedCompany
      )
      setFilteredQuotes(filtered)
    } else {
      setFilteredQuotes(quotes) // Show all quotes if no company is selected
    }
  }

  return (
    <div className='quote-list'>
      <h2>Your Quotes</h2>
      {currUserIsAdmin && companies.length > 0 && (
        <div className='company-filter'>
          <label htmlFor='company-select'>Filter by Company:</label>
          <select
            id='company-select'
            value={selectedCompany}
            onChange={handleCompanyChange}
          >
            <option value=''>All Companies</option>
            {companies.map(company => (
              <option key={company.id} value={company.name}>
                {company.name}
              </option>
            ))}
          </select>
        </div>
      )}
      {quotes.length === 0 ? (
        <p>No quotes available.</p>
      ) : (
        <ul>
          {quotes.map(quote => {
            if (!currUserIsAdmin && quote.is_visible_to_author == 0) {
              return ''
            }
            return (
              <li key={quote.id} className='quote-item'>
                <SingleQuote quoteData={quote} />
                <div className='quote-actions'>
                  <a href={createQuoteLink(quote)} className='edit-quote'>
                    Edit
                  </a>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default QuoteList
