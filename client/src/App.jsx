import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import ProductModal from './components/ProductModal';
import RFQModal from './components/RFQModal';
import SolutionsSection from './components/SolutionsSection';
import ProjectsShowcase from './components/ProjectsShowcase';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [view, setView] = useState('home'); // 'home' | 'products'

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

  const handleNavigate = (targetView) => {
    setView(targetView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Navbar */}
      <Navbar 
        rfqCount={rfqItems.length} 
        onOpenRFQ={() => setIsRFQOpen(true)}
        currentView={view}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        {view === 'home' ? (
          <>
            <Hero 
              onOpenRFQ={() => setIsRFQOpen(true)} 
              onNavigate={handleNavigate}
            />
            <SolutionsSection />
            <ProjectsShowcase />
            <ContactSection onOpenRFQ={() => setIsRFQOpen(true)} />
          </>
        ) : (
          <ProductCatalog 
            onSelectProduct={(prod) => setSelectedProduct(prod)}
            onAddToRFQ={handleAddToRFQ}
            rfqItems={rfqItems}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

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
