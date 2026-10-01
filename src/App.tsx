import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import PropertyModal from './components/PropertyModal';
import WhyChooseUs from './components/WhyChooseUs';
import PropertyShowcase from './components/PropertyShowcase';
import ExploreLagos from './components/ExploreLagos';
import BannerSunset from './components/BannerSunset';
import Testimonials from './components/Testimonials';
import AboutSection from './components/AboutSection';
import CallToAction from './components/CallToAction';
import ContactSection from './components/ContactSection';
import InspectionModal from './components/InspectionModal';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';
import { PROPERTIES } from './data/properties';
import { LOCATIONS } from './data/locations';
import { Property, SearchFilters } from './types';

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [inspectionModalOpen, setInspectionModalOpen] = useState(false);
  const [inspectionTargetProperty, setInspectionTargetProperty] = useState<Property | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchCriteria, setSearchCriteria] = useState<SearchFilters | null>(null);

  // Filtered properties based on filter tabs or search panel
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((property) => {
      // 1. Tab filter
      if (activeFilter !== 'All') {
        if (activeFilter === 'Chevron/Ajah') {
          if (property.neighborhood !== 'Chevron' && property.neighborhood !== 'Ajah') {
            return false;
          }
        } else if (property.neighborhood !== activeFilter) {
          return false;
        }
      }

      // 2. Search criteria if submitted
      if (searchCriteria) {
        if (searchCriteria.location !== 'All' && property.neighborhood !== searchCriteria.location) {
          return false;
        }
        if (searchCriteria.propertyType !== 'All' && property.type !== searchCriteria.propertyType) {
          return false;
        }
        if (searchCriteria.priceRange === 'under-100m' && property.priceNgn >= 100000000) {
          return false;
        }
        if (
          searchCriteria.priceRange === '100m-200m' &&
          (property.priceNgn < 100000000 || property.priceNgn > 200000000)
        ) {
          return false;
        }
        if (searchCriteria.priceRange === 'above-200m' && property.priceNgn <= 200000000) {
          return false;
        }
      }

      return true;
    });
  }, [activeFilter, searchCriteria]);

  const handleOpenInspection = (property?: Property) => {
    if (property) {
      setInspectionTargetProperty(property);
    } else {
      setInspectionTargetProperty(null);
    }
    setInspectionModalOpen(true);
  };

  const handleSearch = (filters: SearchFilters) => {
    setSearchCriteria(filters);
    setActiveFilter('All');
    const elem = document.getElementById('properties');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setSearchCriteria(null);
  };

  const handleSelectLocation = (locationName: string) => {
    // Map neighborhood selection to filter
    if (locationName === 'Chevron' || locationName === 'Ajah') {
      setActiveFilter('Chevron/Ajah');
    } else if (['Lekki', 'Ikoyi', 'Banana Island', 'Victoria Island'].includes(locationName)) {
      setActiveFilter(locationName);
    } else {
      setActiveFilter('All');
    }
    setSearchCriteria(null);
    const elem = document.getElementById('properties');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreProperties = () => {
    const elem = document.getElementById('properties');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#060709] text-[#F3F4F6] selection:bg-[#ECC974]/30 selection:text-[#ECC974]">
      {/* Sticky Top Navigation */}
      <Navbar onScheduleClick={() => handleOpenInspection()} />

      <main>
        {/* Cinematic Hero */}
        <Hero
          onExploreProperties={handleExploreProperties}
          onScheduleInspection={() => handleOpenInspection()}
          onSearch={handleSearch}
        />

        {/* Featured Properties */}
        <FeaturedProperties
          properties={filteredProperties}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          onBookInspection={(prop) => handleOpenInspection(prop)}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Property Showcase (Split section with demo statistics) */}
        <PropertyShowcase onViewProperties={handleExploreProperties} />

        {/* Areas We Serve: Explore Lagos */}
        <ExploreLagos
          locations={LOCATIONS}
          onSelectLocation={handleSelectLocation}
        />

        {/* Featured Property Sunset Banner */}
        <BannerSunset onBookInspection={() => handleOpenInspection()} />

        {/* Client Testimonials */}
        <Testimonials />

        {/* About Havenstone: Built Around Trust */}
        <AboutSection />

        {/* Conversion CTA */}
        <CallToAction />

        {/* Contact & Enquiry Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Property Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onScheduleInspection={(prop) => handleOpenInspection(prop)}
      />

      {/* Schedule Inspection Modal */}
      <InspectionModal
        isOpen={inspectionModalOpen}
        onClose={() => setInspectionModalOpen(false)}
        selectedProperty={inspectionTargetProperty}
      />

      {/* Persistent Assistive Features */}
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}
