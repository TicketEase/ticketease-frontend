import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FAQSearchBar.css';
import FAQNav from './FAQNav';
import CustomNavbar from '../CustomNavbar/CustomNavbar';
import Footer from '../Footer/Footer';
function FAQSearchBar() {
  const [searchWord, setSearchWord] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [faqData, setFaqData] = useState([]);
  const [searchErrorMessage, setSearchErrorMessage] = useState('');
  

  useEffect(() => {
    fetchFAQData();
  }, []);

  const fetchFAQData = () => {
    axios
      .get('https://ticketeaseserver.onrender.com/faq')
      .then((response) => {
        const data = response.data;
        setFaqData(data);
        setSearchResults(data);
      })
      .catch((error) => {
        console.error('Error fetching FAQ data:', error);
      });
  };

  const toggleAnswer = (index) => {
    const updatedData = [...searchResults];
    updatedData[index].expanded = !updatedData[index].expanded;
    setSearchResults(updatedData);
  };

  const handleSearch = () => {
    const filteredResults = faqData.filter((item) =>
      item.question.toLowerCase().includes(searchWord.toLowerCase())
    );
    setSearchResults(filteredResults);

    if (filteredResults.length === 0) {
      setSearchErrorMessage('No results found, please choose a closer word');
    } else {
      setSearchErrorMessage('');
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchWord(inputValue);

    if (inputValue === '') {
      setSearchResults(faqData);
      setSearchErrorMessage('');
    }
  };

  const handleClearSearch = () => {
    setSearchWord('');
    setSearchResults(faqData);
    setSearchErrorMessage('');
  };

  const displayData = searchWord === '' ? faqData : searchResults;

  return (
    <>
        <FAQNav/>

<div className="faq-container">
  <div className="imgHead">
     <img src="https://www.wenovio.com/wp-content/uploads/2021/10/blogue-faq-banner.png"/> </div>
  <div className="faq-heading">
    <h2 className="faq-title">Got Questions? We've Got Answers!</h2>
    <p className="faq-description">
      Welcome to our comprehensive FAQ section, designed to provide you with quick and helpful answers to your inquiries. Whether you're looking for guidance on using our product, troubleshooting an issue, or seeking clarification on our services, you're in the right place.<br/><br/>
      Simply enter your question in the search bar below, and let our smart search algorithm fetch the most relevant information. Can't find what you're looking for? No worries! Our dedicated support team is just a click away to provide personalized assistance.<br/><br/>
      Take a deep breath, relax, and let us take care of your concerns. Happy exploring!
    </p>
  </div>

  <div className="search-bar-container">
    <div className="input-group">
      <input
        type="search"
        className="search-input"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        value={searchWord}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch} type="button" className="search-button1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
          <path
            d="M15.5 14h-.8l-.3-.3a6.5 6.5 0 1 0-.7.7l.3.3v.8l4.5 4.5 1.5-1.5-4.4-4.4zm-6 0a4.5 4.5 0 1 1 4.5-4.5A4.504 4.504 0 0 1 9.5 14z"
            fill="#fff"
          />
        </svg>
      </button>
      {searchWord !== '' && (
        <button onClick={handleClearSearch} type="button" className="clear-button">
          ✘
        </button>
      )}
    </div>

    {displayData.length > 0 && (
      <div className="faq-list">
        {displayData.map((item, index) => (
          <div key={item.question} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h3>{item.question}</h3>
              <span className={`faq-arrow ${item.expanded ? 'expanded' : ''}`}></span>
            </div>
            <p className={`faq-answer ${item.expanded ? 'expanded' : ''}`}>{item.answer}</p>
          </div>
        ))}
      </div>
    )}

    {searchErrorMessage && (
      <div className="search-error">
        <span className="search-error-icon"></span>
        <p>{searchErrorMessage}</p>
      </div>
    )}
  </div>
</div>
<Footer/>
    </>
    
  );
}

export default FAQSearchBar;
