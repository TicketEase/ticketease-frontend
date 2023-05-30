// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import './FAQSearchBar.css';


// // function FAQSearchBar() {
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [searchResults, setSearchResults] = useState([]);
// //   const [faqData, setFaqData] = useState([]);
// //   const [searchErrorMessage, setSearchErrorMessage] = useState('');

// //   useEffect(() => {
// //     fetchFAQData();
// //   }, []);

// //   const fetchFAQData = () => {
// //     axios
// //       .get('http://localhost:5000/faq')
// //       .then((response) => {
// //         const data = response.data;
// //         setFaqData(data);
// //       })
// //       .catch((error) => {
// //         console.error('Error fetching FAQ data:', error);
// //       });
// //   };

// //   const toggleAnswer = (index) => {
// //     if (searchTerm === '') {
// //       setFaqData((prevState) =>
// //         prevState.map((faq, i) => ({
// //           ...faq,
// //           expanded: i === index ? !faq.expanded : faq.expanded,
// //         }))
// //       );
// //     } else {
// //       setSearchResults((prevState) =>
// //         prevState.map((faq, i) => ({
// //           ...faq,
// //           expanded: i === index ? !faq.expanded : faq.expanded,
// //         }))
// //       );
// //     }
// //   };

// //   const handleSearch = () => {
// //     if (searchTerm === '') {
// //       setSearchResults([]);
// //       setSearchErrorMessage('');
// //     } else {
// //       const filteredResults = faqData.filter((item) =>
// //         item.question.toLowerCase().includes(searchTerm.toLowerCase())
// //       );
// //       setSearchResults(filteredResults);

// //       if (filteredResults.length === 0) {
// //         setSearchErrorMessage('No results found, please choose a closer word');
// //       } else {
// //         setSearchErrorMessage('');
// //       }
// //     }
// //   };

// //   const handleInputChange = (e) => {
// //     setSearchTerm(e.target.value);
// //   };

// //   const handleClearSearch = () => {
// //     setSearchTerm('');
// //     setSearchResults([]);
// //     setSearchErrorMessage('');
// //   };

// //   return (
// //     <div className="faq-container">
// //       <div className="input-group">
// //         <input
// //           type="search"
// //           className="search-input"
// //           placeholder="Search"
// //           aria-label="Search"
// //           aria-describedby="search-addon"
// //           value={searchTerm}
// //           onInput={handleInputChange}
// //         />
// //         <button onClick={handleSearch} type="button" className="search-button">
// //           Search
// //         </button>
// //         {searchTerm !== '' && (
// //           <button onClick={handleClearSearch} type="button" className="clear-button">
// //             Clear
// //           </button>
// //         )}
// //       </div>

// //       {searchResults.length > 0 && (
// //         <div className="search-results">
// //           {searchResults.map((result, index) => (
// //             <div key={result.question} className="result-item">
// //               <div className="faq-question" onClick={() => toggleAnswer(index)}>
// //                 <h3>{result.question}</h3>
// //                 <span className={`faq-arrow ${result.expanded ? 'expanded' : ''}`}></span>
// //               </div>
// //               <p className={`faq-answer ${result.expanded ? 'expanded' : ''}`}>{result.answer}</p>
// //             </div>
// //           ))}
// //         </div>
// //       )}

// //       {searchErrorMessage && (
// //         <div className="search-error">
// //           <p>{searchErrorMessage}</p>
// //         </div>
// //       )}

// //       {searchTerm === '' && faqData.length > 0 && (
// //         <div className="faq-list">
// //           {faqData.map((item, index) => (
// //             <div key={item.question} className="faq-item">
// //               <div className="faq-question" onClick={() => toggleAnswer(index)}>
// //                 <h3>{item.question}</h3>
// //                 <span className={`faq-arrow ${item.expanded ? 'expanded' : ''}`}></span>
// //               </div>
// //               <p className={`faq-answer ${item.expanded ? 'expanded' : ''}`}>{item.answer}</p>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default FAQSearchBar;


// .faq-container {
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 20px;
// }

// .input-group {
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// }

// .search-input {
//   flex-grow: 1;
//   height: 50px;
//   margin-right: 10px;
//   padding: 0 20px;
//   border: none;
//   border-radius: 30px;
//   background-color: #f2f2f2;
//   font-size: 16px;
//   color: #555;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// }

// .search-button {
//   padding: 10px 20px;
//   border-radius: 30px;
//   background-color: #000000;
//   color: #fff;
//   font-size: 16px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
//   border: none;
// }

// .search-button:hover {
//   background-color: #ff8c00;
// }

// .clear-button {
//   padding: 10px 20px;
//   border-radius: 30px;
//   background-color: #ccc;
//   color: #fff;
//   font-size: 16px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
//   border: none;
//   margin-left: 10px;
// }

// .clear-button:hover {
//   background-color: #999;
// }

// .search-results,
// .faq-list {
//   margin-top: 20px;
// }

// .result-item,
// .faq-item {
//   margin-bottom: 20px;
//   background-color: #ffffff;
//   border: 1px solid #e0e0e0;
//   border-radius: 8px;
//   padding: 20px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// }

// .faq-question {
//   display: flex;
//   align-items: center;
//   cursor: pointer;
// }

// .faq-question h3 {
//   margin-bottom: 0;
//   flex-grow: 1;
//   color: #333;
//   font-weight: bold;
//   font-size: 20px;
// }

// .faq-arrow {
//   width: 12px;
//   height: 12px;
//   border-top: 2px solid #333;
//   border-right: 2px solid #333;
//   transform: rotate(45deg);
//   transition: transform 0.3s ease-in-out;
//   margin-left: 10px;
// }

// .faq-arrow.expanded {
//   transform: rotate(135deg);
// }

// .faq-answer {
//   display: none;
//   margin-top: 10px;
//   color: #555;
//   font-size: 16px;
//   line-height: 1.5;
// }

// .faq-answer.expanded {
//   display: block;
// }

// .search-error {
//   margin-top: 20px;
//   color: red;
//   font-size: 16px;
//   text-align: center;
// }

// .search-error::before {
//   content: "⚠";
//   display: block;
//   font-size: 24px;
//   margin-bottom: 10px;
// }

// .search-error p {
//   margin: 0;
// }

// /* Hide the clear button in the search input */
// .search-input::-ms-clear,
// .search-input::-ms-reveal {
//   display: none;
// }

// .search-input::-webkit-search-cancel-button {
//   display: none;
// }

// .search-input::-webkit-search-decoration,
// .search-input::-webkit-search-results-button,
// .search-input::-webkit-search-results-decoration {
//   display: none;
// }
