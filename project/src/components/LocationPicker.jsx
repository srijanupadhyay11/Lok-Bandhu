import React, { useState, useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import Icon from './AppIcon';
import Button from './Button';

const LocationPicker = ({ value, onChange, placeholder = "Enter location..." }) => {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(value || '');
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);
  const autocompleteRef = useRef(null);

  // Google Maps API Key - In production, this should be in environment variables
  const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'demo-key';

  const loader = new Loader({
    apiKey: GOOGLE_MAPS_API_KEY,
    version: 'weekly',
    libraries: ['places', 'geometry']
  });

  useEffect(() => {
    if (value !== currentLocation) {
      setCurrentLocation(value || '');
    }
  }, [value]);

  const getCurrentLocation = () => {
    setIsLoadingLocation(true);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          
          try {
            // Use Google Maps Geocoding API to get address from coordinates
            await loader.load();
            const geocoder = new window.google.maps.Geocoder();
            
            geocoder.geocode(
              { location: { lat: latitude, lng: longitude } },
              (results, status) => {
                if (status === 'OK' && results[0]) {
                  const address = results[0].formatted_address;
                  setCurrentLocation(address);
                  onChange?.(address);
                } else {
                  console.error('Geocoding failed:', status);
                  setCurrentLocation(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
                  onChange?.(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
                }
                setIsLoadingLocation(false);
              }
            );
          } catch (error) {
            console.error('Error loading Google Maps:', error);
            setCurrentLocation(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
            onChange?.(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
            setIsLoadingLocation(false);
          }
        },
        (error) => {
          console.error('Error getting location:', error);
          setIsLoadingLocation(false);
          alert('Unable to get your current location. Please enter manually.');
        }
      );
    } else {
      setIsLoadingLocation(false);
      alert('Geolocation is not supported by this browser.');
    }
  };

  const initializeMap = async () => {
    try {
      await loader.load();
      
      const defaultCenter = { lat: 28.6139, lng: 77.2090 }; // Delhi, India
      
      const map = new window.google.maps.Map(mapRef.current, {
        center: defaultCenter,
        zoom: 13,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      });

      mapInstanceRef.current = map;

      // Add marker
      const marker = new window.google.maps.Marker({
        position: defaultCenter,
        map: map,
        draggable: true,
        title: 'Selected Location'
      });

      markerRef.current = marker;

      // Add click listener to map
      map.addListener('click', (event) => {
        const position = event.latLng;
        marker.setPosition(position);
        
        // Get address from coordinates
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ location: position }, (results, status) => {
          if (status === 'OK' && results[0]) {
            const address = results[0].formatted_address;
            setCurrentLocation(address);
          }
        });
      });

      // Add drag listener to marker
      marker.addListener('dragend', (event) => {
        const position = event.latLng;
        
        // Get address from coordinates
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ location: position }, (results, status) => {
          if (status === 'OK' && results[0]) {
            const address = results[0].formatted_address;
            setCurrentLocation(address);
          }
        });
      });

      // Initialize autocomplete for search
      const searchInput = document.getElementById('map-search-input');
      if (searchInput) {
        const autocomplete = new window.google.maps.places.Autocomplete(searchInput);
        autocomplete.bindTo('bounds', map);
        
        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace();
          if (place.geometry) {
            map.setCenter(place.geometry.location);
            map.setZoom(15);
            marker.setPosition(place.geometry.location);
            setCurrentLocation(place.formatted_address || place.name);
          }
        });
        
        autocompleteRef.current = autocomplete;
      }

    } catch (error) {
      console.error('Error initializing map:', error);
      alert('Error loading Google Maps. Please check your internet connection.');
    }
  };

  const handleMapOpen = () => {
    setIsMapOpen(true);
    // Initialize map after modal opens
    setTimeout(() => {
      initializeMap();
    }, 100);
  };

  const handleMapClose = () => {
    setIsMapOpen(false);
  };

  const handleConfirmLocation = () => {
    onChange?.(currentLocation);
    setIsMapOpen(false);
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setCurrentLocation(newValue);
  };

  const handleInputBlur = () => {
    onChange?.(currentLocation);
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground">
        Location
      </label>
      
      <div className="relative">
        <Icon 
          name="MapPin" 
          size={16} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
        />
        <input
          type="text"
          placeholder={placeholder}
          value={currentLocation}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className="pl-10 pr-20 py-2 w-full border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
          <button
            type="button"
            onClick={getCurrentLocation}
            disabled={isLoadingLocation}
            className="p-1 text-muted-foreground hover:text-foreground transition-colors"
            title="Use current location"
          >
            {isLoadingLocation ? (
              <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
            ) : (
              <Icon name="Navigation" size={16} />
            )}
          </button>
          <button
            type="button"
            onClick={handleMapOpen}
            className="p-1 text-muted-foreground hover:text-foreground transition-colors"
            title="Select on map"
          >
            <Icon name="Map" size={16} />
          </button>
        </div>
      </div>

      {/* Map Modal */}
      {isMapOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-lg shadow-xl w-full max-w-4xl h-[600px] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">Select Location</h3>
              <button
                onClick={handleMapClose}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon name="X" size={20} />
              </button>
            </div>

            {/* Search Bar */}
            <div className="p-4 border-b border-border">
              <div className="relative">
                <Icon 
                  name="Search" 
                  size={16} 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
                />
                <input
                  id="map-search-input"
                  type="text"
                  placeholder="Search for a location..."
                  className="pl-10 pr-4 py-2 w-full border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            {/* Map Container */}
            <div className="flex-1 relative">
              <div ref={mapRef} className="w-full h-full" />
            </div>

            {/* Selected Location Display */}
            <div className="p-4 border-t border-border bg-muted/30">
              <div className="flex items-center space-x-2 mb-3">
                <Icon name="MapPin" size={16} className="text-error" />
                <span className="text-sm font-medium text-foreground">Selected Location:</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {currentLocation || 'Click on the map to select a location'}
              </p>
              <div className="flex items-center justify-end space-x-3">
                <Button
                  variant="outline"
                  onClick={handleMapClose}
                >
                  Cancel
                </Button>
                <Button
                  variant="default"
                  onClick={handleConfirmLocation}
                  disabled={!currentLocation}
                  className="bg-error hover:bg-error/90 text-white"
                >
                  Confirm Location
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationPicker;