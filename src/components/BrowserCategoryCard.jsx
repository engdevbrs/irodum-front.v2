import { Link } from "react-router-dom";


export default function BrowserCategoryCard({ data }) {

  return (
    <>
      <div
        className={`iconbox-style1`}
      >
        <div className="icon">
          <span className={data.icon} />
        </div>
        <div className="details mt20">
          <p className="text mb5">{data.skill} skills</p>
          <h4 className="title">
            <Link to="/service-1">{data.title}</Link>
          </h4>
          <p className="mb-0">{data.brif} </p>
        </div>
      </div>
    </>
  );
}
