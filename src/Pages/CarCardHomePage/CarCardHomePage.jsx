import { CircleChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CarCard from "../../Components/CarCard/CarCard";
import { axios } from "../../Server/Api";
import Loading from '../../Components/Loading/Loading'
import { scrollToTop } from "../../utils";

const CarCardHomePage = () => {
  const [categories, setCategories] = useState(null);
  const [cars, setCars] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    scrollToTop();
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const [carsRes, categoriesRes] = await Promise.all([
          axios.get("/cars"),
          axios.get("/categories")
        ]);
        
        // Ensure cars are unique
        const uniqueCars = Array.from(
          new Map(carsRes?.data?.data.map(car => [car.id, car])).values()
        );
        
        // Ensure categories are unique by name_en
        const uniqueCategories = Array.from(
          new Map(categoriesRes?.data?.data.map(category => [category.name_en, category])).values()
        );
        
        setCars(uniqueCars);
        setCategories(uniqueCategories);
      } catch (err) {
        setError(err.message || 'Failed to fetch data');
        console.error('Error fetching data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSeeAll = (categoryName) => {
    navigate('/cars', { 
      state: { 
        categoryName 
      }
    });
  };

  const getUniqueCarsForCategory = (categoryNameEn) => {
    const categoryCars = cars?.filter(
      (car) => car?.category?.name_en === categoryNameEn
    );

    // Create a Map to ensure uniqueness by car ID
    const uniqueCarsMap = new Map();
    categoryCars?.forEach(car => {
      if (!uniqueCarsMap.has(car.id)) {
        uniqueCarsMap.set(car.id, car);
      }
    });

    return Array.from(uniqueCarsMap.values());
  };

  if (isLoading) {
    return (
      <Loading />
    );
  }

  if (error) {
    return (
      <section className="py-6">
        <div className="container">
          <div className="text-red-500 text-center p-4">
            Error loading data. Please try again later.
          </div>
        </div>
      </section>
    );
  }

  return (
    <div>
      {categories?.map((category) => {
        const uniqueCarsInCategory = getUniqueCarsForCategory(category?.name_en);

        if (uniqueCarsInCategory?.length > 0) {
          return (
            <section key={category.name_en} className="py-6">
              <div className="container">
                <div className="flex text-white text-center items-center my-[30px] w-full justify-around  aos-init aos-animate">
                  <h3 className="text-[25px] md:text-[35px] uppercase">
                    {category?.name_en}
                  </h3>
                  <button
                    onClick={() => handleSeeAll(category?.name_en)}
                    className="btnRuB flex items-center justify-center text-[12px] ml-auto gap-2 text-white md:text-[18px]"
                  >
                    <p className="m-0">SEE ALL</p>
                    <CircleChevronRight className="size-7 text-white" />
                  </button>
                </div>
                <div className="flex">
                  <CarCard cars={uniqueCarsInCategory} />
                </div>
              </div>
            </section>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CarCardHomePage;