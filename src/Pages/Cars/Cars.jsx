import { MessageCircle, Send } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Forimage, axios } from '../../Server/Api';

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCarTypes, setSelectedCarTypes] = useState([]);
  const [selectedModel, setSelectedModel] = useState('');

  useEffect(() => {
    axios.get('/cars').then(({data}) => {setCars(data.data)})
  }, [])

  console.log(cars)

  // const cars = [
  //   {
  //     id: 1,
  //     name: 'BMW M5 F90',
  //     image: '',
  //     price: { AED: 2000, USD: 2000 },
  //     brand: 'BMW',
  //     type: 'M8'
  //   },
  //   {
  //     id: 2,
  //     name: 'Lambargini 911',
  //     image: '',
  //     price: { AED: 4000, USD: 4000 },
  //     brand: 'Lambargini',
  //     type: 'Sports'
  //   },
  //   {
  //     id: 3,
  //     name: 'BMW Chiron',
  //     image: '',
  //     price: { AED: 540, USD: 679 },
  //     brand: 'BMW',
  //     type: 'Luxury'
  //   },
  //   {
  //     id: 4,
  //     name: 'Ford Mustang',
  //     image: '',
  //     price: { AED: 4000, USD: 5000 },
  //     brand: 'Ford',
  //     type: 'FORD'
  //   }
  // ];

  const brands = ['BMW', 'Lambargini', 'Ford', 'Bentle'];
  const carTypes = ['M8', 'FORD'];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-6 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-red-600 text-2xl font-bold tracking-wider">TERRA</h1>
          <p className="text-gray-400 mt-2">Luxury Cars for Rent in Dubai / Hire the latest supercar</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Filter By</h2>
              
              <div className="mb-6">
                <h3 className="text-lg mb-3">Offers</h3>
                <div className="h-px bg-gray-700 mb-4"></div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg mb-3">Car type</h3>
                {carTypes.map(type => (
                  <label key={type} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      className="form-checkbox text-green-500 rounded"
                      checked={selectedCarTypes.includes(type)}
                      onChange={() => {
                        setSelectedCarTypes(prev =>
                          prev.includes(type)
                            ? prev.filter(t => t !== type)
                            : [...prev, type]
                        );
                      }}
                    />
                    <span className="ml-2">{type}</span>
                  </label>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="text-lg mb-3">Brand</h3>
                {brands.map(brand => (
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
                <h3 className="text-lg mb-3">Model</h3>
                <select
                  className="w-full bg-gray-700 rounded p-2"
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                >
                  <option value="">Select a model</option>
                  {cars.map(car => (
                    <option key={car.id} value={car.name}>{car.name}</option>
                  ))}
                </select>
              </div>

              <div className="flex gap-4">
                <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition">
                  Reset
                </button>
                <button className="px-4 py-2 bg-green-600 rounded hover:bg-green-500 transition">
                  Apply filter
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {cars.map(car => (
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;