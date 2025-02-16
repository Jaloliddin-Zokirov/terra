import React, { useEffect, useState } from "react";
import { axios } from "../../Server/Api";
import CarCard from "../../Components/CarCard/CarCard";
import { Link } from "react-router-dom";
import { CircleChevronRight } from "lucide-react";

const CarCardHomePage = () => {
  const [categories, setCategories] = useState(null);
  const [cars, setCars] = useState(null);

  useEffect(() => {
    axios
      .get("/categories")
      .then((res) => setCategories(res?.data?.data))
      .catch(console.log);
    axios
      .get("/cars")
      .then((res) => setCars(res?.data?.data))
      .catch(console.log);
  }, []);

  const categoriesId = categories?.at(-1)?.id;

  const filteredCars = cars?.filter(
    (car) => car?.category?.id === categoriesId
  );

  return (
    <section className="py-6">
      <div className="container">
        <div className="flex text-white text-center items-center my-[30px] w-full justify-between aos-init aos-animate">
          <h3 className="text-[25px] md:text-[35px] uppercase">M8</h3>
          <Link
            to="cars"
            className="btnRuB flex items-center justify-center text-[12px] ml-auto gap-2 text-white md:text-[18px]"
          >
            <p className="m-0">SEE ALL</p>
            <CircleChevronRight className="size-7 text-white" />
          </Link>
        </div>
        <CarCard cars={filteredCars} />
      </div>
    </section>
  );
};

export default CarCardHomePage;
