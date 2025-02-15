import { MessageCircle, Send } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Forimage, axios } from '../../Server/Api';
import { scrollToTop } from '../../utils';

const Cars = () => {
  const { lang } = useSelector((state) => state.lang);

  const [cars, setCars] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCarTypes, setSelectedCarTypes] = useState([]);
  const [selectedModel, setSelectedModel] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    axios.get('/cars').then(({data}) => {
      setCars(data.data);
      setFilteredCars(data.data);
    });
    scrollToTop();
  }, []);

  // Get unique car types and brands
  const uniqueCarTypes = Array.from(
    new Set(cars.map(car => car.category.name_en))
  );
  
  const uniqueBrands = Array.from(
    new Set(cars.map(car => car.brand.title))
  );

  // Apply filters
  const applyFilters = () => {
    let filtered = [...cars];

    // Filter by car type
    if (selectedCarTypes.length > 0) {
      filtered = filtered.filter(car => 
        selectedCarTypes.includes(car.category.name_en)
      );
    }

    // Filter by brand
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(car => 
        selectedBrands.includes(car.brand.title)
      );
    }

    // Filter by model
    if (selectedModel) {
      filtered = filtered.filter(car => 
        car.model.name === selectedModel
      );
    }

    setFilteredCars(filtered);
  };

  // Reset filters
  const resetFilters = () => {
    setSelectedCarTypes([]);
    setSelectedBrands([]);
    setSelectedModel('');
    setFilteredCars(cars);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-6 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-red-600 text-2xl font-bold tracking-wider">TERRA</h1>
          <p className="text-gray-400 mt-2">{lang === 'eng' ? 'Luxury Cars for Rent in Dubai / Hire the latest supercar' : 'Аренда роскошных автомобилей в Дубае / Возьмите напрокат новейший суперкар'}</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6">{lang === 'eng' ?'Filter By': 'Фильтровать по'}</h2>
              
              <div className="mb-6">
                <h3 className="text-lg mb-3">{lang === 'eng' ? 'Car type' : 'Тип машины'}</h3>
                {uniqueCarTypes.map(carType => (
                  <label key={carType} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      className="form-checkbox rounded"
                      checked={selectedCarTypes.includes(carType)}
                      onChange={() => {
                        setSelectedCarTypes(prev =>
                          prev.includes(carType)
                            ? prev.filter(t => t !== carType)
                            : [...prev, carType]
                        );
                      }}
                    />
                    <span className="ml-2">{carType}</span>
                  </label>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="text-lg mb-3">{lang === 'eng' ? 'Brand' : 'Бренд'}</h3>
                {uniqueBrands.map(brand => (
                  <label key={brand} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      className="form-checkbox text-green-500 rounded"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => {
                        setSelectedBrands(prev =>
                          prev.includes(brand)
                            ? prev.filter(b => b !== brand)
                            : [...prev, brand]
                        );
                      }}
                    />
                    <span className="ml-2">{brand}</span>
                  </label>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="text-lg mb-3">{lang === 'eng' ? 'Model' : 'Модель'}</h3>
                <select
                  className="w-full bg-gray-700 rounded p-2"
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                >
                  <option value="">{lang === 'eng' ? 'Select a model' : 'Выбрать модель'}</option>
                  {cars.map(car => (
                    <option key={car.id} value={car.model.name}>{car.model.name}</option>
                  ))}
                </select>
              </div>

              <div className="flex gap-4">
                <button 
                  className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition"
                  onClick={resetFilters}
                >
                  {lang === 'eng' ? 'Reset' : 'Сброс'}
                </button>
                <button 
                  className="px-4 py-2 bg-green-600 rounded hover:bg-green-500 transition"
                  onClick={applyFilters}
                >
                  {lang === 'eng' ? 'Apply filter' : 'Фильтровать'}
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCars.length ? filteredCars.map(car => (
                <div key={car.id} className="bg-gray-800 rounded-lg overflow-hidden">
                  <Link to={`/cars/${car.id}`}>
                    <img
                      src={`${Forimage}/${car.car_images[0].image.src}`}
                      alt={`${car.brand.title} ${car.model.name}`}
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{car.brand.title} {car.model.name}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-lg font-bold">AED {car.price_in_aed}</span>
                        <span className="text-gray-400 ml-2">/ $ {car.price_in_usd}</span>
                      </div>
                      <span className="text-gray-400">per day</span>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition">
                        <MessageCircle size={20} />
                        Whatsapp
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition">
                        <Send size={20} />
                        Telegram
                      </button>
                    </div>
                  </div>
                </div>
              ))
            :
              "NO DATA"
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;