import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBadge from './components/StatsBadge';
import ProductCatalog from './components/ProductCatalog';
import ProductModal from './components/ProductModal';
import RFQModal from './components/RFQModal';
import DefenseCredentials from './components/DefenseCredentials';
import SolutionsSection from './components/SolutionsSection';
import ProjectsShowcase from './components/ProjectsShowcase';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [rfqItems, setRfqItems] = useState(() => {
    try {
      const saved = localStorage.getItem('proach_rfq_items');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isRFQOpen, setIsRFQOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('proach_rfq_items', JSON.stringify(rfqItems));
    } catch (e) {}
  }, [rfqItems]);

  const handleAddToRFQ = (product) => {
    if (!rfqItems.some(item => item.id === product.id)) {
      setRfqItems(prev => [...prev, product]);
    }
  };

  const handleRemoveFromRFQ = (productId) => {
    setRfqItems(prev => prev.filter(item => item.id !== productId));
  };

  const handleClearRFQ = () => {
    setRfqItems([]);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Nav */}
      <Navbar 
        rfqCount={rfqItems.length} 
        onOpenRFQ={() => setIsRFQOpen(true)} 
      />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero onOpenRFQ={() => setIsRFQOpen(true)} />
        <StatsBadge />
        <ProductCatalog 
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onAddToRFQ={handleAddToRFQ}
          rfqItems={rfqItems}
        />
        <DefenseCredentials />
        <SolutionsSection />
        <ProjectsShowcase />
        <ContactSection onOpenRFQ={() => setIsRFQOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Detail Modal */}
      <ProductModal 
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToRFQ={handleAddToRFQ}
        inRFQ={selectedProduct ? rfqItems.some(i => i.id === selectedProduct.id) : false}
      />

      {/* RFQ Tender Desk Modal */}
      <RFQModal 
        isOpen={isRFQOpen}
        onClose={() => setIsRFQOpen(false)}
        items={rfqItems}
        onRemoveItem={handleRemoveFromRFQ}
        onClearRFQ={handleClearRFQ}
      />
    </div>
  );
}
