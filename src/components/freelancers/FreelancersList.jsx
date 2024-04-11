import listingStore from "../store/listingStore"
import priceStore from "../store/priceStore"
import { freelancer1 } from "../../data/product"
import FreelancerCard from "./FreelancerCard"
import ListingSidebar from "../ListingSidebar"
import ListingOption2 from "../ListingOption2"
import Pagination from "../../utils/Pagination"
import ListingSidebarModal3 from "../modals/ListingSidebarModal3"
import Axios from "axios";
import { useEffect, useState } from "react"
import Loading from "../../utils/Loading"

export default function FreelancersList() {

  const [ freelancersData, setFreelancersData ] = useState([])
  const [ loading, setLoading ] = useState(true)

  const getCategory = listingStore((state) => state.getCategory);
  const priceRange = priceStore((state) => state.priceRange);
  const getLocation = listingStore((state) => state.getLocation);
  const getSearch = listingStore((state) => state.getSearch);
  const getLevel = listingStore((state) => state.getLevel);
  const getSpeak = listingStore((state) => state.getSpeak);
  const getBestSeller = listingStore((state) => state.getBestSeller);

  // category filter
  const categoryFilter = (item) =>
    getCategory?.length !== 0 ? getCategory.includes(item.skill) : item;

  // salary filter
  const priceFilter = (item) =>
    priceRange.min <= item.price && priceRange.max >= item.price;

  // location filter
  const locationFilter = (item) =>
    getLocation?.length !== 0
      ? getLocation.includes(item.location.split(" ").join("-").toLowerCase())
      : item;

  const searchFilter = (item) =>
    getSearch !== ""
      ? item.location.split("-").join(" ").includes(getSearch.toLowerCase())
      : item;

  // level filter
  const levelFilter = (item) =>
    getLevel?.length !== 0 ? getLevel.includes(item.level) : item;

  // speak filter
  const languageFilter = (item) =>
    getSpeak?.length !== 0
      ? getSpeak.includes(item.language.toLowerCase())
      : item;

  // sort by filter
  const sortByFilter = (item) =>
    getBestSeller === "best-seller" ? item : item.sort === getBestSeller;

    useEffect(() => {
      Axios.get("https://www.services.irodum.com/api/get-all-freelancers")
                    .then((result) => {
                        if(result.status === 200){
                          setLoading(false);
                          setFreelancersData(result.data[0])
                        }
                    }).catch(error => {
                          setFreelancersData(error.response.status)
                    });
    }, []);

    const content = freelancersData
    // .slice(0, 6)
    // .filter(categoryFilter)
    // .filter(priceFilter)
    // .filter(locationFilter)
    // .filter(searchFilter)
    // .filter(levelFilter)
    // .filter(languageFilter)
    // .filter(sortByFilter)
    .map((item,i) => (
      <div key={ i } className="col-md-6 col-lg-12">
        <FreelancerCard data={item} />
      </div>
    ));

  return (
    <>
      {
        loading === true ? <Loading /> 
        :
        <>
          <section className="pt30 pb90">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <ListingSidebar />
                </div>
                <div className="col-lg-9">
                  <ListingOption2 itemLength={content?.length} />
                  <div className="row">
                    {content?.length > 0 ? content : "Data not found!"}
                  </div>
                  <div className="row mt30">
                    <Pagination />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ListingSidebarModal3 />
        </>
      }
    </>
  );
}
