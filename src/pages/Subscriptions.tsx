import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Subscriptions.css';

export default function Subscriptions() {
  const [activeTab, setActiveTab] = useState('active');

  // Static counts for the mockup as per design requirements
  const counts = {
    all: 5,
    active: 2,
    paused: 1,
    cancelled: 1,
  };

  const tabs = ['all', 'active', 'paused', 'cancelled'];

  return (
    <div className="subscriptions-page">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/dashboard" className="breadcrumb-item">
          <span className="breadcrumb-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.66667 11.3333V9.33333H9.33333V11.3333C9.33333 11.7 9.63333 12 10 12H12C12.3667 12 12.6667 11.7 12.6667 11.3333V6.66667H14.2267C14.58 6.66667 14.7533 6.22667 14.4933 5.98667L8.41333 0.513333C8.18 0.306667 7.82 0.306667 7.58667 0.513333L1.50667 5.98667C1.24667 6.22667 1.42 6.66667 1.77333 6.66667H3.33333V11.3333C3.33333 11.7 3.63333 12 4 12H6C6.36667 12 6.66667 11.7 6.66667 11.3333Z" fill="#90A1B9" />
            </svg>
          </span>
          Home
        </Link>
        <span className="breadcrumb-separator">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke="#90A1B9" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="breadcrumb-current">My subscriptions</span>
      </nav>

      {/* Header Row */}
      <header className="page-header">
        <div className="header-content">
          <h1 className="header-title">My subscriptions</h1>
          <p className="header-subtitle">Manage your active and past subscriptions</p>
        </div>
        <Link to="/plans" className="browse-plans-btn">
          <span className="btn-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 3.33333V12.6667" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3.33333 8H12.6667" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          Browse plans
        </Link>
      </header>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`filter-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}({counts[tab as keyof typeof counts]})
          </button>
        ))}
      </div>
    </div>
  );
}
