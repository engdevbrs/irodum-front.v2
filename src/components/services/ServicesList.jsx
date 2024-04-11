import Axios from "axios";
import { useEffect, useState } from "react";
import {Buffer} from 'buffer';
import listingStore from "../store/listingStore";
import priceStore from "../store/priceStore";
import ListingOption from "./ListingOption"
import PopularServiceSlideCard from "./PopularServiceSlideCard"
import PopularServiceCard from "./PopularServiceCard"
import Pagination from "../../utils/Pagination";
import ListingSidebarModal from "../modals/ListingSidebarModal";
import Loading from "../../utils/Loading";


export default function ServicesList() {

  const [ servicesData, setServicesData ] = useState([])
  const [ loading, setLoading ] = useState(true)

  const getDeliveryTime = listingStore((state) => state.getDeliveryTime);
  const getPriceRange = priceStore((state) => state.priceRange);
  const getLevel = listingStore((state) => state.getLevel);
  const getLocation = listingStore((state) => state.getLocation);
  const getBestSeller = listingStore((state) => state.getBestSeller);
  const getDesginTool = listingStore((state) => state.getDesginTool);
  const getSpeak = listingStore((state) => state.getSpeak);
  const getSearch = listingStore((state) => state.getSearch);

  // delivery filter
  const deliveryFilter = (item) =>
    getDeliveryTime === "" || getDeliveryTime === "anytime"
      ? item
      : item.deliveryTime === getDeliveryTime;

  // price filter
  const priceFilter = (item) =>
    getPriceRange.min <= item.price && getPriceRange.max >= item.price;

  // level filter
  const levelFilter = (item) =>
    getLevel?.length !== 0 ? getLevel.includes(item.level) : item;

  // location filter
  const locationFilter = (item) =>
    getLocation?.length !== 0 ? getLocation.includes(item.location) : item;

  const searchFilter = (item) =>
    getSearch !== ""
      ? item.location.split("-").join(" ").includes(getSearch.toLowerCase())
      : item;

  // sort by filter
  const sortByFilter = (item) =>
    getBestSeller === "best-seller" ? item : item.sort === getBestSeller;

  // design tool filter
  const designToolFilter = (item) =>
    getDesginTool?.length !== 0 ? getDesginTool.includes(item.tool) : item;

  // speak filter
  const speakFilter = (item) =>
    getSpeak?.length !== 0 ? getSpeak.includes(item.language) : item;

    useEffect(() => {
      Axios.get("https://www.services.irodum.com/api/get-all-services")
                    .then((result) => {
                        if(result.status === 200){
                          setLoading(false);
                          setServicesData(result.data)
                        }
                    }).catch(error => {
                          setServicesData(error.response.status)
                    });
    }, []);

  return (
    <>
      {
        loading === true ? <Loading /> 
        :
        <>
        <section className="pt30 pb90">
          <div className="container">
            <ListingOption />
            <div className="row">
              {servicesData
                .slice(0, 12)
                // .filter(deliveryFilter)
                // .filter(priceFilter)
                // .filter(levelFilter)
                // .filter(locationFilter)
                // .filter(searchFilter)
                // .filter(sortByFilter)
                // .filter(designToolFilter)
                // .filter(speakFilter)
                .map((item,i) => {
                  let imageServicesToString = Buffer.from(item.imageServices)
                  let serviceImg = JSON.parse(imageServicesToString)
                  return(
                    (
                      <div key={ i } className="col-sm-6">
                        {serviceImg?.length > 0 ? (
                          <PopularServiceSlideCard data={item} />
                        ) : (
                          <PopularServiceCard data={item} />
                        )}
                      </div>
                    )
                  )
                })}
            </div>
            <Pagination />
          </div>
        </section>
        <ListingSidebarModal />
        </>
      }
    </>
  );
}
